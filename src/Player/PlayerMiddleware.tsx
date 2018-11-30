import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { ISong } from './Player';
import PlayerControls from './PlayerControls';
import styles from './PlayerControls.module.css';

interface IPlayerMiddlewareProps {
	song: ISong | null;
	switchToNextSong: () => void;
	switchToPreviousSong: () => void;
	minimized: boolean;
	toggleMinimize: () => void;
}

interface IPlayerMiddlewareState {
	isPlaying: boolean;
	controller: IController | null;
}

export default class PlayerMiddleware extends Component<IPlayerMiddlewareProps, IPlayerMiddlewareState> {
	private playerOpts: any = {
		height: '0',
		playerVars: {
			autoplay: 1
		},
		width: '0'
	}

	public constructor(props: IPlayerMiddlewareProps) {
		super(props);

		this.state = {
			controller: null,
			isPlaying: true,
		}
	}

	public playMusic = () => {
		if(this.state.controller != null) {
			this.state.controller.playVideo();
			this.setState({
				isPlaying: true
			})
		}
	}

	public pauseMusic = () => {
		if(this.state.controller != null) {
			this.state.controller.pauseVideo();
			this.setState({
				isPlaying: false
			})
		}
	}

	public setPlayerController = (event: any) => {
		this.setState({
			controller: event.target as IController
		});
	}

	// When the next button is pressed while the player is playing -> Automagically play the new song.
	public onYTChange = (event: {target: any, data: number}) => {
		if(event.target.getPlayerState() === PlayerState.VideoCued) {
			this.playMusic();
		}
		else if(event.target.getPlayerState() === PlayerState.Unstarted) {
			this.props.switchToNextSong();
		}
	}

	public setIsPlaying = (status: boolean) => {
		this.setState({
			isPlaying: status
		});
	}

	public render() {
		if(this.props.song != null) {
			return (
				<React.Fragment>
					<div className={styles.invisibleMiddleware} >
						<YouTube videoId={this.props.song.id} opts={this.playerOpts} onReady={this.setPlayerController} onStateChange={this.onYTChange} />
					</div>
					<PlayerControls 
						toggleMinimize={this.props.toggleMinimize} 
						minimized={this.props.minimized} 
						switchToNextSong={this.props.switchToNextSong} 
						switchToPreviousSong={this.props.switchToPreviousSong}
						song={this.props.song} 
						playMusic={this.playMusic}
						pauseMusic={this.pauseMusic}
						isPlaying={this.state.isPlaying}
						setIsPlayingStatus={this.setIsPlaying}
						controller={this.state.controller}
					/>
				</React.Fragment>
			)
		}
		return null;
	}
}

export interface IController {
	pauseVideo: () => void;
	playVideo: () => void;
	getCurrentTime: () => number;
	seekTo: (seconds: number, allowSeekAhead: boolean) => void;
	getDuration: () => number;
	getPlayerState: () => PlayerState;
}

enum PlayerState {
	Unstarted,
	Ended,
	Playing,
	Paused,
	Buffering,
	VideoCued
}