import React, { FC } from 'react';
import userEditImg from 'assets/images/edit.png';
import cn from 'classnames';
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

			<p
				className={cn(clN.bodyUser__ratingChange, {
					[clN.up]: changePosition > 0,
					[clN.down]: changePosition < 0,
					[clN.noChange]: changePosition === 0,
				})}
			>
				{changePosition ? `${changePosition} place` : 'No Change'}
			</p>
			<button type="button" className={clN.bodyUser__edit} onClick={openEditModal}>
				<img src={userEditImg} alt="edit user" width="30" height="30" />
			</button>
		</div>
	);
};

export default BodyUser;
