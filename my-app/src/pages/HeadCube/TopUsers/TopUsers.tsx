import React, { FC } from 'react';
import { useAppSelector } from 'core/interfaces/interfaces';
import { nanoid } from 'nanoid';
import TopUser from './TopUser/TopUser';
import clN from './topUsers.module.scss';

// eslint-disable-next-line react/function-component-definition
const TopUsers: FC = () => {
	const topLeaders = useAppSelector(state => state.leaders.topUsers);

	return (
		<div className={clN.topUsers}>
			{topLeaders.map(el => {
				return <TopUser key={nanoid()} name={el.name} photo={el.photo} score={el.score} />;
			})}
		</div>
	);
};

export default TopUsers;
