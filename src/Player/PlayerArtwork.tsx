import React, { Component } from 'react';
import { IAlbum, ISong } from './Player';
import styles from './PlayerArtwork.module.css';

interface IPlayerArtworkProps {
	album: IAlbum | null;
	song: ISong | null;
}

interface IPlayerArtworkState {
	currentShownArtwork: number;
}

export default class PlayerArtwork extends Component<IPlayerArtworkProps, IPlayerArtworkState> {
	private interval = 0;

	public constructor(props: IPlayerArtworkProps) {
		super(props);

		this.state = {
			currentShownArtwork: 0
		};
	}

	public setSlideshowInterval = () => {
		this.interval = window.setInterval(() => {
			if(this.props.song != null && this.props.song.artwork.length !== this.state.currentShownArtwork) {
				this.setState({
					currentShownArtwork: this.state.currentShownArtwork + 1
				});
			}
			else if(this.props.song != null) {
				this.setState({
					currentShownArtwork: 0
				});
			}
		}, 30000);
	}

	public componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	public render() {
		if(this.props.album != null && this.props.song != null) {
			const path = "assets/Albums/" + this.props.album.folderName + "/Artwork/"
			return (
				<div className={styles.PlayerArtwork}>
					<img src={path + this.props.song.artwork[this.state.currentShownArtwork].filename} height={'auto'} width={'auto'} />
				</div>
			)
		}
		return (
			<div className={styles.PlayerArtwork}>
				<h1>No song selected</h1>
			</div>
		)
	}
}