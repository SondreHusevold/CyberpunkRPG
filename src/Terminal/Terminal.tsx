import React, { Component } from 'react';  
import styles from './Terminal.module.css';

interface ITerminalState {
	currentPath: string;
	commands: ICommand[];
	currentCommand: string;
	currentFolder: IStructure;
}

interface ICommand {
	command: string;
	result: string;
}

interface IStructure {
	folders: IStructure[],
	permission: boolean,
	result: string
}

class Terminal extends Component<{}, ITerminalState> {
	public prompt = " ❯❯ ";
	public structure: IStructure = { folders: [], permission: false, result: "" };

	public constructor(props: {}) {
		super(props);
		this.state = { 
			commands: [],
			currentCommand: "",
			currentFolder: { folders: [], permission: false, result: "" },
			currentPath: "/home/mainframe ",
		}
		
		this.getFolderStructure();
	}

	public getFolderStructure() {
		const fdd = fetch('MainframeStructure.json');
		fdd.then((s) => s.json().then((data: IStructure) => {
				const home = "home";
				const mainframe = "mainframe"; 
				const currentF = data.folders[home].folders[mainframe];

				this.setState({
					currentFolder: currentF,
				});
				this.structure = data;
			})
		);
	}

	public keyDown = (event: any) => {
		if(event.key === 'Enter'){
			this.execute();
         }
	}

	public changeCurrentCommand = (e: any) => {
		this.setState({currentCommand: e.currentTarget.value})
	}

	public cat() {
		const splitted = this.state.currentCommand.split(' ');
		const fold = splitted[1];
		const target = this.state.currentFolder.folders[fold];
		
		if(target != null && target.file === true && target.permission === true){
			this.print(target.result);
		}
		else if(target != null && target.file === false) {
			this.print(fold + ' is not a file.');
		}
		else if(target != null && target.file === true && target.permission === false){
			this.print("Permission denied.");
		}
		else {
			this.print("File does not exist.");
		}
	}

	public cls = () => {
		this.setState({ commands: [] })
	}

	public parentDirectory() {
		if(this.state.currentPath.trim() === "/"){
			this.print('Parent directory above root does not exist.');
			return;
		}

		let pathSplit = this.state.currentPath.split("/");

		// Remove empty string and pop last.
		pathSplit = pathSplit.splice(1, pathSplit.length-2);

		let folder: IStructure = this.structure;

		if(pathSplit.length > 0) {
			for (const path of pathSplit) {
				folder = folder.folders[path]	
			} 
		}

		if(folder != null){
			this.setState({
				currentFolder: folder,
				currentPath: this.state.currentPath.replace(RegExp('/[^/]*$'), '')
			})
		}
	}

	public changeDirectry() {
		if(this.state.currentCommand.endsWith(" ..")){
			this.parentDirectory();
			return;
		}

		const splitted = this.state.currentCommand.split(' ');
		const fold = splitted[1];
		const target = this.state.currentFolder.folders[fold];

		if(target != null && target.permission === true && target.file === false){
			this.setState({
				currentFolder: target,
				currentPath: this.state.currentPath.trim() + "/" + fold
			})
		}
		else if(target != null && target.permission === false){
			this.print("Permission denied.");
		}
		else {
			this.print(fold + ' does not exist or is not a folder.');
		}
	}

	public ls() {
		let folders = "";
		for (const fold in this.state.currentFolder.folders) {
			if(fold != null){
				folders += fold + "   ";
			}
		}
		this.print(folders);
	}

	public executeFile() {
		const splitted = this.state.currentCommand.split('/');
		const fold = splitted[1];
		const target = this.state.currentFolder.folders[fold];

		if(target != null && target.permission === true && target.file === true && fold.endsWith('.exe')) {
			this.print(target.execute);
		}
		else if(target != null && target.permission === true && target.file === true && fold.endsWith('.Site')){
			window.location.href = target.execute;
		}
		else {
			this.print('File is not executable.');
		}
	}

	public execute() {
		const cmd = this.state.currentCommand.trim();

		if(cmd.toLowerCase().startsWith('./')){
			this.executeFile();
		}
		else if(cmd.toLowerCase().startsWith('cat')) {
			this.cat();
		}
		else if(cmd.toLowerCase() === 'cls'){
			this.cls();
		}
		else if(cmd.toLowerCase().startsWith('exit')) {
			this.print('Wolf.exe is running by another user. Exiting module before terminating could be dangerous for plugged in users. \n EXIT ABORTED...');
		}
		else if(cmd.startsWith('cd')) {
			this.changeDirectry();
		}
		else if(cmd.toLowerCase().indexOf('shit') > -1) {
			this.print('Stop being angry.');
		}
		else if(cmd.toLowerCase().indexOf('fuck you') > -1) {
			this.print("No, fuck YOU!");
		}
		else if(cmd.toLowerCase().startsWith('fuck')) {
			this.print("You can't fuck this.");
		}
		else if(cmd.toLowerCase().startsWith('shut down')) {
			this.print("Shutting down the mainframe with users logged into their Cyberdecks is extremely dangerous. \nShut down sequence terminated.");
		}
		else if(cmd.toLowerCase().startsWith("ls")) {
			this.ls();
		}
		else if(cmd.toLowerCase() === 'help') {
			this.print('The following commands are available: \n ./[file] \n cat [file] \n cls \n cd [folder] \n ls \n help')
		}
		else if(cmd === ''){
			this.print('');
		}
		else {
			this.print('Command not found: ' + this.state.currentCommand);
		}

		this.setState({currentCommand: ""});
	}

	public print(print: string) {
		const printArray = print.split('\n');
		let first = true;
		for (const printable of printArray) {
			if(first){
				this.state.commands.push({command: this.state.currentPath + this.prompt + this.state.currentCommand, result: printable });
				first = false;
			}
			else {
				this.state.commands.push({command: '', result: printable });
			}
		}
	}

	// <pre>{JSON.stringify(this.state.currentFolder)}</pre>
	public render() {
		return (
			<div className={styles.Terminal}>
				<div id="Terminal" className={styles.Commands}>
					{this.state.commands.map((val) => {
						return (
							<div key={this.state.commands.indexOf(val)}>
								<p>{val.command}</p>
								<p>{val.result}</p>
							</div>
						)
					})}
					<div className={styles.CommandLine}>
						{this.state.currentPath + this.prompt}
						<input onKeyDown={this.keyDown} className={styles.InvisibleInput} value={this.state.currentCommand} onChange={this.changeCurrentCommand} />
					</div>
				</div>
			</div>
		);
	}
}

export default Terminal;
