import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	const newPostElementRef = React.createRef();

	const addPost = () => { 
		props.addPost();
		
	};
	
	const onPostChange = () => {
		let text = newPostElementRef.current.value;
		props.updateNewPostText(text)
		
	} 

	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	return (
		<div className={classes.posts_block}>
			<h3>Posts</h3>

			<div>
				New Posts
				</div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElementRef} value = {props.newPostText}></textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={classes.post}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;