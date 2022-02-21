import React, { FC } from 'react';
import { ReactComponent as ReactLogo } from 'assets/images/topIcon.svg';
import clN from './headCube.module.scss';
import TopUsersList from './TopUsers/TopUsersList';
import { useAppSelector } from '../../core/services/services';

// eslint-disable-next-line react/function-component-definition
const HeadCube: FC = () => {
	const y = useAppSelector(state => {
		// eslint-disable-next-line no-unused-expressions
		state.leaders.usersLeaders;
	});

	console.log(y);

	return (
		<div className={clN.headCube}>
			<div className={clN.headCube__contentDiv}>
				<h2 className={clN.tittle}>All time Highest Scorers</h2>
				<TopUsersList />
			</div>
			<ReactLogo width="300" height="200" className={clN.headCube__logo} />
		</div>
	);
};

export default HeadCube;
