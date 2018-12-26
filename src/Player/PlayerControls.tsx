import 'material-icons';
import React, { Component } from 'react';
import { ISong } from './Player';
import styles from './PlayerControls.module.css';
import { IController } from './PlayerMiddleware';

interface IPlayerControlsProps {
	song: ISong | null;
	minimized: boolean;
	controller: IController | null;
	isPlaying: boolean;
	switchToNextSong: () => void;
	switchToPreviousSong: () => void;
	playMusic: () => void;
	pauseMusic: () => void;
	setIsPlayingStatus: (status: boolean) => void;
	toggleMinimize: () => void;
}

interface IPlayerControlsState {
	currentTime: number;
}

export default class PlayerControls extends Component<IPlayerControlsProps, IPlayerControlsState> {
	private intervalTimer = 0
	public constructor(props: IPlayerControlsProps) {
		super(props);

		this.state = {
			currentTime: 0,
		}

		this.setSeekerListener();
	}

	/**
	 * Set seekbar listener which is a simple interval that calls time every second. Maybe better way of doing this? EventListeners?
	 */
	public setSeekerListener = () => {
		this.intervalTimer = window.setInterval(() => {
			if(this.props.controller != null) {
				const time = this.props.controller.getCurrentTime();
				this.setState({
					currentTime: time
				});
			}
		}, 1000)
	}

	public componentWillUnmount() {
		window.clearInterval(this.intervalTimer);
	}

	public togglePlayPause = () => {
		this.props.isPlaying ? this.props.pauseMusic() : this.props.playMusic();
	}

	public onSeek = (event: React.FormEvent<HTMLInputElement>) => {
		if(this.props.controller != null) {
			this.props.controller.seekTo(Number.parseInt(event.currentTarget.value, 10), true);
		}
	}

	public renderSeekBar = () => {
		if(this.props.controller != null && this.state.currentTime != null && this.props.controller.getDuration() != null) {
			return (
				<div className={styles.playerSeekBar}>
					<input type="range" min="0" max={this.props.controller.getDuration()} value={this.state.currentTime} onChange={this.onSeek} className={styles.playerSeeker} />
				</div>
			)
		}
		return null;
	}

	public switchToNextSongButton = () => {
		this.props.switchToNextSong();
		this.props.setIsPlayingStatus(true);
	}

	public switchToPreviousSongButton = () => {
		this.props.switchToPreviousSong();
		this.props.setIsPlayingStatus(true);
	}

	public renderSongTitle = () => {
		if(this.props.minimized !== true && this.props.song != null) {
			return (
				<div className={styles.nowPlaying}>
					<h4>{this.props.song.name} - {this.props.song.artist}</h4>
				</div>
			)
		}
		return null;
	}

	public renderPlayedWhen = () => {
		if(this.props.minimized !== true && this.props.song != null) {
			return (
				<div className={styles.nowPlaying}>
					<p>{this.props.song.wasPlayed}</p>
				</div>
			)
		}
		return null;
	}

	public renderMaximizeButton() {
		if(this.props.minimized) {
			return (
				<li className={"material-icons " + styles.MaximizeButton} onClick={this.props.toggleMinimize}>launch</li>
			)
		}
		return null;
	}

	public render() {
		if(this.props.song != null) {
			return (
				<div>
					<div className={styles.playerControls}>
						{this.renderSongTitle()}
						{this.renderPlayedWhen()}
						<div className={styles.controls}>
							<span className="material-icons" onClick={this.switchToPreviousSongButton}>skip_previous</span>
							<span className="material-icons" onClick={this.togglePlayPause}>{this.props.isPlaying ? 'pause' : 'play_arrow'}</span>
							<span className="material-icons" onClick={this.switchToNextSongButton}>skip_next</span>
							{this.renderMaximizeButton()}
						</div>
						{this.renderSeekBar()}
					</div>
				</div>
			)
		}

		return null;
	}
}