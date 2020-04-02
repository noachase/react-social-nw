import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	const newPostElementRef = React.createRef();

	const addPost = () => {
		// props.dispatch();
		props.dispatch({type:'ADD-POST'})

	};

	const onPostChange = () => {
		let text = newPostElementRef.current.value;
		const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
		// props.updateNewPostText(text)
		props.dispatch(action)

	}

	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />).reverse()

	return (
		<div className={classes.posts_block}>
			{/* <h3>Посты</h3> */}

			<div className={classes.myposts}> <h1>Новые посты</h1></div>
			<div>
				<div>
					<textarea rows="4" cols="40" onChange={onPostChange} ref={newPostElementRef} value={props.newPostText}></textarea>
				</div>
				<div>
					<button className={classes.addPostBtn} onClick={addPost}>Add post</button>
				</div>

			</div>
			<div className={classes.post}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;