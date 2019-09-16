import React, { Component } from 'react';
import styles from './MainMenu.module.css';

export enum MainSection {
	Mainframe,
	Classes,
	InterlockSystem,
	NightCity,
	FNFF,
	TraumaTeam,
	Cyberwares
}

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
			isOpen: false,
			selectedSection: MainSection.Mainframe
		};
	}

	public changeSection = (section: MainSection) => {
		this.setState({
			selectedSection: section,
			isOpen: false
		})

		this.props.changeSection(section);
	}

	public openMobileMenu = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	public render() {
		return (
			<nav className={styles.MainMenu}>
				{ /* DESKTOP */ }
				<div className={styles.Desktop}>
					<button className={styles.cyberpunk_logo} tabIndex={1} onClick={this.changeSection.bind(this, MainSection.Mainframe)}>
						Cyberpunk 2020
					</button>
					<div className={styles.mainmenuList}>
						{MainSectionArray.map((section, index) => {
							if(index !== 0) {
								return (
									<button key={index} 
										tabIndex={index+1}
										className={this.state.selectedSection === index ? "selectedButton" : ''}
										onClick={this.changeSection.bind(this, index)}
									>{section}</button> 
								)
							}
							return "";
						})}
					</div>
					<hr/>
				</div>

				{ /* MOBILE */ }
				<div className={styles.Mobile}>
					<h1 className={styles.cyberpunk_logo} tabIndex={1} onClick={this.openMobileMenu}>Cyberpunk 2020</h1>
					<div className={styles.mainmenuList + " " + (this.state.isOpen ? styles.activateMobileList : styles.hiddenMobileList)}>
						{MainSectionArray.map((section, index) => {
							if(index !== 0) {
								return (
									<p key={index} 
										tabIndex={index+1}
										className={this.state.selectedSection === index ? styles.selectedSection : ''}
										onClick={this.changeSection.bind(this, index)}
									>{section}</p> 
								)
							}
							return "";
						})}
					</div>
					<hr/>
				</div>
			</nav>
		);
	}
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
