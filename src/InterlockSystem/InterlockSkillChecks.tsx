import React, { Component } from 'react';
import { StatService, Fumble } from '../Services/StatsAndSkillsService';
import styles from './InterlockSkillChecks.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';
import Tabs from '../Common/Tabs';

enum SkillCheckSections {
    About = "About",
    Making = "Making a Skill Check",
    Difficulty = "Difficulty Modifiers",
    Automatic = "Fumbles and Criticals"
}

interface InterlockSkillCheckState {
    section: SkillCheckSections;
    fumbleTable: Fumble[];
    chosenFumble: Fumble | null;
}

class InterlockSkillCheck extends Component<{}, InterlockSkillCheckState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: SkillCheckSections.About,
            chosenFumble: null,
            fumbleTable: []
        }

        this.getFumbles();
    }

    public async getFumbles() {
        this.setState({
            fumbleTable: await StatService.getFumbleTable()
        });
    }

    public setFumbleSubMenu = (fumble: Fumble | null) => {
        this.setState({
            chosenFumble: fumble
        });
    }

    public isActive = (selection: SkillCheckSections) => {
		return this.state.section === selection;
    }
    
    public switchContent = (section: SkillCheckSections) => {
        this.setState({
            section: section
        });
    }

    public renderAboutSkillChecks = () => {
        return (
            <div>
                <p>Most of the time, your character will be able to do most ordinary things without difficulty; walk, talk, open a can of Protein Food Complex 35 without gagging. But certain things will require that the character make a Skill Check to see if he can actually do what he wanted to.</p>
                <p>Each task is rated by the Referee from Easy to Nearly Impossible. Each rating has a corresponding numerical value, called a Difficulty.</p>
                <div className={styles.SkillDifficultyBorder}>
                    <p>Easy ..................................... 10+</p>
                    <p>Average ............................. 15+</p>
                    <p>Difficult ............................... 20+</p>
                    <p>Very Difficult ................. 25+</p>
                    <p>Nearly Impossible ...... 30+</p>
                </div>
            </div>
        )
    }

    public renderMakingSkillChecks = () => {
        return (
            <div>
                <p>When making a Skill Check, first, determine which of your stats is the most appropriate to use to perfom the action.</p>
                <p>For example, if you were trying to stand on your head, REF would be best. If you were deciphering a code, INT would be the most appropriate.</p>
                <p>Next, if you have any one Skill directly relating to the task at hand, add that skill to the stat. You may apply only one Skill to a task at any time.</p>
                <p>Finally, roll a D10 and add the combined total of your die roll, your Stat, and your selected Skill. Compare your total with the Task’s Difficulty (as determined by the Referee). If your total is equal or higher, you have succeeded; on a lower roll, you have failed.</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>Example:</p>
                    <p>Johnny Silverhand needs to break into a locked room, a task the Referee considers to require some training. As such, it has a Difficulty of 15.</p>
                    <p>Johnny's most applicable stat is Technical, because this is a Task that requires manipulating a mechanical object. Johnny isn’t much of a techie (his Tech stat is only +3, enough to fix his guitar strings and plug in his amp). But Johnny also picked up Pick Lock +3 as one of his early Pickup skills.</p>
                    <p>This gives him a Base Ability of 6. Johnny will need to roll at least a 9 on his D10 to pick this lock.</p>
                </div>
                <h3>Opposed Rolls:</h3>
                <p>If you are making an attempt against another player character, the opposing player will combine his most applicable stat, skill and 1D10 roll. </p>
                <p>On an equal or higher roll, the defending player wins.</p>
            </div>
        )
    }

    public renderDifficultyModifiers = () => {
        return (
            <div>
                <p>Difficulty Modifiers are values which are added to the difficulty of a task, reflecting adverse conditions or extra problems.</p>
                <p>Modifiers might come when you are dealing with very ticklish or picky situations; things where life and death tasks must be performed.</p>
                <p>At these times, the referee might want to make the steps of the task clear by creating a Difficulty through stacking the modifiers.</p>
                <p>In addition, modifiers allow to determine the relative difficulty of doing something and the effect of prevailing conditions.</p>
            </div>
        )
    }

    public renderAutomatics = () => {
        if(this.state.chosenFumble == null) {
            return (
                <div>
                    <h3>Critical Success:</h3>
                    <p>On a natural roll of 10, you have had a critical success. Roll an additional 1D10 and add it to your original roll.</p>
                    <p>This is when you get lucky and manage to pull off something you have no chance in hell of doing normally.</p>
                    
                    <h3>Automatic Failure:</h3>
                    <p>On a natural die roll ot 1, you have failed. Roll an additional 1D10 and check the result on the Fumble Table below to see what (if anything) happens.</p>
                    <p>(The referee always has a final say on the Fumble and the table might not always be used depending on the situation).</p>
                    
                    <h3>Fumble Table:</h3>
                    <div className={styles.FumbleTableSubmenu}>
                        {
                            this.state.fumbleTable.map((fumble) => {
                                return (
                                    <button className={styles.FumbleTableSubmenuButton} key={fumble.title} 
                                            onClick={() => this.setFumbleSubMenu(fumble)}>{fumble.title}
                                    </button> 
                                )
                            }) 
                        }
                    </div>
                    
                </div>
            )
        }
        else {
            return this.renderFumble();
        }
    }

    public renderFumble = () => {
        let fumble = this.state.chosenFumble;

        if(fumble != null) {
            return (
                <div className={styles.FumbleTableSubmenuDetails}>
                    <h2>{fumble.title}</h2>
                    <p>Typically used when: {fumble.usage}</p>
                    <div className={styles.FumbleTableWrapper}>
                        { 
                            fumble.fumbles.map((fumb) => {
                                return (
                                    <div className={styles.FumbleTableRow}>
                                        <span className={styles.FumbleRange}>{fumb.range}</span>
                                        <span className={styles.FumbleResult}>{fumb.result}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.FumbleTableSubmenuReturnWrapper} onClick={() => this.setFumbleSubMenu(null)}>
                        <div className={styles.FumbleTableReturnDesktop}>
                            > [<span className={styles.FumbleTableSubmenuReturn}> RETURN </span>]
                        </div>
                        <button className={styles.FumbleTableReturnMobile}>
                            RETURN
                        </button>
                    </div>
                </div>
            )
        }
        
        return "";
    }

    public getContent = () => {
        switch (this.state.section) {
            case SkillCheckSections.About:
                return this.renderAboutSkillChecks();
            case SkillCheckSections.Making:
                return this.renderMakingSkillChecks();
            case SkillCheckSections.Difficulty:
                    return this.renderDifficultyModifiers();
            case SkillCheckSections.Automatic:
                return this.renderAutomatics();
            default:
                return <div/>;
        }
    }

	public render() {
		return (
            <Tabs getContent={this.getContent} 
                isActive={this.isActive} 
                sections={SkillCheckSections} 
                title="Skill Checks:" 
                switchContent={this.switchContent} 
            />
		);
	}
}

export default InterlockSkillCheck;
