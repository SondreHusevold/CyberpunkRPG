import React, { Component } from 'react';
import { IAlbum, ISong, PlayerInterface } from './Player';
import styles from './SongList.module.css';

interface ISongListProps {
	album: IAlbum | null;
	switchToSong: (album: IAlbum, song: ISong) => void;
	setInterface: (intrfc: PlayerInterface) => void;
}

export default class SongList extends Component<ISongListProps, {}> {

	public constructor(props: ISongListProps) {
		super(props);
	}

	public renderList = () => {
		if(this.props.album != null) {
			let album = this.props.album;
			return this.props.album.songs.map((song) => {
				return (
					<div key={song.name}>
						<button onClick={this.props.switchToSong.bind(this, album, song)} className={styles.Song}>{song.name} - {song.artist}</button>
					</div>
				)
			})
		}
		return null;
	}

	public playAllSongs = () => {
		if(this.props.album != null) {
			this.props.switchToSong(this.props.album, this.props.album.songs[0]);
		}
	}
	
	public render() {
		if(this.props.album != null) {
			return (
				<div className={styles.SongListWrapper}>
					<h1>{this.props.album.name}</h1>
					<hr/>
					<div className={styles.SongList}>
						<div>
							<button className={styles.Song} onClick={this.playAllSongs}>Play all</button>
						</div>
						<br/>
						{this.renderList()}
					</div>
				</div>
			)
		}
		
		return null;
	}
}