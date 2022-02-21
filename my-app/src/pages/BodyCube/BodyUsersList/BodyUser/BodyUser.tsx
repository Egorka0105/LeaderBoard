import React from 'react';
import user from 'assets/images/user.png';
import clN from './bodyUser.module.scss';

function BodyUser() {
	return (
		<div className={clN.bodyUser}>
			<p className={clN.bodyUser__ratingPlace}>1th</p>
			<img src={user} className={clN.bodyUser__photo} alt="user logo" />
			<p className={clN.bodyUser__score}>0</p>
			<p className={clN.bodyUser__name}>name</p>
			<p className={clN.bodyUser__ratingChange}>status</p>
			<button type="button" className={clN.bodyUser__edit}>
				editScore
			</button>
		</div>
	);
}

export default BodyUser;
