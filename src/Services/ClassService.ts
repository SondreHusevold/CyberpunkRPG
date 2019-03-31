import { CharacterClass } from '../Classes/Classes';

export class ClassService {
	public static async getClasses(): Promise<CharacterClass[]> {
		return fetch('assets/Classes/Classes.json')
		.then((s) => s.json().then((fetched: { charClasses: CharacterClass[] }) => {
				return fetched.charClasses;
			})
		);
	}
}