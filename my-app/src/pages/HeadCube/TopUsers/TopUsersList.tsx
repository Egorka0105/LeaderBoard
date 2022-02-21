import React, { FC } from 'react';
import TopUser from './User/TopUser';
import clN from './topUsersList.module.scss';

// eslint-disable-next-line react/function-component-definition
const TopUsersList: FC = () => {
	return (
		<div className={clN.topUsers}>
			<TopUser />
			<TopUser />
			<TopUser />
			<TopUser />
		</div>
	);
};

export default TopUsersList;
