import './Button.css';
import { ReactNode } from 'react';
import {Link} from "react-router-dom";

interface ButtonProps {
	appearance: 'primary' | 'ghost';
	arrow?: 'right' | 'down' | 'none';
	children: ReactNode;
	size?: 'small' | 'medium' | 'large';
	link?: string;
}

const Button = ({ appearance, arrow = 'none', size = 'small', children, link = 'about' }: ButtonProps): JSX.Element => {
	return (
		<Link to={'/' + link}>
			<button className = {'button ' + appearance + ' ' + size}>
				{children}
				{arrow !== 'none' && <span className={'arrow ' + arrow}>
					<img src="/arrow.svg" alt="arrow"/>
				</span>}
			</button>
		</Link>
	);
};

export default Button;