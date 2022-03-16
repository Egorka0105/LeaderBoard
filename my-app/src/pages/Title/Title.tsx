import React, { FC } from 'react';
import clN from './title.module.scss';

const Title: FC = () => {
	return (
		<div>
			<h1 className={clN.title}>
				Cube<span className={clN.digit}>19</span>Leaderboard
			</h1>
		</div>
	);
};

export default Title;
