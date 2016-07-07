import React, { Component } from 'react';
import styles from './about';

export default class About extends Component {
	render() {
		return (
			<div className={'container ' + styles.about}>
				<h1>Get In Touch</h1> 
				<p>info@email.com</p> 
			</div>
		);
	}
}
