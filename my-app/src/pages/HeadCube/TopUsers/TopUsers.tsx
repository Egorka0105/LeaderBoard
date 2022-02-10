import React, { FC } from 'react';
import User from './User/User';
import clN from './topUsers.module.scss';

// eslint-disable-next-line react/function-component-definition
const TopUsers: FC = () => {
	return (
		<div className={clN.topUsers}>
			<User />
			<User />
			<User />
			<User />
		</div>
	);
};

export default TopUsers;
