import React, { FC, useState } from 'react';
import closed from 'assets/images/closed.png';
import cn from 'classnames';
import { editUserScore } from 'store/usersCreateslice';
import clN from './modalEditUserScore.module.scss';
import { IUser, useAppDispatch } from '../../core/interfaces/interfaces';

type Props = {
	closeModal: () => void;
	open: boolean;
	user: IUser | undefined;
};

const ModalEditUserScore: FC<Props> = ({ closeModal, open, user }) => {
	const dispatch = useAppDispatch();
	const [score, setScore] = useState<number>(0);

	const handlerSaveClick = (): void => {
		const userData = {
			id: user?.id,
			score,
		};
		dispatch(editUserScore(userData));
		setScore(0);
		closeModal();
	};

	return (
		<div className={cn(clN.modalWrapper, { [clN.open]: open, [clN.close]: !open })}>
			<div className={clN.editUser}>
				<h4 className={clN.editUser__title}>Edit user Score</h4>
				<input className={clN.editUser__userName} type="text" value={user?.name} />
				<input
					className={clN.editUser__userScore}
					type="number"
					placeholder="New score:"
					value={score}
					min={0}
					onChange={event => setScore(+event.target.value)}
				/>
				<button
					className={clN.editUser__saveBtn}
					type="button"
					onClick={() => {
						handlerSaveClick();
					}}
				>
					Save
				</button>
				<button type="button" className={clN.editUser__closeModal} onClick={closeModal}>
					<img src={closed} alt="close modal" />
				</button>
			</div>
		</div>
	);
};

export default ModalEditUserScore;
