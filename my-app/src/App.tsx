import React, { FC, useEffect } from 'react';
import HeadCube from './pages/HeadCube/HeadCube';
import BodyCube from './pages/BodyCube/BodyCube';
import 'App.module.scss';
import clN from './App.module.scss';
// eslint-disable-next-line import/order
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './store/usersCreateslice';
import { RootState } from './store/store';

// eslint-disable-next-line react/function-component-definition
const App: FC = () => {
	// @ts-ignore
	const { users, status } = useSelector((state: RootState) => state.leaders.usersLeaders);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	console.log(users, status);
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
