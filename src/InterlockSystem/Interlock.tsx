import React, { Component } from 'react';
import styles from './Interlock.module.css';
import InterlockIntroduction from './InterlockIntroduction';
import InterlockDice from './InterlockDice';
import InterlockStats from './InterlockStats';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import InterlockSkillCheck from './InterlockSkillChecks';
import InterlockSkills from './InterlockSkills';

interface InterlockState {
    selection: string | null;
} 

enum Choices {
	Introduction = "Introduction",
	Dice = "Dice",
	Stats = "Stats",
	SkillCheck = "Skill Check",
	Skills = "Skills",
	SkillList = "Skill List", 
	Starting = "Starting Out"
}

class Interlock extends Component<{}, InterlockState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
            selection: null
		}
	}

	public changeSelection = (newSelection: string) => {
		this.setState({
			selection: newSelection
		});
	}

	public getCurrentSelection = () => {
		switch(this.state.selection) {
			case Choices.Introduction:
				return <InterlockIntroduction />;
			case Choices.Dice: 
				return <InterlockDice />;
			case Choices.Stats:
				return <InterlockStats />;
			case Choices.SkillCheck:
				return <InterlockSkillCheck />
			case Choices.Skills:
				return <InterlockSkills />;
			case Choices.SkillList:
				return "Skill List";
			case Choices.Starting:
				return "Starting";
			default:
				return "";
		}
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Interlock System:</h1>
				<div className={styles.InterlockSplit}>
                    <Sidebar choices={Object.values(Choices)} clicked={this.changeSelection} />
					<div className={styles.InterlockMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default Interlock;
