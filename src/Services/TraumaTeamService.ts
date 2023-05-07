export interface Drug {
    name: string;
    strength: string;
    difficulty: string;
    duration: string;
    description: string;
}

export class TraumaTeamService {
	public static async getDrugs(): Promise<Drug[]> {
		return fetch('/assets/TraumaTeam/Drugs.json')
		.then((s) => s.json().then((fetched: { drugs: Drug[] }) => {
				return fetched.drugs;
			})
		);
	}
}