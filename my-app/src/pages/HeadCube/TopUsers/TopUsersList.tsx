import React, { FC, useEffect } from 'react';
import TopUser from './User/TopUser';
import clN from './topUsersList.module.scss';
import { useAppSelector } from '../../../core/services/services';

// eslint-disable-next-line react/function-component-definition
const TopUsersList: FC = () => {
	const topLeaders = useAppSelector(state => state.leaders.usersLeaders);
	useEffect(() => {}, [topLeaders]);

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
