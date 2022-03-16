import React, { FC, useEffect } from 'react';
import HeadCube from './pages/HeadCube/HeadCube';
import BodyCube from './pages/BodyCube/BodyCube';
import 'App.module.scss';
import clN from './App.module.scss';
import { fetchLeaders } from './core/services/getRequest';
import { useAppDispatch } from './core/interfaces/interfaces';
import Title from './pages/Title/Title';

const App: FC = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchLeaders());
	}, []);

	return (
		<div className={clN.app}>
			<HeadCube />
			<Title />
			<BodyCube />
		</div>
	);
};

export default App;
