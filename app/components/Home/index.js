import React, { Component } from 'react';
import styles from './home';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.home}>
      	<div className={styles.business}>
      		<h2>Businesses</h2>
      		<p>See who needs help in your area</p>
      		<Link to="/posts" className={'btn ' + styles.lineButton}>
      		  Get Started!
      		</Link>
	      </div>
	      <div className={styles.school}>
      		<h2>Schools</h2>
      		<p>Post your technology needs</p>
      		<Link to="/posts/new" className={'btn ' + styles.lineButton}>
      		  Get Started!
      		</Link>
	      </div>
      </div>
    );
  }
}
