import CryptoJS from 'crypto-js';
import React, { Component } from 'react';  
import styles from './Login.module.css';

interface ILoginState {
	password: string;
	username: string;
	attempts: number;
} 

interface ILoginProps {
	loginFunction: (isLoggedIn: boolean) => void;
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

		const hash = CryptoJS.SHA1(this.state.password);
		if(this.state.username === 'admin' && hash.toString() === 'd5240d4a4b8066612800099ed10f85cb21ec0adf') {
			this.props.loginFunction(true);
			return;
		}
	}

	public renderAttempts = () => {
		if(this.state.attempts < 3) {
			return <p>Wrong credentials. Remaining attempts: {this.state.attempts}</p>
		}
		return;
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
				<input onChange={this.changePassword} type="password"/>
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
