import React, { FC, useEffect } from 'react';
import HeadCube from './pages/HeadCube/HeadCube';
import BodyCube from './pages/BodyCube/BodyCube';
import 'App.module.scss';
import clN from './App.module.scss';
import { fetchLeaders } from './core/services/getRequest';
import { useAppDispatch } from './core/services/services';

// eslint-disable-next-line react/function-component-definition
const App: FC = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchLeaders());
	}, []);

	return (
		<div className={clN.app}>
			<HeadCube />
			<h1 className={clN.app__tittle}>
				Cube<span className={clN.digit}>19</span>Leaderboard
			</h1>
			<BodyCube />
		</div>
	);
};

export default App;
