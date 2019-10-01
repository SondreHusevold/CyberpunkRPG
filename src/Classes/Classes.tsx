import React, { Component } from 'react';
import { ClassService } from '../Services/ClassService';
import styles from './Classes.module.css';
import ClassDetails from './ClassDetails';
import Sidebar from '../Sidebar/Sidebar.Navigation';

interface ClassState {
	characterClasses: CharacterClass[];
	selectedClass: CharacterClass | null;
} 

class Classes extends Component<{}, ClassState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			characterClasses: [],
			selectedClass: null
		}

		this.GetClasses();
	}

	public async GetClasses() {
		this.setState({
			characterClasses: await ClassService.getClasses()
		});
	}

	public GetDetails() {
		if(this.state != null && this.state.selectedClass != null) {
			return (
				<div className={styles.ClassDetailSplit}>
					<ClassDetails characterClass={this.state.selectedClass} />
				</div>
			)
		}
		
		return;
	}

	public SetActiveClass = (selectedClass: string) => {
		let selected = this.state.characterClasses.find(x => x.name === selectedClass);
		if(selected == null) {
			throw Error("Unknown class chosen: " + selectedClass);
		}

		this.setState({
			selectedClass: selected
		});
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Classes:</h1>
				<div className={styles.ClassSplit}>
					<Sidebar choices={Object.values(this.state.characterClasses.map(x => x.name))} clicked={this.SetActiveClass} />

					<div className={styles.ClassPicture}>
						{this.GetDetails()}
					</div>
				</div>
			</div>
		);
	}
}

export interface CharacterClass {
	name: string;
	description: string;
	quote: string;
	artwork: string;
}

export interface ClassDetailedInformation {
	intro: string;
    specialAbility: [{
        name: string,
        description: string
    }],
    careerSkills: [{
		name: string,
		skills: string[]
	}]
}

export default Classes;
