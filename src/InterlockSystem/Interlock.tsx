import React, { Component } from 'react';
import styles from './Interlock.module.css';
import sidebar from '../StyleModules/Sidebar.module.css';
import InterlockIntroduction from './InterlockIntroduction';
import InterlockDice from './InterlockDice';

interface InterlockState {
    selection: Choices | null;
} 

enum Choices {
	Introduction = "Introduction",
	Dice = "Dice",
	Stats = "Stats",
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

	public getCurrentSelection = () => {
		switch(this.state.selection) {
			case Choices.Introduction:
				return <InterlockIntroduction/>;
			case Choices.Dice: 
				return <InterlockDice/>;
			case Choices.Stats:
				return "Stats";
			case Choices.Skills:
				return "Skills";
			case Choices.SkillList:
				return "Skill List";
			case Choices.Starting:
				return "Starting";
			default:
				return "";
		}
	}

	public IsTheActiveMenu = (myChoice: Choices) => {
		if(this.state.selection != null && myChoice === this.state.selection) {

			return sidebar.SidebarButtonActive;
		}
		return "";
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Interlock System:</h1>
				<div className={styles.InterlockSplit}>
                    <div className={styles.InterlockMenu}>
						{ 
							Object.values(Choices).map((sector) => 
								<button key={sector} className={sidebar.SidebarButton + " " + this.IsTheActiveMenu(sector)} 
									onClick={() => this.setState({ selection: sector})}>
									{sector}
								</button> 
							)
						}
                    </div>
					<div className={styles.InterlockMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default Interlock;
