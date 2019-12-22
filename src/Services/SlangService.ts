export interface Slang {
    name: string;
    description: string;
}

export class SlangService {
	public static async getSlang(): Promise<Slang[]> {
		return fetch('../../assets/NightCity/Slang.json')
		.then((s) => s.json().then((fetched: { slang: Slang[] }) => {
				return fetched.slang;
			})
		);
	}
}