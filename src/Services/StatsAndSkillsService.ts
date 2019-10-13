import { Stat } from '../InterlockSystem/InterlockStats';

export interface Fumble {
    title: string;
    usage: string;
    fumbles: { range: string, result: string }[];
}

export interface SkillList {
	category: string;
	skills: Skill[]
}

export interface Skill {
	name: string;
	description: string;
}

export class StatService {
	public static async getStats(): Promise<Stat[]> {
		return fetch('assets/InterlockSystem/Stats.json')
		.then((s) => s.json().then((fetched: { stats: Stat[] }) => {
				return fetched.stats;
			})
		);
	}

	public static async getFumbleTable(): Promise<Fumble[]> {
		return fetch('assets/InterlockSystem/FumbleTable.json')
		.then((s) => s.json().then((fetched: { fumbleTable: Fumble[] }) => {
				return fetched.fumbleTable;
			})
		);
	}

	public static async getSkillList(): Promise<SkillList[]> {
		return fetch('assets/InterlockSystem/SkillList.json')
		.then((s) => s.json().then((fetched: { list: SkillList[] }) => {
				return fetched.list;
			})
		);
	}
}