import React from 'react';
import user from 'assets/images/user.png';
import clN from './user.module.scss';

function User() {
	return (
		<div className={clN.topUser}>
			<div className={clN.imgDiv}>
				<img src={user} alt="user pict" className={clN.imgDiv__photo} />
				<p className={clN.imgDiv__score}>10</p>
			</div>
			<h4 className={clN.topUser__name}>name</h4>
		</div>
	);
}

export default User;
