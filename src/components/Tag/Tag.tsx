import './Tag.css';
import { ReactNode } from 'react';

interface TagProps {
	size?: 's' | 'm';
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}

const Tag = ({ size = 'm', children, color = 'primary', href }: TagProps): JSX.Element => {
	return (
		<div className={ 'tag ' + size + ' ' + color}>
			{ href
				? <a href={href}>{children}</a>
				: <>{children}</>
			}
		</div>
	);
};

export default Tag;