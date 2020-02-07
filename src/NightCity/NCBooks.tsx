import React, { Component } from 'react';
import styles from './NightCity.module.css';
import FadeInPicture from '../Common/FadeInPicture';
import animations from '../StyleModules/Animations.module.css';

class NightCityBooks extends Component<{}> {

    public openDriveThru = () => {
        window.open("https://www.drivethrurpg.com/browse.php?keywords=Cyberpunk+2020", "_blank"); 
    }

    public openTheTrove = () => {
        window.open("https://thetrove.net/Books/Cyberpunk/Cyberpunk%202020/", "_blank"); 
    }

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>The Books:</h1>
					<FadeInPicture mobile="100% 20%" title="Books" alt="The books." src="/CyberpunkRPG/assets/Visuals/Books.webp"/>
					<p>Cyberpunk 2020 has a multitude of books that are published by both first and third parties. The Core Rulebook being the most important of them all.</p>
                    <p>They can all be purchased at {"<"}<u className={styles.ClickableLink} onClick={this.openDriveThru}>DriveThruRPG</u>{">"}. 
                        All of these are also available for "free" download at {"<"}<u className={styles.ClickableLink} onClick={this.openTheTrove}>The Trove</u>{">"}.
                    </p>
                    <p>Here are some of the best Cyberpunk 2020 books available:</p>
                    <hr/>
                    <h3>Cyberpunk 2020 - Core Rulebook</h3>
                    <p>The core rulebook is filled to the brim with everything you need to play. Most of the information on this site is taken directly from this book.</p>
                    <p>It also has a bunch of lore on Night City and its inhabitants. A bunch of modules are also ready for use, the biggest and most important lore wise being "Never Fade Away".</p>
                    <p>The Cyberpunk 2020 rulebook will also be included as a free PDF with the purchase of Cyberpunk 2077.</p>
                    <hr/>
                    <h3>Night City Sourcebook</h3>
                    <p>The Night City Sourcebook has massive amounts of flair and is focused around Night City.</p>
                    <p>Full maps of the entire city are contained inside and every single building is described in detail. It also has information about people living in Night City and the different social classes.</p>
                    <p>This book is highly recommended if you need to get around Night City and its people or simply need to check out where the local club is.</p>
                    <hr/>
                    <h3>The Chromebooks</h3>
                    <p>Chromebooks 1-4 are like shopping magazines for cyberware, gear and fashion.</p>
                    <p>Want to know about the latest and greatest in cyberoptics or some clothing inspiration? 
                        Check out the Chromebooks, as a lot of weapons, cyberware and bioware are only in these books.
                    </p>
                    <hr/>
                    <h3>Blackhand's Street Weapons</h3>
                    <p>Also known as the big book of guns. It is a shopping magazine just like the Chromebooks and contains weapons from A-Z with pictures, prices and requirements for use.</p>
                    <p>It has over 250 weapons compiled into a single book, everything from common as dirt pistols to the most exotic laser guns.</p>
                    <hr/>
                    <h3>Home of the Brave</h3>
                    <p>This is a book that contains even further information about the state of America in the year 2020.</p>
                    <p>It goes into great detail about The Collapse, the aftermath and the new America that rose in its place. It also explains the American government and how it operates.</p>
                    <p>Fantastic book if you want to know more about nomads or what life is outside of Night City or other metropolitan cities.</p>
                    <hr/>
                    <h3>Listen Up You Primitive Screwheads!!!!</h3>
                    <p>This is a referee book which contains tips and tricks for newer referees.</p>
                    <p>It also contains some revised rules that Mike Pondsmith and other players house rule in their games.</p>
				</div>
				<div className={styles.NightCityIntroductionPicture}>
					<FadeInPicture title="Care to read, choomba?" alt="Care to read, choomba?" src="/CyberpunkRPG/assets/Visuals/Books.webp"/>					
				</div>
			</div>
		);
	}
}

export default NightCityBooks;
