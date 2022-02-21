import React from 'react';
import './button.scss';

function Button({ title, className }: { title: string; className: string }) {
	return (
		<button type="button" className={className}>
			{title}
		</button>
	);
}

export default Button;
