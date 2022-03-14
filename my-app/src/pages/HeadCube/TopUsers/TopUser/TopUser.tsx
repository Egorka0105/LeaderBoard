import React from 'react';
import clN from './topUser.module.scss';

interface ITopUser {
	name: string;
	photo: string;
	score: number;
}

function TopUser({ name, photo, score }: ITopUser) {
	return (
		<div className={clN.topUser}>
			<div className={clN.imgDiv}>
				<img src={photo} alt="user pict" className={clN.imgDiv__photo} />
				<p className={clN.imgDiv__score}>{score}</p>
			</div>
			<h4 className={clN.topUser__name}>{name}</h4>
		</div>
	);
}

export default TopUser;
