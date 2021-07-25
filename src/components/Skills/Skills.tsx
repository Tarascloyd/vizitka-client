import Tag from '../Tag/Tag'
import Meter from '../Meter/Meter'
import './Skills.css'

const Skills = ():JSX.Element => {
    return (
      <div className='skills'>
          <div className='cell'>
            <Tag>Java</Tag>
            <Meter fill={3}/>
          </div>
          <div className='cell'>
            <Tag>SQL</Tag>
            <Meter fill={4}/>
          </div>
          <div className='cell'>
            <Tag>Javascript</Tag>
            <Meter fill={2}/>
          </div>
        </div>
    );
}

export default Skills;