import React, { FC } from 'react';
import clN from './bodyCube.module.scss';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import BodyUsersList from './BodyUsersList/BodyUsersList';

const BodyCube: FC = () => {
	return (
		<div className={clN.bodyCube}>
			<ButtonsBlock />
			<BodyUsersList />
		</div>
	);
};

export default BodyCube;
