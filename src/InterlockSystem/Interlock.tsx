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
import { HashRouter, Switch, Route } from 'react-router-dom';
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
						<HashRouter>
							<Switch>
								<Route path="/interlocksystem/introduction">
									<InterlockIntroduction />
								</Route>
								<Route path="/interlocksystem/dice">
									<InterlockDice />
								</Route>
								<Route path="/interlocksystem/stats">
									<InterlockStats />
								</Route>
								<Route path="/interlocksystem/skills">
									<InterlockSkills />
								</Route>
								<Route path="/interlocksystem/imppoints">
									<InterlockSkillsIP/>
								</Route>
								<Route path="/interlocksystem/skillcheck">
									<InterlockSkillCheck />
								</Route>
								<Route path="/interlocksystem/skilllist">
									<InterlockSkillList />
								</Route>
								<Route path="/interlocksystem/reputation">
									<InterlockReputation />
								</Route>
								<Route path="/interlocksystem/lifepath">
									<InterlockLifepath />
								</Route>
								<Route path="/interlocksystem/sheet">
									<InterlockSheet />
								</Route>
							</Switch>
						</HashRouter>
					</Suspense>
				</div>
			</React.Fragment>
		);
	}
}

export default Interlock;
