export class FileService {

	public static async getFiles() {
		 const files = fetch('MainframeStructure.json');
		 return files.then((s) => s.json().then(async (data: IStructure) => {
				// Apply the epilogue to the folder structure since it is in a seperate file.
				
				 const epilogue = await this.getVampireEpilogue();
				 /* tslint:disable:no-string-literal */
				 data.folders["home"].folders["mainframe"].folders["Vampire"].folders["Epilogue_RECOVERED.dat"].result = epilogue.epilogue;

				return data;
			})
		);
	}

	public static async getVampireEpilogue() {
		const epilogue = fetch('VampireEpilogue.json');
		return epilogue.then((s) => s.json().then((data: { epilogue: string }) => {
			return data;
		}));
	}

}

export interface IStructure {
	folders: IStructure[],
	name: string,
	permission: boolean,
	result: string
}