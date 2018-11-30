import React, { Component } from 'react';
import { ISong } from './Player';
import styles from './SongLyrics.module.css';

interface ISongLyricsProps {
	song: ISong | null;
}

export default class SongLyrics extends Component<ISongLyricsProps, {}> {
	
	public constructor(props: ISongLyricsProps) {
		super(props);
	}

	public render() {
		if(this.props.song != null) {
			return (
				<div className={styles.LyricsPadding}>
					<h1>{this.props.song.name}</h1>
					<p>{this.props.song.lyrics}</p>
				</div>
			)
		}
		return (
			<div className={styles.LyricsPadding}>
				<h1>No song selected.</h1>
				<p>Lyrics unavailable.</p>
			</div>
		)
	}
}