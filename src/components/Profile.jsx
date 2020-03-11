import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img alt="banner" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
			</div>
			<div>
				<img className={classes.ava} alt="avatar" src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" />
			</div>
			<div >
				Posts
				<div>
					New Posts
				</div>
				<div className={classes.post}>
					<div className={classes.item}>Post1</div>
					<div className={classes.item}>Post2</div>
					<div className={classes.item}>Post3</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;