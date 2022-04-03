import React, { FC, useState } from 'react';
import { fetchLeaders } from 'core/services/getRequest';
import { nextDay, prevDay, sortUsers } from 'store/usersCreateslice';
import { IUser, useAppDispatch } from 'core/interfaces/interfaces';
import clN from './buttonsBlock.module.scss';
import ModalAddUser from '../../ModalAddUser/ModalAddUser';

type Props = {
	day: number;
	users: IUser[][];
};

const ButtonsBlock: FC<Props> = ({ day, users }) => {
	const dispatch = useAppDispatch();
	const [disabled, setDisabled] = useState(true);
	const [openModal, setOpenModal] = useState(false);

	const goToPreviousDay = () => {
		dispatch(prevDay());
		if (day - 1 === 0) setDisabled(true);
	};

	const goToNextDay = () => {
		if (users[day] === users[users.length - 1]) dispatch(fetchLeaders());
		dispatch(nextDay());
		setDisabled(false);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div className={clN.buttonsBlock}>
			<h2 className={clN.buttonsBlock__title}>Leaders table for this period</h2>
			<div>
				<button
					type="button"
					className={clN.sortBy}
					onClick={() => {
						dispatch(sortUsers());
					}}
				>
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
				<button type="button" className={clN.addNewScore} onClick={handleOpenModal}>
					+Add new score
				</button>
			</div>
			<ModalAddUser open={openModal} closeModal={handleCloseModal} />
		</div>
	);
};

export default ButtonsBlock;
