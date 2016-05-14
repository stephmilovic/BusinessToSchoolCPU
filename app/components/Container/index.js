import React, { Component } from 'react';
import styles from './container';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.contain}>
	      <header className={styles.header}>
	      		<img className={styles.logo} src={require('../../img/CPU-EDU-WHITE.png')}  />
	      			<div className={styles.navigationBar}>
		      			<ul>
		      			  <li><a href="#contact">Contact</a></li>
		      			  <li><a class="active" href="#home">Learn More</a></li>
		      			</ul>
	      			</div>
	      </header>	
	      <div className={styles.layout}>
	      	{this.props.children}
	      </div>
	      <footer className={styles.footer}>
	      	<div className={styles.footerLeft}>
		      	<img className={styles.arrow} src={require('../../img/arrow.png')}  />
		      	<p>Copyright CPU to EDU</p>
		      	<p>Created during <a href="https://hacktothefuture.splashthat.com" target="_blank">Hack to the Future Hackathon</a></p>
	      	</div>
	      	<div className={styles.footerRight}>
	      		<img className={styles.cb} src={require('../../img/cb-logo-white.png')}  />
	      	</div>
	     	</footer>
      </div>
    );
  }
}
