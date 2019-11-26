import React, { PureComponent } from 'react';
import styles from "./Sidebar.module.css";

interface ISidebarProps {
    choices: string[];
    clicked: (chosen: string) => void;
    toggleMobile: () => void;
    showMobile: boolean;
    preDetermined: string;
}

interface ISidebarState {
    chosen: string;
}

class Sidebar extends PureComponent<ISidebarProps, ISidebarState> {

    public constructor(props: ISidebarProps) {
        super(props);

        this.state = {
            chosen: this.props.preDetermined
        }
    }

    // CSS
    public IsTheActiveMenu = (myChoice: string) => {
		if(this.state.chosen != null && myChoice === this.state.chosen) {
			return styles.SidebarButtonActive;
		}
		return "";
    }
    
    public changeSelected = (myChoice: string) => {
        this.setState({
            chosen: myChoice
        });

        this.props.clicked(myChoice);
    }

    public changeToMobile = () => {
        if(!this.props.showMobile) 
            return styles.MobileHidden;
        return styles.MobileShown;
    }

	public render() {
		return (
            <div className={this.changeToMobile()}>
                <div className={styles.MobileReturnButton}>
                    <button className={styles.SidebarButton} onClick={this.props.toggleMobile}>> RETURN</button>
                    <hr/>
                </div>
                { 
                    this.props.choices.map((sector) => 
                        <button key={sector} className={styles.SidebarButton + " " + this.IsTheActiveMenu(sector)} 
                            onClick={() => { this.changeSelected(sector)} }>
                            {sector}
                        </button> 
                    )
                }
            </div>
		);
	}
}

export default Sidebar;