import React, { Component } from 'react';
import styles from './FNFFWounds.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';
import Tabs from '../Common/Tabs';

enum WoundsSections {
	Effects = "Effects",
	Special = "Special cases",
	Stuns = "Stun/Shock"
}

interface FNFFWoundsState {
    section: WoundsSections;
}

class FNFFWounds extends Component<{}, FNFFWoundsState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: WoundsSections.Effects
        }
	}

	public setSection = (section: WoundsSections) => {
		this.setState({
			section: section
		});
	}
	
	public renderWoundEffects = () => {
		return (
			<div>
				<p>Okay, so the Armor didn't stop all of the damage, and your Body Type Modifierwasn't enough to shrug off the rest. It's time to take a Wound.</p>
                <p>The Wound section of the Hardcopy Form is used to record damage. For each point of damage taken, check off one box, moving from left to right, top to bottom. 
                    The top line of this section (marked LIGHT, SERIOUs, CRITICAL, MORTAL, etc.) tells the overall state of the character’s health.</p>
                <div className={tabbedpanel.ExampleBorder}>
                <h3>Wound Effects:</h3>
                <ul>
                    <li>At a LIGHT wound level, a character suffers no penalties to his activities. He just hurts a lot ("It's only a flesh wound...").</li>
                    <li>At a SERIOUS wound level, the character will be at -2 to his REF stat for all actions. He's hurting, bleeding, and definitely hampered.</li>
                    <li>At a CRITICAL wound level, the character's REF, INT and CL stats are automatically reduced by half (round up). The character is holding his guts in with one hand and doing his damndest to stay in the battle.</li>
                    <li>If MORTALLY wounded, the character's REF, INT and CL stats are reduced to 1/3rd normal (divide by 3, rounding up). Most characters are already out of the action by now, and are quietly going about the business of expiring. Messily.</li>
                </ul>
                </div>
			</div>
		)
	}

	public renderSpecial = () => {
		return (
            <div className={styles.SpecialCasesSplit}>
                <div>
                    <p>Being hit isn't always something you can shrug off. Friday Night Firefight is extremely deadly, often due to the rules below:</p>
                    <h2>Limb Loss:</h2>
                    <p>If a character takes more than eight points of damage to a limb area in any one attack, the area is severed or crushed beyond recognition. The character must make an immediate Death Save at Mortal 0.</p>
                    <p>A head wound of this type will kill automatically.</p>
                    <h2>Head Hits:</h2>
                    <p>A head hit always doubles damage.</p>
                </div>
                <div className={tabbedpanel.ExampleBorder}>
                    <h3>Think about it:</h3>
                    <p>A regular Militech Arms Avenger (9mm hand pistol) does 2D6+1 damage.</p>
                    <p>If your character takes more than 8 points to the head she dies immidiately.</p>
                    <h4>And a headshot is double damage.</h4>
                    <p>If the character hits and does a damage roll where <u>both</u> D6 land 1, you might survive. Otherwise you need some serious armor or be turned into spare parts.</p>
                    <p>Walking around with a "bulletproof" box on your head isn't exactly stylish however, and can instead be a typical sign of someone looking for trouble to the inhabitants of Night City.</p>
                </div>
			</div>
		)
	}

	public renderStuns = () => {
		return (
			<div className={styles.SavesSplit}>
                <div>
                    <p>Every time a character takes damage, he must make a save against the effects of pain, shock, fear and blood loss. 
                    This is what you see in most Hollywood gunfights when the bad guy gets hit—staggering, falling back and so on, 
                    all caused by pain and shock (see the sidebar for a general tirade about the fiction of knockback).
                    </p>
                    <p>The Stun Shock Save is a serious thing, because it can put an opponent out of the picture faster than the actual damage from the wound. Police officers have actually died from the shock of a minor bullet wound in the foot (but we won't do that to your character).</p>
                    <p>Other people have taken as many as thirty or forty gunshots and managed to keep moving for up to ten minutes before their minds got the message their bodies were telling them ("Hey Bob, you're dead!").</p>
                    <p>The Stun Save is equal to your character's Body Type value, minus a penalty based on his current Wound State.</p>
                    <p>A failed roll means the character is out of combat.</p>
                </div>
                <div className={styles.ModifierTableExtend}>
                    <h3>Stun/Shock Save Modifiers:</h3>
                    <table>
                        <tr>
                            <th>Wound State</th>
                            <th>Penalty</th>
                        </tr>
                        <tr>
                            <td>Light</td>
                            <td>-0</td>
                        </tr>
                        <tr>
                            <td>Serious</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>Critical</td>
                            <td>-2</td>
                        </tr>
                        <tr>
                            <td>Mortal</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>Mortal 1</td>
                            <td>-4</td>
                        </tr>
                        <tr>
                            <td>Mortal 2</td>
                            <td>-5</td>
                        </tr>
                        <tr>
                            <td>Mortal 3</td>
                            <td>-6</td>
                        </tr>
                        <tr>
                            <td>Mortal 4</td>
                            <td>-7</td>
                        </tr>
                        <tr>
                            <td>Mortal 5</td>
                            <td>-8</td>
                        </tr>
                        <tr>
                            <td>Mortal 6</td>
                            <td>-9</td>
                        </tr>
                    </table>
                </div>
			</div>
		)
	}

	public renderChoice = () => {
		switch(this.state.section) {
			case WoundsSections.Effects:
				return this.renderWoundEffects();
			case WoundsSections.Special:
				return this.renderSpecial();
			case WoundsSections.Stuns:
				return this.renderStuns();
		}

		return "";
	}

	public isActive = (selection: WoundsSections) => {
		return this.state.section === selection;
    }

	public render() {

		return (
            <Tabs getContent={this.renderChoice} 
                isActive={this.isActive} 
                sections={WoundsSections} 
                title="Wounds:" 
                switchContent={this.setSection}
            />
		);
	}
}

export default FNFFWounds;
