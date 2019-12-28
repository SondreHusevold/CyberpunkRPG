import React, { Component } from 'react';
import styles from './FNFFArmor.module.css';
import pictureAnimations from '../StyleModules/Pictures.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';
import Tabs from '../Common/Tabs';

enum ArmorSections {
	SP = "Stopping Power",
	HardSoft = "Hard/Soft",
    Layering = "Layering",
    Piercing = "Piercing",
    Cover = "Cover"
}

interface FNFFArmorState {
    section: ArmorSections;
}

class FNFFArmor extends Component<{}, FNFFArmorState> {

    public constructor(props: {}) {
        super(props);
        
        this.state = {
            section: ArmorSections.SP
        }
	}

	public setSection = (section: ArmorSections) => {
		this.setState({
			section: section
		});
	}
	
	public renderSP = () => {
		return (
			<div>
                <p>Armor is what stops targets from taking the damage you just located.</p>
                <p>Stopping power (SP) refers to the ability of armor to stop damage. Each type of armor has it's own Stopping Power.</p>
                <p>When the armor is struck by a round, the armor's SP is subtracted from the total amount of damage done by the hit. 
                    The remaining damage is then applied to the target area. If the damage done is less than the SP of the armor, no damage is done.
                </p>
                <div className={tabbedpanel.ExampleBorder}>
                    <h4>Example:</h4>
                    <p>Ripperjack is wearing a Kevlar jacket with an SP of 18.</p>
                    <p>A 5.56 round strikes him in the chest, causing 14 points of damage. The armor's higher SP thwarts the attack.</p>
                    <p>The next shot does 22 points of damage. The armor reduces this by 18 points.</p>
                    <p>Only 4 points get through to cause Ripperjack harm.</p>
                </div>
			</div>
		)
	}

	public renderHardSoft = () => {
		return (
			<div className={styles.TwoColumnSplit}>
                <div>
                    <p>Body armors are divided up by whether or not the majority of their protection is based on rigid metals/ceramics/composites, or on softer, more flexible ballistic fabrics.</p>
                    <p>This is done for layering purposes and for some weapon damage effects.</p>
                    <p>The table is arranged with heaviest protection at the top, lightest at bottom.</p>
                    <p>Remember that there are more armors in the Chrome books 1-4. These are only from the core rulebook.</p>
                </div>
            
                <table className={styles.ArmorTable}>
                    <tr>
                        <th>Hard armor:</th>
                        <th>Soft armor:</th>
                    </tr>
                    <tr>
                        <td>Metal Gear</td>
                        <td>Heavy Armor jacket </td>
                    </tr>
                    <tr>
                        <td>Police riot armor</td>
                        <td>Med. Armor jacket </td>
                    </tr>
                    <tr>
                        <td>Door Gunner’s vest</td>
                        <td>Police patrol armor </td>
                    </tr>
                    <tr>
                        <td>Steel helmet</td>
                        <td>M-78 RPA jacket </td>
                    </tr>
                    <tr>
                        <td>Flak vest/pants</td>
                        <td>Light Armor jacket </td>
                    </tr>
                    <tr>
                        <td>Ballistic Nylon helmet</td>
                        <td>Kevlar T-shirt/vest </td>
                    </tr>
                    <tr>
                        <td>M-78 RPA heavy vest </td>
                        <td>M-78 RPA T-shirt </td>
                    </tr>
                    <tr>
                        <td>Corp Mil body armor</td>
                        <td>Heavy Leather </td>
                    </tr>
                    <tr>
                        <td>C-Ballistic Light Mesh™</td>
                        <td>SkinTight™ armor padding</td>
                    </tr>
                </table>
			</div>
		)
	}

	public renderLayering = () => {
		return (
			<div>
                <p>"What a concept", you think, shrugging into a bulletproof T-shirt, bulletproof vest and a Kevlar armor jacket. 
                    Theoretically, one should be able to layer protection upon itself until he becomes invulnerable.
                </p>
                <p>Wrongo.</p>
                <p>First of all, let's look at reality. If the average cop could stack layers of armor on himself before tackling a domestic disturbance call, you can bet he'd do it. B
                    ut he doesn't, because it just isn't practical. Here's why.
                </p>
                <p>When you layer flack jackets, you aren't invulnerable; you're just immobile. While modern armor isn't as heavy as old fashioned armor plate, it's very encumbering from the movement angle.</p>
                <p>Straps, buckles, padding and stiff plastic add up to restrict arm movement, chafe the torso, and weigh down the legs. </p>
                <p>Pillsbury-doughboy padded arms don't lift guns very well, and well stuffed legs aren't much for bending, climbing and running. For this reason, every armor type in FNFF has an encumberance value (EV).</p>
                <p>When wearing body armor, add up the total of EV's (listed in the Armor Table), and subtract this from your character's REFLEX stat.</p>
                <div className={tabbedpanel.ExampleBorder}>
                    <p>REFLEX IN BODY ARMOR = REFLEX - TOTAL ARMOR EVS</p>
                </div>
                <p>In addition to Encumberance Values, only a <b>maximum of 3 layers of Armor</b> can be worn at any one time. No more than <b>one of these layers can be Hard Armor</b> (see Hard/Soft Armors Table). The 2nd layer has an extra EV penalty of -1; the 3rd layer, an additional penalty of -2.</p>
                <p>Subdermal Armor and Bodyplating cyberware options are considered to be armor layers; Skinweave is considered a layer, but receives no penalty.</p>
                <p>When layering armor, or wearing armor behind an obstacle or cover, subtract the smaller SP from the larger one. Find the difference on the table and read across to the other column. This is the bonus number you add to the larger SP to determine overall protection from the armor/ armor, or armor/cover combination. </p>
                <p>If you have three or more layers of protection, calculate in pairs from the inside out. (example: For armors A, B, C, you compare A and B; determine the bonus number, and then compare the new strength of the larger of the pair to armor C.)</p>
			</div>
		)
    }
    
    public renderPiercing = () => {
        return (
            <div>
                <h2>Armor piercing:</h2>
                <p>There's another reason why armor isn't the universal cure for flying lead, and it's called Armor Piercing (AP) rounds. These are bullets designed to deliver their full impact to a single point, instead of mushrooming out like a normal bullet. </p>
                <p>They don't cause as much damage as a standard lead or hollow point round (1/2 normal damage), but they cut through armor like a hot knife through cheese. As a result, whenever AP rounds are encountered, armor will have one half it's total SP value.</p>
                <p>For example, say a 5.56 AP round causes 30 points of damage. It hits SP 10 armor, which reduces it by 5 (10/2=5).</p>
                <p>The remaining 25 points are further reduced to 12 (25/2=12.5, rounded downto 12), based on an AP round's lower damage capacity.</p>
                <p>The same is true of knives, swords and other edged weapons. Note that armors marked with a check (✓) on the Armor Table are at half SP effectiveness against edged weapons.</p>
                <p>The smart solution in a combat situation is to rely on the lightest armor you think you can get away with unless you're planning to take on a stationary position or go up against very heavy firepower.</p>
                <h2>Staged Penetration:</h2>
                <p>Armor doesn't just keep absorbing damage indefinitely thanks to Staged Penetration.</p>
                <p>Each time the armor is struck by a pentrating attack (i.e., an attack that exceeds the armor's SP), its SP is reduced by 1 point. When the SP reaches 0, the armor will no longer stop damage.</p>
            </div>
        )
    }

	public renderCover = () => {
		return (
			<div className={styles.TwoColumnSplit}>
                <div>
                    <p>You don't have to lug around an armor jacket with you—often the best armor is what you can find around you.</p>
                    <p>Cover allows you to move from place to place, letting something else soak up the gunfire.</p>
                    <div className={styles.CoverImageWrapper}>
                        <img className={styles.CoverImage + " " + pictureAnimations.InterlacedPicture} alt="Covering yourself up prevents bullets to the face." src="/CyberpunkRPG/assets/Visuals/FNFFCover.webp" />
                    </div>
                </div>
                <table className={styles.ArmorTable}>
                    <tr>
                        <th>Common Cover</th>
                        <th>SPs</th>
                    </tr>
                    <tr>
                        <td>Sheetrock Wall </td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Stone Wall </td>
                        <td>30</td>

                    </tr> 
                    <tr>
                        <td>Large Tree, Phone pole </td>
                        <td>30</td>
                    </tr> 
                    <tr>
                        <td>Brick wall </td>
                        <td>25</td>
                    </tr> 
                    <tr>
                        <td>Concrete Block Wall </td>
                        <td>10</td>
                    </tr> 
                    <tr>
                        <td>Wood door </td>
                        <td>5</td>
                    </tr> 
                    <tr>
                        <td>Heavy Wood Door </td>
                        <td>15</td>
                    </tr> 
                    <tr>
                        <td>Steel Door </td>
                        <td>20</td>
                    </tr> 
                    <tr>
                        <td>Concrete Ultility Pole </td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>Data Term™ </td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Car body, door </td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Armored Car body </td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>AV-4 Body </td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Engine block</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>Mailbox</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Hydrant </td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <td>Curb</td>
                        <td>25</td>
                    </tr>
                </table>
			</div>
		)
	}

	public renderChoice = () => {
		switch(this.state.section) {
			case ArmorSections.SP:
				return this.renderSP();
			case ArmorSections.HardSoft:
				return this.renderHardSoft();
			case ArmorSections.Layering:
                return this.renderLayering();
            case ArmorSections.Piercing:
                return this.renderPiercing();
			case ArmorSections.Cover:
				return this.renderCover();
		}

		return "";
	}

	public isActive = (selection: ArmorSections) => {
		return this.state.section === selection;
    }

	public render() {
		return (
            <Tabs getContent={this.renderChoice} 
                isActive={this.isActive} 
                sections={ArmorSections} 
                title="Armor:" 
                switchContent={this.setSection}
            />
		);
	}
}

export default FNFFArmor;
