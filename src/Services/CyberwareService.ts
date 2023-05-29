export interface SurgeryCode {
    name: string;
    required: string;
    time: string;
    damage: string;
    cost: string;
    difficulty: string;
}

export class CyberwareService {
	public static async getCodes(): Promise<SurgeryCode[]> {
		return fetch(`${process.env.PUBLIC_URL}/assets/Cyberware/SurgeryCodes.json`)
		.then((s) => s.json().then((fetched: { codes: SurgeryCode[] }) => {
				return fetched.codes;
			})
		);
	}
}