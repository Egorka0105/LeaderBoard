import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeadCube from './pages/HeadCube/HeadCube';
import BodyCube from './pages/BodyCube/BodyCube';
import 'App.module.scss';
import clN from './App.module.scss';
import { fetchUser } from './store/usersCreateslice';

// eslint-disable-next-line react/function-component-definition
const App: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUser());
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
