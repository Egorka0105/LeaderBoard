import React, { FC } from 'react';
import userEditImg from 'assets/images/edit.png';
import clN from './bodyUser.module.scss';

interface IProps {
	name: string;
	score: number;
	listNumber: number;
	photo: string;
	changePosition: number;
	openEditModal: () => void;
}

const BodyUser: FC<IProps> = ({ name, score, listNumber, photo, changePosition, openEditModal }) => {
	return (
		<div className={clN.bodyUser}>
			<p className={clN.bodyUser__ratingPlace}>{`${listNumber + 1}th`}</p>
			<img src={photo} className={clN.bodyUser__photo} alt="user logo" />
			<p className={clN.bodyUser__score}>{score}</p>
			<p className={clN.bodyUser__name}>{name}</p>
			{changePosition > 0 ? (
				<p className={clN.bodyUser__ratingChangeUp}>{`${changePosition} place`}</p>
			) : changePosition < 0 ? (
				<p className={clN.bodyUser__ratingChangeDown}>{`${changePosition} place`}</p>
			) : (
				<p className={clN.bodyUser__ratingChangeDefault}>No Change</p>
			)}
			<button type="button" className={clN.bodyUser__edit} onClick={openEditModal}>
				<img src={userEditImg} alt="edit user" width="30" height="30" />
			</button>
		</div>
	);
};

export default BodyUser;
