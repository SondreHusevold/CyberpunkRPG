import React, { Component } from 'react'
import styles from './ClassSpecialAbility.module.css'
import { ClassDetailedInformation } from './Classes';

interface ClassSpecialAbilityProps {
    characterInformation: ClassDetailedInformation;
}

export class ClassSpecialAbility extends Component<ClassSpecialAbilityProps, {}> {

    // Splits all newlines from the json into paragraphs.
    public splitNewlines = (information: string) => {
		let splitQuote = information.split("\n");
		return splitQuote.map((item, i) => {
			return <span key={i}>{item}</span>
		})
    }

    public render() {
        return (
            <div className={styles.ClassSkillWrapper}>
                {this.props.characterInformation.specialAbility.map((val, index) => {
                    return (
                        <div key={index}>
                            <h2>{val.name}</h2>
                            <p className={styles.Description}>{this.splitNewlines(val.description)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}