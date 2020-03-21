import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	

	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	return (
		<div className={classes.posts_block}>
			<h3>Posts</h3>

			<div>
				New Posts
				</div>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>Add post</button>
			</div>
			<div className={classes.post}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;