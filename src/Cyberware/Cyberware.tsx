import React, { Component } from 'react';
import styles from './Cyberware.module.css';
import Sidebar from '../Sidebar/Sidebar.Navigation';
import CyberSurgery from './CyberSurgery';
import CyberwareIntroduction from './CyberwareIntroduction';
import Cyberpsychosis from './Cyberpsychosis';
import CyberwareHumanity from './CyberHumanity';
import CyberPieces from './CyberwarePieces';

interface CyberState {
	selection: string | null;
	showMobileMenu: boolean;
} 

enum Choices {
	Introduction = "Introduction",
	Cyberpsychosis = "Cyberpsychosis",
	Surgery = "Surgery",
	Humanity = "Humanity",
	Pieces = "Pieces"
}

class Cyberware extends Component<{}, CyberState> {

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
				return <CyberwareIntroduction />
			case Choices.Cyberpsychosis:
				return <Cyberpsychosis />
			case Choices.Surgery:
				return <CyberSurgery />
			case Choices.Humanity:
				return <CyberwareHumanity />
			case Choices.Pieces:
				return <CyberPieces />
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
				<h1 className="consoleText" onClick={this.toggleMobileView}>Cyberware:</h1>
				<div className={styles.CyberSplit}>
					<Sidebar showMobile={this.state.showMobileMenu} 
							choices={Object.values(Choices)} 
							clicked={this.changeSelection} 
							preDetermined={Choices.Introduction}
							toggleMobile={this.toggleMobileView}
					/>
					<div className={styles.CyberMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default Cyberware;
