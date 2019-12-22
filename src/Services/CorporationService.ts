export interface Corporation {
    name: string;
    shortname: string;
    logo: string;
    description: string;
    headquarters: string;
    regionalOffices: string[];
    majorShareholder: string;
    employees: {
        worldwide: string;
        troops: string;
        covert: string;
    },
    background: string;
    resources: string;
}

export class CorporationService {
	public static async getCorporations(): Promise<Corporation[]> {
		return fetch('/CyberpunkRPG/assets/NightCity/Corporations.json')
		.then((s) => s.json().then((fetched: { corporations: Corporation[] }) => {
				return fetched.corporations;
			})
		);
	}
}