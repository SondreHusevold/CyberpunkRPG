import React, { Component } from 'react';
import { ClassService } from '../Services/ClassService';
import styles from './Classes.module.css';
import ClassDetails from './ClassDetails';
import Sidebar from '../Common/Sidebar.Navigation';

interface ClassState {
	characterClasses: CharacterClass[];
	selectedClass: CharacterClass | null;
	showMobileMenu: boolean;
} 

interface ClassProps {
	history: any;
}

class Classes extends Component<ClassProps, ClassState> {

	public constructor(props: ClassProps) {
		super(props);

		this.state = {
			characterClasses: [],
			selectedClass: null,
			showMobileMenu: false
		}

		this.GetClasses();
	}

	public async GetClasses() {
		this.setState({
			characterClasses: await ClassService.getClasses(),
		}, () => this.setState({
			selectedClass: this.useClassFromLocation()
		}));
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
			selectedClass: selected,
			showMobileMenu: false
		});
	}

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public useClassFromLocation() {
		let location: string = this.props.history.location.pathname.split("/").pop();
		let foundSection = this.state.characterClasses.find(d => d.name.toLowerCase().startsWith(location));
		if(foundSection != null) 
			return foundSection;
		return this.state.characterClasses[0];
	}

	public getClassFromLocation = () => {
		let location: string = this.props.history.location.pathname.split("/").pop();
		if(location != null) {
			// Capitalize first letter.
			return location.charAt(0).toUpperCase().concat(location.slice(1).toLowerCase());
		}
		return "Rockerboy";
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText" onClick={this.toggleMobileView}>Classes:</h1>
				<div className={styles.ClassSplit}>
					<Sidebar origin="classes" 
							showMobile={this.state.showMobileMenu} 
							choices={Object.values(this.state.characterClasses.map(x => x.name))} 
							clicked={this.SetActiveClass} 
							preDetermined={this.getClassFromLocation()}
							toggleMobile={this.toggleMobileView}
					/>

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
