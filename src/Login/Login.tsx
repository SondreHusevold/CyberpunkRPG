import CryptoJS from 'crypto-js';
import React, { Component } from 'react';  
import styles from './Login.module.css';

interface ILoginState {
	password: string;
	username: string;
	attempts: number;
} 

interface ILoginProps {
	loginFunction: (isLoggedIn: string) => void;
}

class Login extends Component<ILoginProps, ILoginState> {
	
	public constructor(props: ILoginProps) {
		super(props);
		this.state = {
			attempts: 3,
			password: '',
			username: '',
		}
	}

	public changeUsername = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({ username: e.currentTarget.value });
	}

	public changePassword = (e: React.FormEvent<HTMLInputElement>) => {
		this.setState({ password: e.currentTarget.value });
	}

	public login = () => {
		this.setState({ attempts: this.state.attempts-1 });

		if(this.state.attempts === 1) {
			window.location.href = 'https://www.google.com/#q=What is password?';
			return;
		}

		const hash = CryptoJS.SHA1(this.state.password).toString();
		const username = CryptoJS.SHA1(this.state.username).toString();
		if(username === 'd033e22ae348aeb5660fc2140aec35850c4da997' && hash === 'd5240d4a4b8066612800099ed10f85cb21ec0adf') {
			this.props.loginFunction("admin");
			return;
		}
		else if(username === "ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4" && hash === 'af51d716321777677bb9f3888fc6810cdc2d5db1') {
			this.props.loginFunction("TopSecret");
			return;
		}
	}

	public renderAttempts = () => {
		if(this.state.attempts < 3) {
			return <p>Wrong credentials. Remaining attempts: {this.state.attempts}</p>
		}
		return;
	}

	public onEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key == "Enter") {
			this.login();
		}
	}

	public render() {
		return (
			<div className={styles.Login}>
				<div className={styles.LoginUsername}>
					<h3>Username:</h3>
					<input onChange={this.changeUsername} />
				</div>
				<div className={styles.LoginPassword}>
					<h3>Password:</h3>
					<input onChange={this.changePassword} onKeyDown={this.onEnterLogin} type="password"/>
				</div>
				<div className={styles.LoginAttempts}>
					{this.renderAttempts()}
				</div>
				<button className={styles.LoginButton} onClick={this.login} >Login</button>
			</div>
		);
	}
}

export default Login;
