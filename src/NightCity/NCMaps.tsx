import React, { Component } from 'react';
import styles from './NCMaps.module.css';
import animations from '../StyleModules/Animations.module.css';
import FadeInPicture from '../Common/FadeInPicture';


class NightCityMaps extends Component<{}> {

    public openMapInNewWindow = () => {
        window.open("assets/Visuals/MapBlackBG.webp", "_blank"); 
    }

	public render() {
		return (
			<div className={animations.FadeInFast + " " + styles.NightCityMaps}>
                <h1>Map of Night City:</h1>
                <p>Night City is large and you need a way to get around. Your local DataTerm has maps of course, or maybe you have cyberware for that.</p>
                <p>In any case a map is necessary, old fashioned way or digitally.</p>
                <p>It should be mentioned that this is the map of Night City in 2020. Cyberpunk 2077's map is significantly altered being 57 years in the future and being non-canonly nuked in 2023 during the fourth corporate war.</p>
                <p>The <i>Night City Sourcebook</i> has <u>a lot</u> of places to visit with fully detailed maps of each section of the city and <u>every</u> building is described in detail.</p>
                <p>Please take a look for a even more detailed look at each section of the city.</p>
                <div className={styles.MapPicture} onClick={this.openMapInNewWindow} >
                    <FadeInPicture alt="Map of Night City" title="Map of Night City" src="/assets/Visuals/MapLowRes.webp" />
                </div>
			</div>
		);
	}
}

export default NightCityMaps;
