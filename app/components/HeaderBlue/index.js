import React, { Component } from 'react';
import styles from './header';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
    		<Link to="/"><img className={styles.logo} src={require('../../img/blue-logo.png')}  /></Link>
    			<div className={styles.navigationBar}>
      			<ul>
      			  <li>
	      			  <Link to="contact">
	      			  	Contact
	      			  </Link>
      			  </li>
      			  <li>
	      			  <Link to="about">
	      			  	Learn More
	      			  </Link>
      			  </li>
      			</ul>
    			</div>
      </header>	
    );
  }
}
