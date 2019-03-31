import React, { Component } from 'react';
import Classes from '../Classes/Classes'
import { MainSection } from '../MainMenu/MainMenu';
import styles from './Mainframe.module.css';

interface IMainframeProps {
	currentSection: MainSection;
}

class Mainframe extends Component<IMainframeProps, {}> {
	public constructor(props: IMainframeProps) {
		super(props);
	}

	public renderSection() {
		switch (this.props.currentSection) {
			case MainSection.Classes:
				return <Classes/>
			case MainSection.InterlockSystem:
				return <h1>Interlock System:</h1>
			case MainSection.NightCity:
				return <h1>Night City:</h1>
			case MainSection.FNFF:
				return <h1>Friday Night Firefight:</h1>
			case MainSection.TraumaTeam:
				return <h1>Trauma Team:</h1>
			case MainSection.Cyberwares:
				return <h1>Cyberwares:</h1>
			default:
				return <h1>Welcome, netrunner</h1>
		}
	}

	public render() {		
		return (
			<div className={styles.Mainframe + ' ' + styles.console}>
				{this.renderSection()}
			</div>
		);
	}
}

export default Mainframe;
