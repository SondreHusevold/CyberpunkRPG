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
import { Router, Switch, Route } from 'react-router-dom';

interface InterlockState {
	selection: string | null;
	showMobileMenu: boolean;
}

interface InterlockProps {
	history: any;
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
	Starting = "Lifepath"
}

class Interlock extends Component<InterlockProps, InterlockState> {

	public constructor(props: InterlockProps) {
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
		let location: string = this.props.history.location.pathname.split("/").pop();
		let foundSection = Object.values(Choices).find(d => d.toLowerCase().startsWith(location.substring(0,4), 0));
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
					<Suspense fallback={<div/>}>
						<Router history={this.props.history}>
							<Switch>
								<Route path="/CyberpunkRPG/interlocksystem/introduction">
									<InterlockIntroduction />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/dice">
									<InterlockDice />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/stats">
									<InterlockStats />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/skills">
									<InterlockSkills />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/imppoints">
									<InterlockSkillsIP/>
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/skillcheck">
									<InterlockSkillCheck />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/skilllist">
									<InterlockSkillList />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/reputation">
									<InterlockReputation />
								</Route>
								<Route path="/CyberpunkRPG/interlocksystem/lifepath">
									<InterlockLifepath />
								</Route>
							</Switch>
						</Router>
					</Suspense>
				</div>
			</React.Fragment>
		);
	}
}

export default Interlock;
