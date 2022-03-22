import React, { FC } from 'react';
import userEditImg from 'assets/images/edit.png';
import clN from './bodyUser.module.scss';

interface IProps {
	name: string;
	score: number;
	listNumber: number;
	photo: string;
	changePosition: number;
}

const BodyUser: FC<IProps> = ({ name, score, listNumber, photo, changePosition }) => {
	return (
		<div className={clN.bodyUser}>
			<p className={clN.bodyUser__ratingPlace}>{`${listNumber + 1}th`}</p>
			<img src={photo} className={clN.bodyUser__photo} alt="user logo" />
			<p className={clN.bodyUser__score}>{score}</p>
			<p className={clN.bodyUser__name}>{name}</p>
			{changePosition > 0 ? (
				<p className={clN.bodyUser__ratingChange}>{`${changePosition} place`}</p>
			) : changePosition < 0 ? (
				<p className={clN.bodyUser__ratingChange}>{`${changePosition} place`}</p>
			) : (
				<p className={clN.bodyUser__ratingChange}>No Change</p>
			)}
			<img className={clN.bodyUser__edit} src={userEditImg} alt="edit user" width="30" height="30" />
		</div>
	);
};

export default BodyUser;
