import React, { Component } from 'react';
import styles from './NCMaps.module.css';

class NightCityMaps extends Component<{}> {

    public openMapInNewWindow = () => {
        window.open("assets/Visuals/MapBlackBG.jpg", "_blank"); 
    }

	public render() {
		return (
			<div className={styles.NightCityMaps}>
                <h1>Map of Night City:</h1>
                <p>Night City is large and you need a way to get around. Your local DataTerm has maps of course, or maybe you have cyberware for that.</p>
                <p>In any case a map is necessary, old fashioned way or digitally.</p>
                <p>The <i>Night City Sourcebook</i> has <u>a lot</u> of places to visit with fully detailed maps of each section of the city and <u>every</u> building is described in detail.</p>
                <p>Please take a look for a even more detailed look at each section of the city.</p>
                <img alt="Map of Night City" src="assets/Visuals/Map.png" onClick={this.openMapInNewWindow} className={styles.MapPicture}/>
			</div>
		);
	}
}

export default NightCityMaps;
