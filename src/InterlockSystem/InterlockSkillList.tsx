import React, { Component } from 'react';
import styles from './InterlockSkillList.module.css';
import { StatService, SkillList, Skill } from '../Services/StatsAndSkillsService';

interface InterlockSkillsState {
	selection: Skill | null;
	list: SkillList[]
}

class InterlockSkillList extends Component<{}, InterlockSkillsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
			list: [],
			selection: null     
		}

		this.getSkills();
	}
	
	public renderChoice = () => {
		return "";
	}

	public async getSkills() {
		this.setState( {
			list: await StatService.getSkillList()
		});
	}

	public setChoice = (skill: Skill) => {
		this.setState({
			selection: skill
		});
	}

	public clearChoice = () => {
		this.setState({
			selection: null
		});
	}

	public renderSkill = () => {
		if(this.state.selection == null)
			return "";

		let skill = this.state.selection;

		return (
			<React.Fragment>
				<div className={styles.ModalBackground} onClick={this.clearChoice}/>
				<div className={styles.WindowedInformation}>
					<h1>{skill.name}</h1>
					{skill.description.split("\n").map((paragraph) => {
						if(paragraph.includes("**")) {
							return (
								paragraph.split("**").map((listedItem) => {
									return <li>{listedItem}</li>
								})
							)
						}

						return (
							<p>{paragraph}</p>
						)
					})}
					<button className={styles.BigOnMobile} onClick={this.clearChoice}>> Return </button> 
				</div>
			</React.Fragment>
		)
	}

	public countSkills = () => {
		let totalCount = 0;

		for (const category of this.state.list) {
			totalCount = totalCount + category.skills.length;
		}

		return totalCount;
	}

	public render() {
		return (
			<div className={styles.SkillList}>
				{ this.renderSkill() }
				{
					this.state.list.map((skillList) => {
						return (
							<React.Fragment>
								<h2 className={styles.InterlacedPicture}>{ skillList.category}:</h2>
								<div className={styles.InterlockSkillList}>
									{skillList.skills.map((skill) =>  {
										return <button onClick={() => { this.setChoice(skill); } }>{skill.name}</button>
									})}
								</div>
								<hr/>
							</React.Fragment>
						)
					}) 
				}
			</div>
		);
	}
}

export default InterlockSkillList;
