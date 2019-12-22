import React, { Component } from 'react';
import styles from './NightCity.module.css';
import FadeInPicture from '../Common/FadeInPicture';
import animations from '../StyleModules/Animations.module.css';

class NightCityAmerica extends Component<{}> {

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityIntroduction}>
				<div className={styles.NightCityIntroductionText}>
					<h1>America in 2020:</h1>
					<FadeInPicture mobile="100% 30%" title="Map of the US" alt="Map of the United States." src="/CyberpunkRPG/assets/Visuals/MapOfUS.webp"/>
					<p>If you listen to the Euro-trash, the United States is a seething hellhole of drug addicts, psychopathic killers and wandering homeless packs armed to the teeth.</p>
					<p>If you listen to the corporate-controlled media, it's a place of "new challenges and exciting beginnings.</p>
					<p>If you listen to the punk on the Street, it's neither one, but a mix of both.</p>
					
					<h3>The Collapse:</h3>
					<p>Total economic, social, and political breakdown began with the Crash of '94 and resulted in the disintegration of American society and its standing as a world superpower.</p>
					<p>The subsequent years would come to be known as the Collapse, and would see the deaths of roughly 100,000,000 people as a result of plagues, mutated viruses, terrorist nuclear attacks and complete ecological collapse.</p>
					<p>The disintegration of NATO and the hardline foreign policy pursued by the "Gang of Four" isoated the United States politically and economically; with trade wars increasing the suffering of the American people.</p>
					
					<h3>The Environment:</h3>
					<p> During the last thirty years, a series of ecological disasters has taken the greatest toll on the United State's infrastructure.</p>
					<p>Global warming has melted much of the polar icecaps, resulting in higher sea level. Large parts of the East Coastand the South are now underwater or partially swampland; New Orleans is on stilts and Houston has an alligator population.</p>
					<p>Rising temperatures have thawed out much of southem Alaska, central Canada and the upper U.S.;</p>
					
					<h3>The Government:</h3>
					<p>The United States is pretty much a nation in name only. Of its three branches, the Executive Branch is the only effective part of the Federal Government: it controls the military. </p>
					<p>The Executive Branch is governed by a host of advisors and appointed agency heads; for the last three Administrations, the President has been chosen in a backroom. </p>
					<p>It doesn’t matter, only 12.6% of the U.S. population bothers to vote any more, and that's only in the states that are still part of the Union. Both of the Californias, Texas, Utah, Alaska and Nevada have become what are called Free States.</p>
					<p>They pretty much set their own rules and write their own laws while giving lip service to the idea of a United States (as long as the honchos in Washington don't try to tell them what to do).</p>
					
					<h3>The Cities:</h3>
					<p>Good News: Most American cities survived the Collapse. Bad News: Most unincorporated or non-urban areas were obliterated. </p>
					<p>The key was inertia. No matter how many problems (economic, social, whatever) a big city had, it had far more resources than a small town. </p>
					<p>The road back from the Collapse has been a long one, filled with famine, plague, violence and destruction. It hasn’t been pretty. But it is getting better. </p>
					<p>No matter what the Euro-media tells you. Even Detroit (voted the Most Dangerous Cityof 2019 by NET 54's YOU DECIDE! poll), has a few nice areas.</p>
					
					<h3>The Wrapup:</h3>
					<p>So much for an overview of the American scene today. But face it, this only describes the America you get from a fast holo shot taken out the window of a speeding AV. It doesn’t give you a slice into the minds of the people themselves, just the environment they live in.</p>
					<p>For that, you'll need to get down on the Street and meet a few. The invitation’s open. Don’t take the word of the Europress on it. Go on out there and meet the real America today; the people you live with.</p>
					<p>Get to know them. Its a tough world out there, and you oughta know the neighbors.</p>
					<h3>Referee note: Check out the Night City sourcebook if you want to learn more about Night City.</h3>
				</div>
				<div className={styles.NightCityIntroductionPicture}>
					<FadeInPicture title="Map of the US" alt="Map of the United States." src="/CyberpunkRPG/assets/Visuals/MapOfUS.webp"/>					
				</div>
			</div>
		);
	}
}

export default NightCityAmerica;
