import React from 'react';
import userEditImg from 'assets/images/edit.png';
import clN from './bodyUser.module.scss';

interface IProps {
	name: string;
	score: number;
	listNumber: number;
	photo: string;
}

function BodyUser({ name, score, listNumber, photo }: IProps) {
	return (
		<div className={clN.bodyUser}>
			<p className={clN.bodyUser__ratingPlace}>{`${listNumber + 1}th`}</p>
			<img src={photo} className={clN.bodyUser__photo} alt="user logo" />
			<p className={clN.bodyUser__score}>{score}</p>
			<p className={clN.bodyUser__name}>{name}</p>
			<p className={clN.bodyUser__ratingChange}>status</p>
			<img className={clN.bodyUser__edit} src={userEditImg} alt="edit user" width="30" height="30" />
		</div>
	);
}

export default BodyUser;
