import React from 'react';
import BodyUser from './BodyUser/BodyUser';
import clN from './bodyUsersList.module.scss';

function BodyUsersList() {
	return (
		<div className={clN.bodyUsersList}>
			<BodyUser />
			<BodyUser />
			<BodyUser />
			<BodyUser />
			<BodyUser />
		</div>
	);
}

export default BodyUsersList;
