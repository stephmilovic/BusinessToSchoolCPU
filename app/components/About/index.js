import React, { Component } from 'react';
import styles from './about';

export default class About extends Component {
	render() {
		return (
			<div className={'container ' + styles.about}>
				<h1>Who We Are</h1> 
				<p>Many businesses have unwanted hardware, like old desktop computers, that are often discarded and thrown away into our landfills.
				 Meanwhile, many Chicago Public Schools’ studnts are falling behind in STEM studies because they lack access to technology.</p>
				 <p>CPU to EDU is a resource that allows businesses to donate their unwanted materials to Chicago students in need.</p> 
				 <p> Haphazardly thown together during Cleverbridge's Hack to the Future Hackathon, our goal is to provide the resources to help students extend learning in the classroom and beyond.</p> 
			</div>
		);
	}
}
