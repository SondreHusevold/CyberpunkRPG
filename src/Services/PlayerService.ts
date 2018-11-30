import { IAlbum, ISong } from '../Player/Player';

export class PlayerService {
	public static async getAlbums(): Promise<IAlbum[]> {
		return fetch('Music.json')
		.then((s) => s.json()
			.then((fetched: { albums: IAlbum[] }) => {
				return fetched.albums;
			})
		);
	}

	public static async getSongs(album: IAlbum): Promise<ISong[]> {
		return fetch('assets/Albums/'+ album.folderName +'/Songs.json')
		.then((s) => s.json()
			.then((fetched: { songs: ISong[] }) => {
				return fetched.songs;
			})
		);
	}
}