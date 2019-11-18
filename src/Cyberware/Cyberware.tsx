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

	public render() {
		return (
			<div>
				<h1 className="consoleText">Cyberware:</h1>
				<div className={styles.CyberSplit}>
                    <Sidebar choices={Object.values(Choices)} clicked={this.changeSelection} preDetermined={Choices.Introduction}/>
					<div className={styles.CyberMain}>
						{this.getCurrentSelection()}
					</div>
				</div>
			</div>
		);
	}
}

export default Cyberware;
