import React, { Component } from 'react';
import styles from './TraumaTeam.module.css';
import TTIntroduction from './TTIntroduction';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import TTDeath from './TTDeath';
import TTHealing from './TTHealing';
import TTBodyBank from './TTBodyBank';
import TTDrugs from './TTDrugs';


interface TTState {
    selection: string | null;
} 

enum Choices {
	Introduction = "Introduction",
	Death = "Death",
	Healing = "Healing",
	BodyBank = "Body bank",
	Drugs = "Drugs"
}

class TraumaTeam extends Component<{}, TTState> {

	public constructor(props: {}) {
		super(props);

		this.state = {
            selection: Choices.Introduction
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
                return <TTIntroduction />;
            case Choices.Death:
                return <TTDeath />
            case Choices.Healing:
                return <TTHealing />
			case Choices.BodyBank:
				return <TTBodyBank />
			case Choices.Drugs:
				return <TTDrugs />
			default:
				return "";
		}
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText">Trauma Team International:</h1>
				<div className={styles.TTSplit}>
                    <Sidebar choices={Object.values(Choices)} clicked={this.changeSelection} preDetermined={Choices.Introduction}/>
					<div className={styles.TTMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default TraumaTeam;
