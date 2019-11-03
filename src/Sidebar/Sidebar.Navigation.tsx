import React, { Component } from 'react';
import styles from "./Sidebar.module.css";

interface ISidebarProps {
    choices: string[];
    clicked: (chosen: string) => void;
    preDetermined: string;
}

interface ISidebarState {
    chosen: string;
}

class Sidebar extends Component<ISidebarProps, ISidebarState> {

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

	public render() {
		return (
            <div className={styles.SidebarMenu}>
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