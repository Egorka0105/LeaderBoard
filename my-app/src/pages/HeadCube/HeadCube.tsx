import React, { FC } from 'react';
import { ReactComponent as ReactLogo } from 'assets/images/topIcon.svg';
import clN from './headCube.module.scss';
import TopUsers from './TopUsers/TopUsers';

const HeadCube: FC = () => {
	return (
		<div className={clN.headCube}>
			<div className={clN.headCube__contentDiv}>
				<h2 className={clN.tittle}>All time Highest Scorers</h2>
				<TopUsers />
			</div>
			<ReactLogo width="300" height="200" className={clN.headCube__logo} />
		</div>
	);
};

export default HeadCube;
