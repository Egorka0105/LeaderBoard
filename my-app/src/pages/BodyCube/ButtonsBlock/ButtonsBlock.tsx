import React, { FC } from 'react';
import Button from './Button/Button';
import clN from './buttonsBlock.module.scss';

const ButtonsBlock: FC = () => {
	return (
		<div className={clN.buttonsBlock}>
			<h2 className={clN.buttonsBlock__title}>Leaders table for this period</h2>
			<div>
				<Button className="btn sortBy" title="Sort by" />
				<Button className="btn previousDay" title="Previous Day" />
				<Button className="btn nextDay" title="Next Day" />
				<Button className="btn addNewScore" title="+Add new score" />
			</div>
		</div>
	);
};

export default ButtonsBlock;
