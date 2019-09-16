import React, { Component } from 'react'
import { CharacterClass, ClassDetailedInformation } from './Classes';

interface ClassIntroductionProps {
    characterClass: CharacterClass;
    characterInformation: ClassDetailedInformation;
    getGender: (ownership: boolean) => string;
}

interface ClassIntroductionState {
    information: number;
}

export class ClassIntroduction extends Component<ClassIntroductionProps, ClassIntroductionState> {

    constructor(props: ClassIntroductionProps) {
        super(props);
        this.state = {
            information: 0
        }
    }

    componentDidUpdate(nextProps: ClassIntroductionProps, nextState: ClassIntroductionState) {
        if(this.props.characterClass.name !== nextProps.characterClass.name) {
            this.setState({
                information: 1
            });
        }
    }

    // Replaces the genders in the text by replacing <gender> (she/he) and <genderOwn> for ownership (his/her)
    public replaceGender = () => {
        return this.props.characterInformation.intro.replace("<gender>", this.props.getGender(false)).replace("<genderOwn>", this.props.getGender(true));
    }

    // Splits all newlines from the json into paragraphs.
    public splitNewlines = (information: string) => {
		let splitQuote = information.split("\n");
		return splitQuote.map((item, i) => {
			return <p key={i}>{item}</p>
		})
    }
    
    public getInformation = () => {
        return this.splitNewlines(this.replaceGender());
    }

    render() {
        return (
            <div>
                {this.getInformation()}
            </div>
        )
    }
}