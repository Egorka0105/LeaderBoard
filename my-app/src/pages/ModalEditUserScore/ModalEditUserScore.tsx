import React, { FC } from 'react';
import closed from 'assets/images/closed.png';
import clN from './modalEditUserScore.module.scss';

const ModalEditUserScore: FC = () => {
	return (
		<div className={clN.modalWrapper}>
			<div className={clN.editUser}>
				<h4 className={clN.editUser__title}>Edit user Score</h4>
				<input className={clN.editUser__userName} type="text" value="leader.name" />
				<input className={clN.editUser__userScore} type="number" placeholder="Score:" />
				<button className={clN.editUser__saveBtn} type="button">
					Save
				</button>
				<img className={clN.editUser__closeModal} src={closed} alt="close modal" />
			</div>
		</div>
	);
};

export default ModalEditUserScore;
