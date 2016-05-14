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
		    <li className="list-group-item" key={key}>
		      <Link to={"posts/" + key}>
		        <strong className={styles.schoolName}>{post.school_name}</strong>
		      </Link>
          <li>{post.school_info}</li>
          <div className={styles.days}>
          <span className={styles.daysSince}>23</span>
          <span className={styles.daysSinceText}>Days Since Order</span>
          </div>
          <ul>
          <li className="list-items">Five PCs</li>
          <li className="list-items">Seven Laptops</li>
          <li className="list-items">Five Monitors</li>
          <li className="list-items">6 Keyboards</li>
          </ul>

		    </li>
		  );
  	}
  	return schools;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
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