export class FileService {

	public static async getFiles() {
		 const files = fetch('MainframeStructure.json');
		 return files.then((s) => s.json().then((data: IStructure) => {
				return data;
			})
		);
	}

}

export interface IStructure {
	folders: IStructure[],
	permission: boolean,
	result: string
}