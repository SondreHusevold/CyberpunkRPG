import React, { Component } from 'react';
import styles from './FNFFArmor.module.css';
import pictureAnimations from '../StyleModules/Pictures.module.css';
import tabbedpanel from '../StyleModules/TabbedPanel.module.css';

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
            
                <div>
                    <div className={styles.ArmorTable}>
                        <div className={styles.HeavyArmor}>
                            <h4>Hard armor:</h4>
                            <p>Metal Gear</p>
                            <p>Police riot armor</p>
                            <p>Door Gunner’s vest</p>
                            <p>Steel helmet</p>
                            <p>Flak vest/pants</p>
                            <p>Ballistic Nylon helmet</p>
                            <p>M-78 RPA heavy vest </p>
                            <p>Corp Mil body armor</p>
                            <p>C-Ballistic Light Mesh™</p>
                        </div>
                        <div className={styles.LightArmor}>
                            <h4>Soft armor:</h4>
                            <p>Heavy Armor jacket </p>
                            <p>Med. Armor jacket </p>
                            <p>Police patrol armor </p>
                            <p>M-78 RPA jacket </p>
                            <p>Light Armor jacket </p>
                            <p>Kevlar T-shirt/vest </p>
                            <p>M-78 RPA T-shirt </p>
                            <p>Heavy Leather </p>
                            <p>SkinTight™ armor padding</p>
                        </div>
                    </div>
                </div>
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
                <p>They don't cause as much damage as a standard lead or hollow point round (1/2 norma! damage), but they cut through armor like a hot knife through cheese. As a result, whenever AP rounds are encountered, armor will have one half it's total SP value.</p>
                <p>For example, say a 5.56 AP round causes 30 points of damage. It hits SP 10 armor, which reduces it by 5 (10/2=5).</p>
                <p>The remaining 25 points are further reduced to 12 (25/2=12.5, rounded downto 12), based on an AP round's lower damage capacity.</p>
                <p>The same is true of knives, swords and other edged weapons. Note that armors marked with a check (✓) on the Armor Table are at half SP effectiveness against edged weapons.</p>
                <p>The smart solution in a combat situation is to rely on the lightest armor you think you can get away with unless you're planning to take on a stationary position or go up against very heavy firepower.</p>
                <h2>Staged Penetration:</h2>
                <p>Armor doesn't just keep absorbing damage indefinitely. One option is to use the concept of Staged Penetration.</p>
                <p>Each time the armor is struck by a pentrating attack (i.e., an attack that actually exceeds the armor's SP), it's SP is reduced by 1 point. When the SP reaches 0, the armor will no longer stop damage.</p>
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
                        <img className={styles.CoverImage + " " + pictureAnimations.InterlacedPicture} alt="Covering yourself up prevents bullets to the face." src="assets/Visuals/FNFFCover.png" />
                    </div>
                </div>
                <div>
                    <div className={styles.ArmorTable}>
                        <div className={styles.HeavyArmor}>
                            <h4>Common Cover</h4>
                            <p>Sheetrock Wall </p>
                            <p>Stone Wall </p>
                            <p>Large Tree, Phone pole </p>
                            <p>Brick wall </p>
                            <p>Concrete Block Wall </p>
                            <p>Wood door </p>
                            <p>Heavy Wood Door </p>
                            <p>Steel Door </p>
                            <p>Concrete Ultility Pole </p>
                            <p>Data Term™ </p>
                            <p>Car body, door </p>
                            <p>Armored Car body </p>
                            <p>AV-4 Body </p>
                            <p>Engine block</p>
                            <p>Mailbox</p>
                            <p>Hydrant </p>
                            <p>Curb</p>
                        </div>
                        <div className={styles.LightArmor}>
                            <h4>SPs</h4>
                            <p>5</p>
                            <p>30</p>
                            <p>30</p>
                            <p>25</p>
                            <p>10</p>
                            <p>5</p>
                            <p>15</p>
                            <p>20</p>
                            <p>35</p>
                            <p>25</p>
                            <p>10</p>
                            <p>40</p>
                            <p>40</p>
                            <p>35</p>
                            <p>25</p>
                            <p>35</p>
                            <p>25</p>
                        </div>
                    </div>
                </div>
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
			<div className={tabbedpanel.FiveTabs}>
				<h1 className={tabbedpanel.Title}>Armor:</h1>
				{
					Object.values(ArmorSections).map((section: ArmorSections) => {
						return (
							<span key={section}
								className={ tabbedpanel.NavLink + " " + (this.isActive(section) ? tabbedpanel.ActiveNav : tabbedpanel.NotActiveNav)} 
								onClick={() => {this.setSection(section)}}
							>{section}</span>
						)
					}) 
				}
				<div className={tabbedpanel.Content}>
					{this.renderChoice()}
				</div>
			</div>
		);
	}
}

export default FNFFArmor;
