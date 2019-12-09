import React, { Component } from 'react';
import styles from './NightCity.module.css';
import { Slang, SlangService } from '../Services/SlangService';

interface NightCitySlangState {
    slang: Slang[];
}

class NightCitySlang extends Component<{}, NightCitySlangState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            slang: []
        };

        this.getSlang();
    }

    public async getSlang() {
        this.setState({
            slang: await SlangService.getSlang()
        });
    }

	public render() {
		return (
            <div>
                <div className={styles.NightCityIntroductionText}>
					<h1>Slang and terms:</h1>
                    <p>Let's chat, choomba. It's a large world out there, and you need to know the lingo. You can't take your input or local Call-girl to the ripperdoc when you are nearly out of eddies and a fodder is waiting to flatline you.</p>
                </div>
                <div className={styles.SlangSplit}>
                    {this.state.slang.map((slang) => {
                        return (
                            <div key={slang.name}>
                                <h3>{slang.name}</h3>
                                <p>{slang.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
		);
	}
}

export default NightCitySlang;
