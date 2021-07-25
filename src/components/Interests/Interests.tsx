import React, { useEffect, useState } from 'react';
import Tag from '../Tag/Tag'
import './Interests.css'

interface InterestsProps {
	id?: number;
}

interface Interest {
  interestName: string;
}

const Interests = ({id}: InterestsProps):JSX.Element => {
    
  const [intrs, setIntrs] = useState<Interest[]>([]);
  
  useEffect(() => {
    const apiUrl = `http://localhost:8080/api/portfolios/${id}/interests`;
    fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setIntrs(data));
  }, [id]);
  
  return (
      <div className='interests'>
        {intrs.map((interest) => <Tag>{interest.interestName}</Tag>)}
      </div>
    );
}

export default Interests;