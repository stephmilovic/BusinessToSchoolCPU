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
		      <Link to={"posts/" + key}>
		        <strong className={styles.schoolName}>{post.school_name}</strong>
		      </Link>
          <li className={styles.postInfo}>{post.school_info}</li>
          <div className={styles.days}>
          <span className={styles.daysSince}>23</span>
          <span className={styles.daysSinceText}>Days Since Order</span>
          </div>
          <button className={"btn btn-success " + styles.helpButton} >Help Them</button>
          <ul>
          <li className={styles.listItems}>{post.pcs} Desktops</li>
          <li className={styles.listItems}>{post.laptops} Laptops</li>
          <li className={styles.listItems}>{post.tablets} Tablets</li>
          </ul>
          
		    </li>
		  );
  	}
  	return schools;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right ">
          <Link to="/posts/new" className={"btn btn-primary " + styles.addPost}>
            Add a Post
          </Link>
        </div>
        <h3 className={styles.postTitle}>Posts</h3>
        <ul className={'list-group ' + styles.listGroup}>
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