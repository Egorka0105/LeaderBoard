import React, { FC } from 'react';
import { IUser } from 'core/interfaces/interfaces';
import clN from './bodyUsersList.module.scss';
import BodyUser from './BodyUser/BodyUser';

interface IProps {
	day: number;
	users: IUser[][];
}

const BodyUsersList: FC<IProps> = ({ day, users }) => {
	return (
		<div className={clN.bodyUsersList}>
			{!!users[day] &&
				users[day].map((el, i) => {
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
