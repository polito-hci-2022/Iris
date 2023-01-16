import React from 'react';
import { Container } from 'react';

export default class Score extends React.Component {
	
	render() {
		return (
			<Container style={score_container}>
				<h1 style={score}>{this.props.score}</h1>
			</Container>
		);
	}

}


const score_container = {
		flex: 1,
		alignItems: 'center',
		padding: 10
	}
const score = {
		fontSize: 40,
		fontWeight: 'bold'
	}
