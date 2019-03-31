import React, { Component } from 'react';
import { hot } from 'react-hot-loader';  
import styles from './Bootloader.module.css';
import Login from './Login/Login';
import Mainframe from './Mainframe/Mainframe';
import MainMenu, { MainSection } from './MainMenu/MainMenu';
import Player from './Player/Player';
import Terminal from './Terminal/Terminal';

interface IBootloaderState {
	currentSection: MainSection;
	loggedIn: boolean;
	player: boolean;
}

class Bootloader extends Component<{}, IBootloaderState> {
	private development: boolean = process.env.NODE_ENV === 'development'; 

	public constructor(props: {}) {
		super(props);

		this.state = {
			currentSection: MainSection.Mainframe,
			loggedIn: false,
			player: false
		};
	}

	public changeLogin = (isLoggedIn: boolean) => {
		this.setState({ loggedIn: isLoggedIn });
	}

	public setMainSection = (section: MainSection) => {
		this.setState({
			currentSection: section
		});	
	}

	public renderLogin() {		
		if(!this.state.loggedIn){
			return <Login loginFunction={this.changeLogin} />
		}
		else{
			return <Terminal enablePlayer={this.enablePlayer} />
		}
	}

	public renderPlayer() {
		if(this.state.player) {
			return (
				<Player closePlayer={this.togglePlayer} />
			)
		}
		else {
			return null;
		}
	}

	public enablePlayer = () => {
		this.setState({
			player: true
		})
	}

	public togglePlayer = () => {
		this.setState({
			player: !this.state.player
		})
	}


	public render() {
		if(this.development) {
			return(
				<div className={styles.Zetatech}>
					<header className={styles.Background + ' ' + styles.DevelopmentBackground} />

					<MainMenu changeSection={this.setMainSection}/>

					<div className={styles.mainContent}>
						<Mainframe currentSection={this.state.currentSection} />
					</div>
				</div>
			)
		}

		return (
			<div className={styles.Zetatech}>
				<header>
					<video src="assets/Background.mp4" autoPlay={true} className={styles.Background} loop={true} />
				</header>
				{this.renderPlayer()}
				{this.renderLogin()}
			</div>
		);
	}
}

export default hot(module)(Bootloader);
