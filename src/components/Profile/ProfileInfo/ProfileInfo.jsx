import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return (
		<div>
			{/* <div>
				<img alt="banner" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
			</div> */}
			<div className={classes.description_block}>
				<img className={classes.ava} alt="avatar" src="https://t3.ftcdn.net/jpg/02/07/81/58/500_F_207815811_sd457h9jJdOz9Xy0UOmvosVpi4Va2BSk.jpg" />
			
			</div>
			<h3>Eugene Markelov</h3>
			
		</div>
	)
}

export default ProfileInfo;