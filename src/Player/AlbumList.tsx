import React, { Component } from 'react';
import styles from './AlbumList.module.css';
import { IAlbum } from './Player';

interface IAlbumListProps {
	albums: IAlbum[];
	setShownAlbum: (album: IAlbum) => void;
}

export default class AlbumList extends Component<IAlbumListProps, {}> {

	constructor(props: IAlbumListProps) {
		super(props);
	}

	public render() {
		return (
			<div className={styles.AlbumListWrapper}>
				<React.Fragment>
					<h1>Albums</h1>
					<hr/>
					<div className={styles.AlbumList}>
						{this.props.albums.map((album) => {
							return (
								<button onClick={this.props.setShownAlbum.bind(this, album)} className={styles.Album} key={album.name}>{album.name}</button>
							)
						})}
					</div>
				</React.Fragment>
			</div>
		)
	}
}