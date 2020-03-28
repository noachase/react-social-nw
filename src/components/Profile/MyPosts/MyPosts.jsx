import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	const newPostElement = React.createRef();

	const addPost = () => { 
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	};

	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	return (
		<div className={classes.posts_block}>
			<h3>Posts</h3>

			<div>
				New Posts
				</div>
			<div>
				<textarea onInput={()=>{console.log('input')}} ref={newPostElement}></textarea>
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