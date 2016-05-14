import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import { Link } from 'react-router';
import styles from './posts-index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
//school_name, contact_name, contact_email, contact_phone, school_address, school_zip, school_info
  renderPosts() {
  	let schools = [];
  	for (let key in this.props.posts) {
  		let post = this.props.posts[key];
		  schools.push(
		    <li className={'list-group-items ' + styles.listGroupItem} key={key}>
		      <h2><strong className={styles.schoolName}>{post.school_name}</strong></h2>
          <li className={styles.postInfo}>{post.school_info}</li>
          <div className={styles.days}>
          <span className={styles.daysSince}>{post.days}</span>
          <span className={styles.daysSinceText}>Days Since Order</span>
          </div>
          <button type="submit" className={'btn ' + styles.submitBtn + ' ' + styles.helpButton}>Help This School</button>
          <ul>
	          <li className={styles.listItems}><strong>{post.pcs}</strong> Desktops</li>
	          <li className={styles.listItems}><strong>{post.laptops}</strong> Laptops</li>
	          <li className={styles.listItems}><strong>{post.tablets}</strong> Tablets</li>
          </ul>
          
		    </li>
		  );
  	}
  	return schools;
  }

  render() {
    return (
      <div className={styles.listGroup}>
        <h3 className={styles.postTitle}>Schools in Need</h3>
        <ul className={'list-group '}>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);