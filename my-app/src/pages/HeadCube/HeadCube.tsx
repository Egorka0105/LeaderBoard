import React, { FC } from 'react';
import logo from 'assets/images/topIcon.svg';
import clN from './headCube.module.scss';
import TopUsers from './TopUsers/TopUsers';

// eslint-disable-next-line react/function-component-definition
const HeadCube: FC = () => (
	<div className={clN.headCube}>
		<div className={clN.headCube__contentDiv}>
			<h2 className={clN.tittle}>All time Highest Scorers</h2>
			<TopUsers />
		</div>
		<img className={clN.headCube__logo} src={logo} alt="Logo" width={300} height={200} />
	</div>
);

export default HeadCube;
