import React, { FC } from 'react';
import clN from './modalAddUser.module.scss';
import closed from '../../assets/images/closed.png';

const ModalAddUser: FC = () => {
	return (
		<div className={clN.modalWrapper}>
			<div className={clN.addUser}>
				<h4 className={clN.addUser__title}>Add user Score</h4>
				<input className={clN.addUser__userName} type="text" placeholder="name:" />
				<input className={clN.addUser__userScore} type="number" placeholder="Score:" />
				<button className={clN.addUser__saveBtn} type="button">
					Save
				</button>
				<img className={clN.addUser__closeModal} src={closed} alt="close modal" />
			</div>
		</div>
	);
};

export default ModalAddUser;
