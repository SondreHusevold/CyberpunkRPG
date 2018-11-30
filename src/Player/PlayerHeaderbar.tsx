import 'material-icons';
import React, { Component } from 'react'
import { ISong, PlayerInterface } from './Player';
import styles from './Player.module.css';

interface IPlayerHeaderbarProps {
	switchToInterface: (target: PlayerInterface) => void;
	toggleMinimize: () => void;
	closePlayer: () => void;
	hasSong: ISong | null;
}

export default class PlayerHeaderbar extends Component<IPlayerHeaderbarProps, {}> {

	public constructor(props: IPlayerHeaderbarProps) {
		super(props);
	}

	public switchToPlaying = () => {
		this.props.switchToInterface(PlayerInterface.NowPlaying);
	}

	public switchToAlbums = () => {
		this.props.switchToInterface(PlayerInterface.Albums);
	}

	public switchToLyrics = () => {
		this.props.switchToInterface(PlayerInterface.Lyrics);
	}

	public renderMinimizeButton() {
		if(this.props.hasSong != null) { 
			return (
				<li onClick={this.props.toggleMinimize}>_</li>
			)
		}
		return null;
	}

	public render() {
		return(
			<nav className={styles.HeaderBar}>
				<div className={styles.HeaderBarButtons}>
					<li onClick={this.switchToPlaying}>Now playing</li>
					|
					<li onClick={this.switchToAlbums}>Albums</li>
					|
					<li onClick={this.switchToLyrics}>Lyrics</li>
				</div>
				<div className={styles.HeaderBarButtons}>
					|
					{this.renderMinimizeButton()}
					<li onClick={this.props.closePlayer}>X</li>
				</div>
			</nav>
		)	
	}
}