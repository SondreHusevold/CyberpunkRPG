import React, { Component } from 'react';
import styles from './InterlockSkills.module.css';

enum SkillSections {
	About = "About",
	Starting = "Starting Skills",
	Pickup = "Pickup Skills"
}

interface InterlockSkillsState {
    section: SkillSections;
}

class InterlockSkillList extends Component<{}, InterlockSkillsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: SkillSections.About
        }
	}

	public setSection = (section: SkillSections) => {
		this.setState({
			section: section
		});
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

export default InterlockSkillList;
