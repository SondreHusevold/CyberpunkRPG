import React, { Component } from 'react';
import styles from './MainMenu.module.css';

export enum MainSection {
	Mainframe = "Mainframe",
	Classes = "Classes",
	InterlockSystem = "Interlock System",
	NightCity = "Night City",
	FNFF = "FNFF",
	TraumaTeam = "Trauma Team",
	Cyberware = "Cyberware"
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
						{Object.values(MainSection).map((section) => {
							if(section !== MainSection.Mainframe) {
								return (
									<button key={section} 
										className={this.state.selectedSection === section ? "selectedButton" : ''}
										onClick={() => this.changeSection(section) }
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
						{Object.values(MainSection).map((section) => {
							if(section !== MainSection.Mainframe) {
								return (
									<p key={section} 
										className={this.state.selectedSection === section ? styles.selectedSection : ''}
										onClick={() => this.changeSection(section)}
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
export default MainMenu;
