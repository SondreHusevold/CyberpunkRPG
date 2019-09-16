import React, { Component } from 'react';
import { ClassService } from '../Services/ClassService';
import styles from './Classes.module.css';
import sidebar from '../StyleModules/Sidebar.module.css';
import ClassDetails from './ClassDetails';

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

	public SetActiveClass = (selectedClass: CharacterClass) => {
		this.setState({
			selectedClass: selectedClass
		});
	}

	public IsTheActiveClass = (myClass: CharacterClass) => {
		if(this.state.selectedClass != null && myClass === this.state.selectedClass) {

			return sidebar.SidebarButtonActive;
		}
		return "";
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Classes:</h1>
				<div className={styles.ClassSplit}>
					<div>
						{this.state.characterClasses.map((mapper, index) => {
							return (
								<button key={mapper.name} onClick={() => {this.SetActiveClass(mapper)}} className={sidebar.SidebarButton + " " + this.IsTheActiveClass(mapper)}>
									{mapper.name}
								</button>
							)
						})}
					</div>

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
