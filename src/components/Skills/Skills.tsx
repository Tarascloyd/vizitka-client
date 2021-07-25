import React, { useEffect, useState } from 'react';
import Tag from '../Tag/Tag'
import Meter from '../Meter/Meter'
import './Skills.css'

interface SkillsProps {
	id?: number;
}

interface Skill {
  skillName: string;
  level: number
}

interface SkillJson {
  content: Skill[];
  totalPages: number;
}

const Skills = ({id}: SkillsProps):JSX.Element => {
    
    const [skills, setSkills] = useState<SkillJson>();
    
    useEffect(() => {
      const apiUrl = `http://localhost:8080/api/portfolios/${id}/skills`;
      fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setSkills(data));
    }, [id]);
  
    return (
      <div className='skills'>
          {skills && skills.content.map((skill) => 
            <div className='cell'>
              <Tag>{skill.skillName}</Tag>
              <Meter fill={skill.level}/>
            </div>
          )}
      </div>
    );
}

export default Skills;