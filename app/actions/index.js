import Firebase from 'firebase';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const FB_URL = 'https://hacakthon-fb.firebaseio.com/';
const Posts = new Firebase(`${FB_URL}/posts`);

export function fetchPosts() {
	return dispatch => {
		Posts.on('value', snapshot => {
			dispatch({
				type: FETCH_POSTS,
				payload: snapshot.val()
			});
		});
	};
}

export function createPost(post) {
	return dispatch => Posts.push(post);
}

export function deletePost(key) {
	return dispatch => Posts.child(key).remove();
}
