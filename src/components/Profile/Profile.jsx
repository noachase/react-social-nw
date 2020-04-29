import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
// debugger
	return (
		<div>
			<ProfileInfo />

			<MyPostsContainer 
				// posts={props.profilePage.posts}
				// newPostText={props.profilePage.newPostText}
				// dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile;