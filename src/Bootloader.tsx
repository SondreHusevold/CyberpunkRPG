import React, { Component } from 'react';
import styles from './Bootloader.module.css';
import Login from './Login/Login';
import Mainframe from './Mainframe/Mainframe';
import MainMenu, { MainSection } from './MainMenu/MainMenu';
import Player from './Player/Player';
import Terminal from './Terminal/Terminal';
import './Initialization.css';
import { BrowserRouter } from 'react-router-dom';

interface IBootloaderState {
	currentSection: MainSection;
	loggedIn: string | null;
	player: boolean;
}

class Bootloader extends Component<{}, IBootloaderState> {
	// private development: boolean = process.env.NODE_ENV === 'development'; 

	public constructor(props: {}) {
		super(props);

		this.state = {
			currentSection: MainSection.Mainframe,
			loggedIn: null,
			player: false
		};
	}

	public changeLogin = (isLoggedIn: string) => {
		this.setState({ loggedIn: isLoggedIn });
	}

	public setMainSection = (section: MainSection) => {
		this.setState({
			currentSection: section
		});	
	}

	public renderLogin() {		
		if (this.state.loggedIn === "admin"){
			return <Terminal enablePlayer={this.enablePlayer} />
		}
		else if(this.state.loggedIn === "TopSecret") {
			return this.renderRealSite();
		}

		return <Login loginFunction={this.changeLogin} />
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

	public renderRealSite = () => {
		return(
			<div className={styles.ZetatechDevelopment }>
				<header className={styles.Background + ' ' + styles.DevelopmentBackground} />

				<MainMenu changeSection={this.setMainSection}/>

				<div className={styles.mainContent}>
					<Mainframe currentSection={this.state.currentSection} />
				</div>
			</div>
		)
	}


	public render() {
		// if(!this.development) {
			return (
				<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
					{this.renderRealSite()}
				</BrowserRouter>
			)

		// }

		// return (
		// 	<div className={styles.Zetatech}>
		// 		<header className={(this.state.loggedIn !== "TopSecret" || this.development) ? "" : styles.HideHeader}>
		// 			<video src="assets/Background.mp4" autoPlay={true} className={styles.Background} loop={true} />
		// 		</header>
		// 		{this.renderPlayer()}
		// 		{this.renderLogin()}
		// 	</div>
		// );
	}
}

export default Bootloader;
