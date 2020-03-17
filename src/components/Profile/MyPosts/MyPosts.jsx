import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{ id: '1', message: 'molodec', likesCount: 12 },
		{ id: '2', message: 'I will learn React !', likesCount: 2 },
		{ id: '3', message: 'Bodya molodec', likesCount: 112 },
		{ id: '4', message: 'Vladik molodec', likesCount: 1 },
		{ id: '5', message: 'Serega molodec', likesCount: 12 },
		{ id: '6', message: 'Olya molodec', likesCount: 12 }
	]

	let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

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