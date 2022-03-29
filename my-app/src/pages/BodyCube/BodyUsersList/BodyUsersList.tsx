import React, { FC, useState } from 'react';
import { IUser } from 'core/interfaces/interfaces';
import clN from './bodyUsersList.module.scss';
import BodyUser from './BodyUser/BodyUser';
import ModalEditUserScore from '../../ModalEditUserScore/ModalEditUserScore';

interface IProps {
	day: number;
	users: IUser[][];
}

const BodyUsersList: FC<IProps> = ({ day, users }) => {
	const [openModal, setOpenModal] = useState(false);
	const [currentUser, setCurrentUser] = useState<IUser>();

	const handleOpenModal = (user: IUser) => {
		setOpenModal(true);
		setCurrentUser(user);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div className={clN.bodyUsersList}>
			{!!users[day] &&
				users[day].map((el, i) => {
					return (
						<BodyUser
							key={el.id}
							name={el.name}
							score={el.score}
							listNumber={i}
							photo={el.photo}
							changePosition={el.changePosition}
							openEditModal={() => {
								handleOpenModal(el);
							}}
						/>
					);
				})}
			<ModalEditUserScore open={openModal} user={currentUser} closeModal={handleCloseModal} />
		</div>
	);
};

export default BodyUsersList;
