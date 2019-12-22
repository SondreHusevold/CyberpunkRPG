import React, { Component } from 'react';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import styles from './ClassDetails.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';
import animations from '../StyleModules/Animations.module.css';
import { CharacterClass, ClassDetailedInformation } from './Classes';
import { ClassQuote } from './ClassQuote';
import { ClassService } from '../Services/ClassService';
import { ClassIntroduction } from './ClassIntroduction';
import { ClassSpecialAbility } from './ClassSpecialAbility';

enum ClassDetailsSection {
	None = "",
	Intro = "Introduction",
	SpecialAbility = "Special Ability",
	CareerSkills = "Career Skills"
}

interface ClassDetailsProps {
	characterClass: CharacterClass;
}

interface ClassDetailsState {
	details: ClassDetailedInformation | null
	female: boolean;
	viewing: ClassDetailsSection
}

class ClassDetails extends Component<ClassDetailsProps, ClassDetailsState> {

	public constructor(props: ClassDetailsProps) {
		super(props);
		this.state = {
			details: null,
			female: Math.floor(Math.random() * 10) % 2 === 1,
			viewing: ClassDetailsSection.None
		}

		//  Set the details async. Constructor can't be async.
		this.setDetails();
	}


	// Ensure that once the class changes it'll set the correct name.
	async componentDidUpdate(prevProps: ClassDetailsProps, prevState: ClassDetailsState) {
		if(prevProps.characterClass.name !== this.props.characterClass.name) {
			this.setState({
				female: Math.floor(Math.random() * 10) % 2 === 1,
				viewing: ClassDetailsSection.None
			}, 
			() => this.setDetails())
		}
	}

	public async setDetails() {
		this.setState({
			details: await ClassService.getClassDetails(this.props.characterClass.name)
		});
	}

	public getContent() {
		if(this.state.details == null)
			return "";
;
		switch (this.state.viewing) {
			case ClassDetailsSection.None:
				return <ClassQuote characterClass={this.props.characterClass} getGender={this.getGender}/>
			case ClassDetailsSection.Intro:
					return <ClassIntroduction characterClass={this.props.characterClass} characterInformation={this.state.details} getGender={this.getGender} />
			case ClassDetailsSection.SpecialAbility:
				return <ClassSpecialAbility characterInformation={this.state.details} />
			case ClassDetailsSection.CareerSkills:
				return <div>
					{this.state.details.careerSkills.map((val, index) => {
						return (
							<div key={val.name}>
								
								{ val.name === "Medtechie" ? <hr/> : "" }
								{
									/* Mainly for Tech/MedTechie  */
									this.state.details != null && this.state.details.careerSkills.length > 1 
									? ( <h2>{val.name} career skills:</h2> )
									: ""
								}
								<div className={styles.CareerSkillsGridified}>
									{val.skills.map((skill, ind) => {
										return <h3 key={skill} className={skill.length > 20 ? styles.CareerSkillsLong : "" }>{skill}</h3>
									})}
								</div>
							</div>
						)
					})}
				</div>
			default:
				return "ERROR: NULL"
		}
	}

	public switchContent = (switchTo: ClassDetailsSection) => {
		this.setState({
			viewing: switchTo
		});
	}

	// Used to replace gender in the text for flavor.  
	public getGender = (ownership: boolean) => {
		if(ownership)
			return this.state.female ? "her": "his";
		return this.state.female ? "she": "he";
	}

	public isActive = (selection: ClassDetailsSection) => {
		return this.state.viewing === selection;
	}


	public render() {
		return (
			<div className={styles.ClassDetails + " " + animations.FadeIn}>
				<h1 className={styles.Title}>{this.props.characterClass.name}:</h1> 
				<h2>{this.props.characterClass.description}</h2>
				<div className={styles.ClassSections}>
					{
						Object.values(ClassDetailsSection).map((sector) => {
							// Ignore "None" in enum.
							if(sector === ClassDetailsSection.None)
								return null;

							return (
								<div>
									<p key={sector}
										className={ tabbedpanel.NavLink + " " + (this.isActive(sector) ? tabbedpanel.ActiveNav : tabbedpanel.NotActiveNav)} 
										onClick={() => {this.switchContent(sector)}}
									>{sector}</p>
								</div>
							)
						})
					}
				</div>

				<div className={styles.ClassDetailContent}>
					{this.getContent()}
					<div className={styles.ClassDetailPicture}>
						<img className={pictureAnimation.InterlacedPicture} alt="Class" 
							src={`../../assets/Classes/${this.props.characterClass.name}/Picture.webp`}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ClassDetails;
