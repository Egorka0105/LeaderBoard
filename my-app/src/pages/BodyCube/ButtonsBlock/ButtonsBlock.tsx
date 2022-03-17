import React, { FC, useState } from 'react';
import clN from './buttonsBlock.module.scss';
import { IUser, useAppDispatch } from '../../../core/interfaces/interfaces';
import { nextDay, prevDay } from '../../../store/usersCreateslice';
import { fetchLeaders } from '../../../core/services/getRequest';

interface Iprops {
	day: number;
	users: IUser[][];
}

const ButtonsBlock: FC<Iprops> = ({ day, users }) => {
	const dispatch = useAppDispatch();
	const [disabled, setDisabled] = useState(true);

	const goToPreviousDay = () => {
		dispatch(prevDay());
		if (day - 1 === 0) setDisabled(true);
	};

	const goToNextDay = () => {
		if (users[day] === users[users.length - 1]) dispatch(fetchLeaders());
		dispatch(nextDay());
		setDisabled(false);
	};

	return (
		<div className={clN.buttonsBlock}>
			<h2 className={clN.buttonsBlock__title}>Leaders table for this period</h2>
			<div>
				<button type="button" className={clN.sortBy} disabled>
					Sort by
				</button>
				<button
					type="button"
					disabled={disabled}
					className={clN.nextDay}
					onClick={() => {
						goToPreviousDay();
					}}
				>
					Previous Day
				</button>
				<button
					type="button"
					className={clN.nextDay}
					onClick={() => {
						goToNextDay();
					}}
				>
					Next Day
				</button>
				<button type="button" className={clN.addNewScore}>
					+Add new score
				</button>
			</div>
		</div>
	);
};

export default ButtonsBlock;
