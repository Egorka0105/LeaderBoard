import React, { FC } from 'react';
import { useAppSelector } from 'core/interfaces/interfaces';
import clN from './bodyUsersList.module.scss';
import BodyUser from './BodyUser/BodyUser';

const BodyUsersList: FC = () => {
	const users = useAppSelector(state => state.leaders.usersLeaders[state.leaders.day]);

	return (
		<div className={clN.bodyUsersList}>
			{!!users &&
				users.map((el, i) => {
					return (
						<BodyUser
							key={el.id}
							name={el.name}
							score={el.score}
							listNumber={i}
							photo={el.photo}
							changePosition={el.changePosition}
						/>
					);
				})}
		</div>
	);
};

export default BodyUsersList;
