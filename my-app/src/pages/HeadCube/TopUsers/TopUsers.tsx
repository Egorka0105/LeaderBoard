import React, { FC } from 'react';
import { useAppSelector } from 'core/interfaces/interfaces';
import TopUser from './TopUser/TopUser';
import clN from './topUsers.module.scss';

const TopUsers: FC = () => {
	const topLeaders = useAppSelector(state => state.leaders.topUsers);

	return (
		<div className={clN.topUsers}>
			{topLeaders.map(el => {
				return <TopUser key={el.id} name={el.name} photo={el.photo} score={el.score} />;
			})}
		</div>
	);
};

export default TopUsers;
