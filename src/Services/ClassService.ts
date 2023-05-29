import { CharacterClass, ClassDetailedInformation } from '../Classes/Classes';

export class ClassService {
	public static async getClasses(): Promise<CharacterClass[]> {
		return fetch(`${process.env.PUBLIC_URL}/assets/Classes/Classes.json`)
		.then((s) => s.json().then((fetched: { charClasses: CharacterClass[] }) => {
				return fetched.charClasses;
			})
		);
	}

	public static async getClassDetails(selectedClass: string): Promise<ClassDetailedInformation> {
		return fetch(`${process.env.PUBLIC_URL}/assets/Classes/${selectedClass}/${selectedClass}.json`)
		.then((s) => s.json().then((fetched: ClassDetailedInformation) => {
				return fetched;
			})
		);
	}
}