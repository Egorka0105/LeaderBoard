import React from 'react';
import { useAppSelector } from 'core/interfaces/interfaces';
import { nanoid } from 'nanoid';
import clN from './bodyUsersList.module.scss';
import BodyUser from './BodyUser/BodyUser';

function BodyUsersList() {
	const users = useAppSelector(state => state.leaders.usersLeaders[state.leaders.day]);
	return (
		<div className={clN.bodyUsersList}>
			{!!users &&
				users.map((el, i) => {
					return <BodyUser key={nanoid()} name={el.name} score={el.score} listNumber={i} photo={el.photo} />;
				})}
		</div>
	);
}

export default BodyUsersList;
