import React, { Component, Suspense } from 'react';
import styles from './Interlock.module.css';
import InterlockIntroduction from './InterlockIntroduction';
import InterlockDice from './InterlockDice';
import InterlockStats from './InterlockStats';
import Sidebar from '../Common/Sidebar.Navigation';
import InterlockSkillCheck from './InterlockSkillChecks';
import InterlockSkills from './InterlockSkills';
import InterlockSkillList from './InterlockSkillList';
import InterlockSkillsIP from './InterlockSkillsIP';
import InterlockReputation from './InterlockReputation';
import InterlockLifepath from './InterlockLifepath';
import { Route, Routes } from 'react-router-dom';
import Loading from '../Common/Loading';
import InterlockSheet from './InterlockSheet';

interface InterlockState {
	selection: string | null;
	showMobileMenu: boolean;
}

enum Choices {
	Introduction = "Introduction",
	Dice = "Dice",
	Stats = "Stats",
	SkillCheck = "Skill Check",
	Skills = "Skills",
	Improvement = "Imp. Points",
	SkillList = "Skill List", 
	Reputation = "Reputation",
	Starting = "Lifepath",
	CharacterCreation = "Sheet"
}

class Interlock extends Component<{}, InterlockState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
			selection: Choices.Introduction,
			showMobileMenu: false
		}
	}

	public changeSelection = (newSelection: string) => {
		this.setState({
			selection: newSelection,
			showMobileMenu: false
		});
	}

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public findCurrentLocation = () => {
		let location: string | undefined = window.location.hash.split("/").pop();
		let foundSection = Object.values(Choices).find(d => d.toLowerCase().startsWith(location != null ? location.substring(0,4) : "", 0));
		if(foundSection != null) 
			return foundSection.toString();
		return Choices.Introduction;
	}

	public render() {
		return (
			<React.Fragment>
				<h1 className={"consoleText"} onClick={this.toggleMobileView}>Interlock System:</h1>
				<div className={styles.InterlockSplit}>
					<Sidebar origin="interlocksystem" 
							showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={this.findCurrentLocation()}
							toggleMobile={this.toggleMobileView}
					/>
					<Suspense fallback={<Loading/>}>
						<Routes>
							<Route path="introduction" element={ <InterlockIntroduction /> } />
							<Route path="dice" element={ <InterlockDice /> } />
							<Route path="stats" element={ <InterlockStats /> } />
							<Route path="skills" element={ <InterlockSkills /> } />
							<Route path="imppoints" element={ <InterlockSkillsIP/> } />
							<Route path="skillcheck" element={ <InterlockSkillCheck /> } />
							<Route path="skilllist" element={ <InterlockSkillList /> } />
							<Route path="reputation" element={ <InterlockReputation /> } />
							<Route path="lifepath" element={ <InterlockLifepath /> } />
							<Route path="sheet" element={ <InterlockSheet /> } />
						</Routes>
					</Suspense>
				</div>
			</React.Fragment>
		);
	}
}

export default Interlock;
