import React, { FC } from 'react';
import clN from './bodyCube.module.scss';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import BodyUsersList from './BodyUsersList/BodyUsersList';
import { useAppSelector } from '../../core/interfaces/interfaces';

const BodyCube: FC = () => {
	const allUsers = useAppSelector(state => state.leaders);

	return (
		<div className={clN.bodyCube}>
			<ButtonsBlock day={allUsers.day} users={allUsers.usersLeaders} />
			<BodyUsersList />
		</div>
	);
};

export default BodyCube;
