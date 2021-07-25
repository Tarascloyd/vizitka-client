import Tag from '../Tag/Tag'
import './Interests.css'

const Interests = ():JSX.Element => {
    return (
      <div className='interests'>
          <Tag>Путешествия</Tag>
          <Tag>Английский</Tag>
          <Tag>Рыбалка</Tag>
      </div>
    );
}

export default Interests;