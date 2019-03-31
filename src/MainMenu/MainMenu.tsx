import React, { Component } from 'react';
import styles from './MainMenu.module.css';

interface IMainMenuState {
	selectedSection: MainSection;
	isOpen: boolean;
}

interface IMainMenuProps {
	changeSection: (section: MainSection) => void;
}

class MainMenu extends Component<IMainMenuProps, IMainMenuState> {

	public constructor(props: IMainMenuProps) {
		super(props);
		this.state = { 
			isOpen: true,
			selectedSection: MainSection.Mainframe
		};
	}

	public changeSection = (section: MainSection) => {
		this.setState({
			selectedSection: section
		})

		this.props.changeSection(section);
	}

	public render() {
		return (
			<nav className={styles.MainMenu}>
				<h1 className={styles.cyberpunk_logo} tabIndex={1} onClick={this.changeSection.bind(this, MainSection.Mainframe)}>Cyberpunk 2020</h1>
				<li className={styles.mainmenuList}>
					{MainSectionArray.map((section, index) => {
						if(index !== 0) {
							return (
								<ul key={index} 
									tabIndex={index+1}
									className={this.state.selectedSection === index ? styles.selectedSection : ''}
									onClick={this.changeSection.bind(this, index)}
								>{section}</ul> 
							)
						}
						return;
					})}
				</li>
				<hr/>
			</nav>
		);
	}
}

export enum MainSection {
	Mainframe,
	Classes,
	InterlockSystem,
	NightCity,
	FNFF,
	TraumaTeam,
	Cyberwares
}

// Can't map an enum.
const MainSectionArray = [
	'Mainframe',
	'Classes',
	'Interlock System',
	'Night City',
	'FNFF',
	'Trauma Team',
	'Cyberwares'
]

export default MainMenu;
