import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
	debugger
	const state = props.store.getState();

	const addPost = () => {
		// props.dispatch();
		props.store.dispatch(addPostActionCreator())

	};

	const onPostChange = (text) => {
		const action = updateNewPostTextActionCreator(text);
		// props.updateNewPostText(text)
		props.store.dispatch(action);

	}

	return (
		<MyPosts 
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newPostText} 
		/>
	)
}

export default MyPostsContainer;