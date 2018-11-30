import React, { Component } from 'react';
import { hot } from 'react-hot-loader';  
import Login from './Login/Login';
import styles from './Mainframe.module.css';
import Player from './Player/Player';
import Terminal from './Terminal/Terminal';

interface ICyberpunkState {
	loggedIn: boolean;
	player: boolean;
}

class Cyberpunk extends Component<{}, ICyberpunkState> {
	public constructor(props: {}) {
		super(props);
		this.state = { 
			loggedIn: false, 
			player: false
		};
	}

	public changeLogin = (isLoggedIn: boolean) => {
		this.setState({ loggedIn: isLoggedIn });
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

export default hot(module)(Cyberpunk);
