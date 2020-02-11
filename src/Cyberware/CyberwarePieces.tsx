import React, { Component } from 'react';
import styles from './CyberSurgery.module.css';
import animations from '../StyleModules/Animations.module.css';
import pictureAnimation from '../StyleModules/Pictures.module.css';
import FadeInPicture from '../Common/FadeInPicture';

class CyberPieces extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.SurgeryMain}>
				<div>
					<h1>Pieces of Cyberware:</h1>
                    <img className={pictureAnimation.PictureMobileOnly} alt="Buy now!." title="Buy now!." src="/CyberpunkRPG/assets/Visuals/CyberPieces2.webp" />
                    <p>All available Cyberware are described both in the core rulebook (page 76) and Chrome books 1-4. The latter is highly recommended as they contain all kinds of cyberware and also weapons and vehicles.</p>
                    <p>However you might be wondering what kind of Cyberware there is, and here are some examples of cyberware types:</p>
                    
                    <h2>Fashionware:</h2>
                    <p>These are typical hi-tech gadgets. Biomonitors, skinwatches (clocks with LEDs under your skin), Techhair that changes your hair color depending on the weather, light tattoos that glow and more.</p>
                    <img className={pictureAnimation.PictureMobileOnly} alt="Get it today!." title="Get it today!." src="/CyberpunkRPG/assets/Visuals/CyberPieces.webp" />
                    
                    <h2>Neuralware (Processor):</h2>
                    <p>Invisible cyberware that amplifies your existing abilities. Reflex boosters, pain editors, Cybermodem links, smartgun links, interface plugs and so on.</p>
                    <p>There's also cyberchips that you can install. There are two kinds of chipware: APTR (Reflex) chips and MRAM memoryware.</p>
                    
                    <h2>Chipware:</h2>
                    <p>Having chipware is like having instant skills whenever you want them. The problem is, chipware is expensive, and limited to only the lowest levels of a specific skill (from +1 to +3). To progress further, you would have to have a specially designed chip built at a higher level (not an easy proposition).</p>
                    <p>Another problem with chips is that unlike natural skills, you can’t learn to become better. If you're chipped for a Karate of +2, you'll be at that level of skill until you die, no matter how many fights you get into. </p>
                    <p>You also can't combine natural and chipwared skills; for example, combining a chipped Karate of +2 and a natural Karate skill of +5 for a total of +7. The programmed responses of a chip will always override natural responses, setting the user’s level of skill equal to that of the chip.</p>
                    <p>You can only run as many chips as your INT stat simultanously, though you can change it out whenever you want (one turn in combat).</p>
                    
                    <h2>Implants:</h2>
                    <p>These are little things you can get plugged in to make your life easier.</p>
                    <p>Nasal poison filters, gill implants, Mr. Studd™ Sexual Implant, Adrenal Boosters, Audio/Video tape recorders, motion detectors usually go under this category.</p>
                    
                    <h2>Bioware:</h2>
                    <p>Bioware is anything which is primarily low-impact technology that is designed along biological rather than mechanical lines by utilizing nanotechnology.</p>
                    <p>Grafted muscle, bone lace, skinweave (increases your skin's Stopping Power by 6), enhanced antibodies, nanosurgeons etc.</p>
                    
                    <h2>Cyberweapons:</h2>
                    <p>These are usually severely illegal black market cyberware and are hidden killing tools.</p>
                    <p>Getting these usually involve paying a shady fixer deep into the Combat Zone a lot of eurodollars and giving the parts to your local black market ripperdoc.</p>
                    <p>Examples include: Scratchers (metal or carbo-glass fingernails, making them as sharp as razorblades), Vampires (implanted fangs, not black market stuff), Wolvers (wolverine claws), Slice 'N Dice (false fingernail which extends into a monomolecular wire that will cut through almost all organic and plastic.) </p>
                    
                    <h2>Cyberoptics:</h2>
                    <p>A combination of digital processor and camera, cyberoptics are replacements for normal eyes. Cybervision is just like regular vision, only better. Colors are brighter, images sharper. And that's just the start.</p>
                    <p>Want to see life as a 30's black and white movie? No problem. Telescopic or microscopic vision? Optional. Infrared and low light vision? Standard for Solos.</p>
                    
                    <h2>Cyberaudio:</h2>
                    <p>This enhancement affects both ears, and also includes a subvocalizing mike on the mastoid bone. There is no visible change to the outer ear, although some cyberpunks replace the outer ear with a set of mechanical speaker pickups for max effect.</p>
                    <p>Radio links, ECM Scramblers, amplified hearing, voice stress analyzers, sound editing, volume level dampner, and various recorders are typically in this category.</p>
                    <img className={pictureAnimation.PictureMobileOnly} alt="Get it today!." title="Get it today!." src="/CyberpunkRPG/assets/Visuals/CyberPieces4.webp" />
                    
                    <h2>Cyberlimbs:</h2>
                    <p>Still a popular fad in the Cyberpunk future. They are chromed, airbrushed, jeweled, lighted, and even sculpted in the pursuit of true cybertech chic.</p>
                    <p>Under all the designer fashion, the standard cyberlimb is an aluminum and steel basket framework, with artificial myomar plastic muscles controlling motion. The joints are stainless steel.</p>
                    <p>There are many pros of getting a cyberlimb. They never get tired, they don't feel pain and they can dish out incredible amounts of damage.</p>
                    <p>There are many types of cyberlimbs and you can get everything from tool hands, web foots, EMP shielding, hidden holsters, cellular cybermodems and more.</p>
                    
                    <h2>Linear frames:</h2>
                    <p>Exoskeletons. A metal framework with synethic muscles for movement and resemble a suit of contoured metal body armor which is grafted onto your body.</p>
                    <p>You cannot swim with them, you lose a REF point, but you can throw cars and allows you to deadlift 600kg if you want to.</p>
                    <p>These come in Sigma, Beta and Omega versions. Where the lowest one (Sigma) increases your strength to 12 and damage modifiers revolving physical force by +4.</p>
                    
                    <h2>Body plating:</h2>
                    <p>Body plating covers any situation where armored plastics and metals are layered over and directly anchored to the skin.</p>
                    <p>It doesn’t make you any stronger or faster, but it's perfect if you want all over protection all the time—and don't care who knows it.</p>
                    <p>Things like Cowls (covering the skull), torso plates, face plates, or front optic mounts (seen the Maelstrom gang in the Cyberpunk 2077 video game? Yeah, like that.)</p>
				</div>
                <div>
                    <div className={styles.SurgeryImage}>
                        <FadeInPicture alt="Get it today!." title="Get it today!." src="/CyberpunkRPG/assets/Visuals/CyberPieces.webp" />
                    </div>
                    <div className={styles.SurgeryImage}>
                        <FadeInPicture alt="Buy now!." title="Buy now!." src="/CyberpunkRPG/assets/Visuals/CyberPieces2.webp" />
                    </div>
                    <div className={styles.SurgeryImage}>
                        <FadeInPicture alt="Soon out of stock!." title="Soon out of stock!." src="/CyberpunkRPG/assets/Visuals/CyberPieces3.webp" />
                    </div>
                    <div className={styles.SurgeryImage}>
                        <FadeInPicture alt="Can't live without it!" title="Can't live without it!" src="/CyberpunkRPG/assets/Visuals/CyberPieces4.webp" />
                    </div>
                </div>

			</div>
		);
	}
}

export default CyberPieces;
