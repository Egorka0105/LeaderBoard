import React, { FC } from 'react';
import './button.scss';

interface IProps {
	title: string;
	className: string;
}

const Button: FC<IProps> = ({ title, className }) => {
	return (
		<button type="button" className={className}>
			{title}
		</button>
	);
};

export default Button;
