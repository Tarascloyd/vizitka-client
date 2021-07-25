import './Page.css'
import { ReactNode } from 'react';

interface PageProps {
	title: string;
	children?: ReactNode;
	text?: string;
}

const Page = ({ title, children, text}: PageProps):JSX.Element => {
    return (
        <div className='page'>
            <h2>{title}</h2>
            <hr/>
            <hr/>
            <p>{text}</p>
            {children}
            <hr/>
            <hr/>
        </div>  
    );
}

export default Page;