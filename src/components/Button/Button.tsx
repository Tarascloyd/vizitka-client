import './Button.css';
import { ReactNode } from 'react';

interface ButtonProps {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
}

const Button = ({ appearance, arrow = 'none', size = 'small', children }: ButtonProps): JSX.Element => {
	return (
		<button className = {'button ' + appearance + ' ' + size}>
			{children}
			{arrow !== 'none' && <span className={'arrow ' + arrow}>
				<img src="/arrow.svg" alt="arrow"/>
			</span>}
		</button>
	);
};

export default Button;