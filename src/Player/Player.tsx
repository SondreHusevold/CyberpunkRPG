import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { PlayerService } from '../Services/PlayerService';
import AlbumList from './AlbumList';
import styles from './Player.module.css';
import PlayerArtwork from './PlayerArtwork';
import PlayerHeaderbar from './PlayerHeaderbar';
import PlayerMiddleware from './PlayerMiddleware';
import './PlayerScrollbar.css';
import SongList from './SongList';
import SongLyrics from './SongLyrics';

export enum PlayerInterface {
	NowPlaying,
	Albums,
	Songs,
	Lyrics
}

interface IPlayerState {
	albums: IAlbum[];
	currentAlbum: IAlbum | null;
	currentSong: ISong | null;
	showList: PlayerInterface;
	shownAlbum: IAlbum | null;
	minimized: boolean;
}

interface IPlayerProps {
	closePlayer: () => void;
}

export default class Player extends Component<IPlayerProps, IPlayerState> {
	
	constructor(props: IPlayerProps) {
		super(props);
		this.state = {
			albums: [],
			currentAlbum: null,
			currentSong: null,
			minimized: false,
			showList: PlayerInterface.Albums,
			shownAlbum: null
		}

		this.getAlbums();
	}

	public getAlbums() {
		PlayerService.getAlbums().then( async (incAlbums) => {
			for (const album of incAlbums) {
				album.songs = await PlayerService.getSongs(album);
			}

			this.setState({
				albums: incAlbums,
				currentAlbum: incAlbums[0],
				currentSong: null
			});
		});	
	}

	public renderListOrThumbnail = () => {
		switch(this.state.showList) {
			case PlayerInterface.Albums:
				return <AlbumList setShownAlbum={this.showThisAlbum} albums={this.state.albums} />
			case PlayerInterface.Songs:
				return <SongList setInterface={this.switchToInterface} switchToSong={this.changeToSong} album={this.state.shownAlbum} />
			case PlayerInterface.Lyrics:
				return <SongLyrics song={this.state.currentSong} />
			default:
				return (
					<PlayerArtwork album={this.state.currentAlbum} song={this.state.currentSong} />
				)
		}
	}

	public showThisAlbum = (album: IAlbum) => {
		this.setState({
			showList: PlayerInterface.Songs,
			shownAlbum: album
		});
	}

	/**
	 * Play a song. 
	 * Nulls out the current song to restart the song if it is already playing.
	 */
	public changeToSong = (album: IAlbum, song: ISong) => {
		this.setState({
			currentAlbum: album,
			currentSong: null
		}, () => {
			this.setState({
				currentSong: song,
				showList: PlayerInterface.NowPlaying
			})
		});
	}

	public changeToNextSong = () => {
		let currentSongIndex = 0;
		if(this.state.currentAlbum != null && this.state.currentSong != null) {
			currentSongIndex = this.state.currentAlbum.songs
			.findIndex(x => x.id === (this.state.currentSong != null ? this.state.currentSong.id : ''));

			if(this.state.currentAlbum.songs.length !== currentSongIndex) {
				this.setState({
					currentSong: this.state.currentAlbum.songs[currentSongIndex+1]
				})
			}
		}
	}

	public changeToPreviousSong = () => {
		let currentSongIndex = 0;
		if(this.state.currentAlbum != null && this.state.currentSong != null) {
			currentSongIndex = this.state.currentAlbum.songs
			.findIndex(x => x.id === (this.state.currentSong != null ? this.state.currentSong.id : ''));

			if(currentSongIndex !== 0) {
				this.setState({
					currentSong: this.state.currentAlbum.songs[currentSongIndex-1]
				})
			}
		}
	}

	public switchToInterface = (target: PlayerInterface) => {
		this.setState({
			showList: target
		});
	}

	public toggleMinimize = () => {
		this.setState({
			minimized: !this.state.minimized
		})
	}

	public render() {
		return (
			<div className={styles.Player + " " + (this.state.minimized ? styles.MinimizedPlayer : styles.ShownPlayer) }>
				<PlayerHeaderbar minimized={this.state.minimized} 
								closePlayer={this.props.closePlayer} 
								toggleMinimize={this.toggleMinimize} 
								hasSong={this.state.currentSong} 
								switchToInterface={this.switchToInterface} 
				/>
				<div className={styles.relativeTo}>
					<PerfectScrollbar className={styles.mainArea}>
						{this.renderListOrThumbnail()}
					</PerfectScrollbar>
					<PlayerMiddleware 
						toggleMinimize={this.toggleMinimize} 
						minimized={this.state.minimized} 
						switchToNextSong={this.changeToNextSong} 
						switchToPreviousSong={this.changeToPreviousSong} 
						song={this.state.currentSong}
					/>
				</div>
			</div>
		)
	}
}

export interface IAlbum {
	name: string;
	folderName: string;
	songs: ISong[];
}

export interface ISong {
	name: string;
	artist: string;
	id: string;
	artwork: Array<
		{
			filename: string;
		}
	>
	lyrics: string;
	wasPlayed: string;
}

