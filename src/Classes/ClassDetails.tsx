import React, { Component } from 'react';
import styles from './ClassDetails.module.css';
import { CharacterClass } from './Classes';

interface ClassDetailsProps {
	characterClass: CharacterClass;
} 

class ClassDetails extends Component<ClassDetailsProps, {}> {

	public constructor(props: ClassDetailsProps) {
		super(props);
	}

	public render() {
		return (
			<div>
				<h1>{this.props.characterClass.name}:</h1>
				<div className={styles.ClassDetails}>
					<h2>Details!</h2>
				</div>
			</div>
		);
	}
}

export default ClassDetails;
