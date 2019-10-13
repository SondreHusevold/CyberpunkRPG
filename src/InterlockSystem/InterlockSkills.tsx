import React, { Component } from 'react';
import styles from './InterlockSkills.module.css';

enum SkillSections {
	About = "About",
	Starting = "Starting Skills",
	Pickup = "Pickup Skills",
	House = "House Rules"
}

interface InterlockSkillsState {
    section: SkillSections;
}

class InterlockSkills extends Component<{}, InterlockSkillsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: SkillSections.About
        }
	}
	
	public renderAboutSkills = () => {
		return (
			<div>
				<p>Skills are used to enhance your ability to perform certain tasks. They represent things you've specifically taken the time to learn and possibly master, (as opposed to your stats, which only indicate a basic, natural ability at doing something).</p>
				<p>For example, if you had very good REF, you would probably pick up driving a car very easily. But you would not know how to drive a car until you had learned the skill of Driving.</p>
				<p>Each skill is related in some way to one of your basic stats. For example, the skill of Handgun is always related to the character’s REF stat.</p>
				<p>Skills are always rated from 0 to 10, with 1 being a novice level of knowledge, and 10 being a master’s level of ability. In addition, players may opt to invent their own Skills (see Inventing New Skills, page 54 core rulebook).</p>
			</div>
		)
	}

	public renderStartingSkills = () => {
		return (
			<div>
				<p>There are two types of starting Skills: Career Skill Packages and Pickup Skills: </p>
				<p>The Career Skill Package is a group of skills that are known by your character as part of his or her Career. They're basics— Rockers know how to play instruments, Solos know how to shoot guns, etc. </p>
				<p>A starting character receives 40 points to distribute among his 10 Career Skills. He may not use these points on his Pickup Skills, although he can choose to use future Improvement Points to improve a Career Skill at any later time. He does not have to put points into all of his Career Skills (but it's a good idea— you never know).</p>
				<div style={{ border: "1px solid red", padding: "20px" }}>
					<p>Important: it is required that one of your character’s Career Skills be the Special Ability for his or her class. These Skills are unique to the class and reflect abilities and resources only that particular class possesses.</p>
					<p>Examples are the Authority of Cops which allows them to use the weight and powers of the Law or the Charismatic Leadership which allows a Rockerboy to convince a crowd to get down and party — or get out and riot.</p>
					<p>The number of points you put into your Special Ability (up to, but not greater than 10) reflects your position in your chosen field and the development of your unique career skill. Because of this, your Special Ability also determines how much money you have to start with (see page 58 in rulebook).</p>
				</div>
				<p>Obviously while spreading those Career Points around it’s going to be pretty tempting to make yourself a wealthy Superstar, but remember a Rocker with lots of Charismatic Leadership and no performance skills will find that things can get ugly fast.</p>
				<p>They may love you but they paid 60 eurobucks for those tickets so you’d better be smokin'.</p>
			</div>
		)
	}

	public setSection = (section: SkillSections) => {
		this.setState({
			section: section
		});
	}

	public renderPickupSkills = () => {
		return (
			<div>
				<p>Pickup Skills are skills the character has learned in the course of knocking around, living his or her life. Characters determine their starting points for these skills by adding their REF and INT Stats.</p>
				<p>For example: Johnny’s REF is 9 and his INT is 7. Johnny has 16 points to spend on Pickup Skills.</p>
				<p style={{ border: "1px solid red", padding: "20px" }}>Pickup Skill points may not be used to increase your character's Career Skills!</p>
			</div>
		)
	}

	public renderHouseRuled = () => {
		return (
			<div>
				<p>The total amount of skills in Cyberpunk is <u>79</u> by default.</p>
				<p>Due to this excessive amount of skills that are very similar in nature, many skills have been squashed into a single skill.</p>
				<p>This is a referee house rule to keep the game simple and will make it easier for both referee and players.</p>
				<p>A good example of this squash is Hide/Evade, Shadow/Track and Stealth which fulfill mostly the same roles.</p>
				<div style={{border: "1px solid red", padding: "20px"}}>
					<p><b>Shadow/Track</b> is described as <i>"The skill of shadowing and following people."</i></p>
					<p><b>Hide/Evade</b> is described as <i>"The skill of losing pursuers, covering tracks and otherwise evading people on your trail."</i></p>
					<p><b>Stealth</b> is described as <i>"The skill of hiding in shadows, moving silently, evading guards, etc."</i></p>
				</div>
				<p>These skills, while not identical, are essentially the same which means a character who is good at hiding might not be good at stealth, a skill described as 'hiding in shadows'.</p>
				<p>In Cyberpunk RED - The newest edition of Cyberpunk, the skills have been squashed into <u>22</u> skills. Which is less than the WoD games which usually have 30.</p>
				<p>Due to the referee not wanting to deviate too far from the Cyberpunk 2020 formula, the total sum of skills after the squash is 40.</p>
			</div>
		)
	}

	public renderChoice = () => {
		switch(this.state.section) {
			case SkillSections.About:
				return this.renderAboutSkills();
			case SkillSections.Starting:
				return this.renderStartingSkills();
			case SkillSections.Pickup:
				return this.renderPickupSkills();
			case SkillSections.House:
				return this.renderHouseRuled();
		}

		return "";
	}

	public isActive = (selection: SkillSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
			<div className={styles.Skills}>
				<h1 className={styles.SkillsTitle}>Skills:</h1>
				{
					Object.values(SkillSections).map((section: SkillSections) => {
						return (
							<span key={section}
								className={ styles.NavLink + " " + (this.isActive(section) ? styles.ActiveNav : styles.NotActiveNav)} 
								onClick={() => {this.setSection(section)}}
							>{section}</span>
						)
					}) 
				}
				<div className={styles.SkillContent}>
					{this.renderChoice()}
				</div>
			</div>
		);
	}
}

export default InterlockSkills;
