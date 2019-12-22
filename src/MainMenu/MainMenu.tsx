import React, { Component } from 'react';
import styles from './MainMenu.module.css';
import { Router, Link } from 'react-router-dom';

export enum MainSection {
	NightCity = "Night City",
	Mainframe = "Mainframe",
	Classes = "Classes",
	InterlockSystem = "Interlock System",
	FNFF = "FNFF",
	TraumaTeam = "Trauma Team",
	Cyberware = "Cyberware"
}

export const defaultsubsites: DefaultSubSite[] = [
	{ name: "nightcity", subsite: "about" },
	{ name: "classes", subsite: "rockerboy" },
	{ name: "interlocksystem", subsite: "introduction" },
	{ name: "fnff", subsite: "introduction" },
	{ name: "traumateam", subsite: "introduction" },
	{ name: "cyberware", subsite: "introduction" }
] 

interface DefaultSubSite {
	name: string;
	subsite: string;
}

interface IMainMenuState {
	selectedSection: MainSection;
	isOpen: boolean;
}

interface IMainMenuProps {
	changeSection: (section: MainSection) => void;
	history: any;
}

class MainMenu extends Component<IMainMenuProps, IMainMenuState> {

	public constructor(props: IMainMenuProps) {
		super(props);
		this.state = { 
			isOpen: false,
			selectedSection: this.currentSectionFromLocation()
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

	public findSubSite = (section: string) => {
		let sect =  defaultsubsites.find(sec => sec.name === section);
		if(sect != null) 
			return sect.subsite
		return ""
	}

	public currentSectionFromLocation = () => {
		let location: string[] = this.props.history.location.pathname.split("/");
		if(location != null) {
			for (const possibleSection of Object.values(MainSection)) {
				let attemptFind = location.find(sec => sec.toLowerCase().replace(/\s/g, "").startsWith(possibleSection.toLowerCase().substr(0, 5)))
				if(attemptFind != null && attemptFind.length !== 0) {
					return possibleSection;
				}
			}
		}
		return MainSection.Mainframe;
	}

	public render() {
		return (
			<Router history={this.props.history}>
				<nav className={styles.MainMenu}>
					{ /* DESKTOP */ }
					<div className={styles.Desktop}>
						<button className={styles.cyberpunk_logo} tabIndex={1}>
							<Link to="/" onClick={() => { this.changeSection(MainSection.Mainframe) }} >Cyberpunk 2020</Link>
						</button>
						<div className={styles.mainmenuList}>
							{Object.values(MainSection).map((section) => {
								if(section !== MainSection.Mainframe) {
									let sectionLowerCaseNoSpaces = section.toLowerCase().replace(/\s/g, "");

									return (
										<React.Fragment key={section}>
											<Link to={`/${sectionLowerCaseNoSpaces}/${this.findSubSite(sectionLowerCaseNoSpaces)}`} onClick={() => { this.changeSection(section) }}>
												<button className={this.state.selectedSection === section ? "selectedButton" : ''}>
													{section}
												</button>
											</Link>
										</React.Fragment>
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
									let sectionLowerCaseNoSpaces = section.toLowerCase().replace(" ", "");
									return ( 
										<div className={styles.mainmenuMobileText} key={section}>
											<Link to={`/${sectionLowerCaseNoSpaces}/${this.findSubSite(sectionLowerCaseNoSpaces)}`} 
												onClick={() => { this.changeSection(section) }}
												className={this.state.selectedSection === section ? styles.selectedSection : ''}>
												{section}
											</Link> 
										</div>
									)
								}
								return "";
							})}
						</div>
						<hr/>
					</div>
				</nav>
			</Router>
		);
	}
}
export default MainMenu;
