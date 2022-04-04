import React, { FC, useState } from 'react';
import cn from 'classnames';
import clN from './modalAddUser.module.scss';
import closed from '../../assets/images/closed.png';
import { addNewUser } from '../../core/services/setRequest';
import { useAppDispatch } from '../../core/interfaces/interfaces';

type Props = {
	closeModal: () => void;
	open: boolean;
};

const ModalAddUser: FC<Props> = ({ open, closeModal }) => {
	const [score, setScore] = useState(0);
	const [name, setName] = useState('');
	const dispatch = useAppDispatch();

	const addUser = () => {
		dispatch(addNewUser({ name, score }));
		closeModal();
		setScore(0);
		setName('');
	};

	return (
		<div className={cn(clN.modalWrapper, { [clN.open]: open, [clN.close]: !open })}>
			<div className={clN.addUser}>
				<h4 className={clN.addUser__title}>Add user Score</h4>
				<input
					className={clN.addUser__userName}
					type="text"
					placeholder="name:"
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
				<input
					className={clN.addUser__userScore}
					type="number"
					placeholder="Score:"
					min={0}
					value={score}
					onChange={e => {
						setScore(+e.target.value);
					}}
				/>
				<button className={clN.addUser__saveBtn} type="button" onClick={addUser}>
					Save
				</button>
				<button type="button" className={clN.addUser__closeModal} onClick={closeModal}>
					<img src={closed} alt="close modal" />
				</button>
			</div>
		</div>
	);
};

export default ModalAddUser;
