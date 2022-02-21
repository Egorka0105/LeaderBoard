import React from 'react';
import clN from './bodyCube.module.scss';
import ButtonsBlock from './ButtonsBlock/ButtonsBlock';
import BodyUsersList from './BodyUsersList/BodyUsersList';

function BodyCube() {
	return (
		<div className={clN.bodyCube}>
			<ButtonsBlock />
			<BodyUsersList />
		</div>
	);
}

export default BodyCube;
