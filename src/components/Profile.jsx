import React from 'react';

const Profile = () => {
	return (
		<div className='content'>
			<div>
				<img alt="banner" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
			</div>
			<div>
				<img className="ava" alt="avatar" src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" />
			</div>
			<div>
				Posts
				<div>
					New Posts
				</div>
				<div>
					<div>Post1</div>
					<div>Post2</div>
					<div>Post3</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;