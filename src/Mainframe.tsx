import React, { Component } from 'react';
import { hot } from 'react-hot-loader';  
import Login from './Login/Login';
import styles from './Mainframe.module.css';
import Terminal from './Terminal/Terminal';

interface ICyberpunkState {
	loggedIn: boolean;
}

class Cyberpunk extends Component<{}, ICyberpunkState> {
	public constructor(props: {}) {
		super(props);
		this.state = { loggedIn: true };
	}

	public changeLogin = (isLoggedIn: boolean) => {
		this.setState({ loggedIn: isLoggedIn });
	}

	public renderLogin() {
		if(!this.state.loggedIn){
			return <Login loginFunction={this.changeLogin} />
		}
		else{
			return <Terminal />
		}
	}

	public render() {
		return (
			<div className={styles.Zetatech}>
			<header>
				<video src="assets/Background.mp4" autoPlay={true} className={styles.Background} loop={true} />
			</header>
			{this.renderLogin()}
			</div>
		);
	}
}

export default hot(module)(Cyberpunk);
