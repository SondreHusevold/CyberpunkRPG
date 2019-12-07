import React, { Component } from 'react';
import styles from './TraumaTeam.module.css';
import TTIntroduction from './TTIntroduction';
import Sidebar from '../Common/Sidebar.Navigation';
import TTDeath from './TTDeath';
import TTHealing from './TTHealing';
import TTBodyBank from './TTBodyBank';
import TTDrugs from './TTDrugs';


interface TTState {
	selection: string | null;
	showMobileMenu: boolean;
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

	public toggleMobileView = () => {
		this.setState({
			showMobileMenu: !this.state.showMobileMenu
		})
	}

	public render() {
		return (
			<div>
				<h1 className="consoleText" onClick={this.toggleMobileView}>Trauma Team International:</h1>
				<div className={styles.TTSplit}>
					<Sidebar showMobile={this.state.showMobileMenu} 
						choices={Object.values(Choices)} 
						clicked={this.changeSelection} 
						preDetermined={Choices.Introduction}
						toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.TTMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default TraumaTeam;
