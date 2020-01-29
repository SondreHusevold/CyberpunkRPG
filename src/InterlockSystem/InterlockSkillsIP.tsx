import React, { Component } from 'react';
import styles from './InterlockReputation.module.css';
import splitter from '../StyleModules/Splitter.module.css';
import Tabs from '../Common/Tabs';

enum SkillIPSections {
	Learning = "Learning and Improving",
	Multipliers = "IP Multipliers",
	Getting = "Getting More IP"
}

interface InterlockSkillsIPState {
    section: SkillIPSections;
}

class InterlockSkillsIP extends Component<{}, InterlockSkillsIPState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: SkillIPSections.Learning
        }
	}
	
	public renderLearning = () => {
		return (
			<div className={splitter.TwoColumnSplit}>
                <div>
                    <p>You can can improve your skills or begin new ones by accumulating Improvement Points (IP). As you gain more IP, you'll record these points in the area next to the skills listing on your Hardcopy Form. When you have collected enough Improvement Points in a skill, the skill's level increases by one.</p>
                    <p>The first level of a skill will always cost 5 IP. This is usually 10, but will be house ruled due to being a relatively short campaign.</p> 
                    <p>To determine how many points are required to raise a skill higher than this, multiply the current level of skill by 5. This is how many points are required to raise a simple (IP multiplier=1) skill to the next level.</p>
                    <div className={styles.ExampleBorder}>
                        <span>Next skill level = Current skill level * 5 * IP Multiplier</span>
                    </div>
                    <h3>Chipware:</h3>
                    <p>A faster way to improve your skills is through chipware (see Cyberware).</p>
                    <p>You can essentially insert a chip in your head to for example pilot AVs without any previous knowledge. These chips can be swapped around at any time making them very flexible.</p>
                    <p>However you cannot improve your skills when it is artifically set by chipware due to how the chip overrides your natural abilities. Meaning natural skills and chipwared skills will not stack.</p>
                </div>
                <div className={styles.AwardTable}>
                    <span>Award</span>
                    <span>Based on</span>
                    <span>1</span>
                    <span>Used Skills in this area often even if not effectively. </span>
                    <span>2</span>
                    <span>Used Skills effectively.</span>
                    <span>3</span>
                    <span>Frequent and effective use of Skill.</span>
                    <span>4</span>
                    <span>Did something out of the ordinary with this Skill. </span>
                    <span>5</span>
                    <span>Very clever or effective use of this Skill.</span>
                    <span>6</span>
                    <span>Extremely clever or effective use of Skill.</span>
                    <span>7</span>
                    <span>Skill was critical to player in this adventure session.</span>
                    <span>8</span>
                    <span>Skill use was critical to entire group this adventure session.</span>
                    <span>9</span>
                    <span>Did something really incredible with this Skill.</span>
                </div>
			</div>
		)
    }
    
    public renderIPMultipliers = () => {
        return(
            <div>
                <p>Not all skills are equally easy to learn. These skills have an additional IP multiplier which multiplies the number of points required to learn the next level of skill.</p> 
                <p>This extra cost will be noted in the skill descriptions.</p>
                <p>Example: Choi Li Fut (Martial Arts) has a multiplier of 3. To raise my Choi Li Fut skill from +4 to +5 would require 120 IP, not 40.</p>
            </div>
        )
    }

    public renderGettingMore = () => {
        return(
            <div>
                <p>There are three ways to accumulate Improvement Points: Study and Practice, Being Taught, and Direct Experience. In all three cases, the amount of improvement is determined by the Referee of your game.</p>
                
                <h3><u>Study and practice:</u></h3>
                <p>In its simplest form, you get a how-to book and begin practicing. </p>
                <p>Study is pretty tough—you have no idea of where to begin, and no one to correct your mistakes. </p>
                <p>The biggest limit to this type of learning is that you can only improve your skill from a level of +0 to a level of +2. In general, it takes about 1 day of book learning to gain 1x 1P.</p>
                
                <h3><u>Being Taught:</u></h3>
                <p>Finding a teacher is far superior to self-teaching or book learning. The teacher must have a higher level of skill than the student, and must have the time to teach you (how long this takes, of course, is determined by the Referee).</p>
                <p>But even the most knowledgeable of teachers may not be able to transfer that knowledge. That's where the skill of Teaching comes into play. The teacher must average his skill in the subject to be taught with his teaching skill. He may then teach the student up to that level of skill.</p>
                <p>How long this takes is, of course, up to the Referee, who awards IP over the passage of time (usually 1-5 IP per sesson).</p>
                
                <h3><u>Experience:</u></h3>
                <p>Still the best teacher.</p>
                <p>Whenever you do something well, the Referee rewards you with Improvement Points right on the spot. The problem is that these points will be applied to the skill you were using when you got the reward. Therefore, if you want to get better in a particular skill, it's important to use that skill every chance you get.</p>
                <p>Referees should use an even hand when rewarding Improvement Points, not only rewarding players for doing things well, but also for demonstrating both role-playing ability and teamwork. </p>
                <p>In general, the rulebook suggests not awarding more than six points per skill per game session. However due to the short span of our campaigns it will be ignored.</p>
            </div>
        )
    }

	public switchContent = (section: SkillIPSections) => {
		this.setState({
			section: section
		});
	}


	public getContent = () => {
		switch(this.state.section) {
			case SkillIPSections.Learning:
				return this.renderLearning();
			case SkillIPSections.Multipliers:
				return this.renderIPMultipliers();
			case SkillIPSections.Getting:
				return this.renderGettingMore();
		}

		return "";
	}

	public isActive = (selection: SkillIPSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
			<Tabs getContent={this.getContent} 
                isActive={this.isActive} 
                sections={SkillIPSections} 
                title="Improvement Points:" 
                switchContent={this.switchContent} 
            />
		);
	}
}

export default InterlockSkillsIP;
