import Button from '../Button/Button'
import './Welcome.css'

interface WelcomeProps {
	portfolio?: {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    homeCity: string;
  };
}

const Welcome = ({portfolio}:WelcomeProps):JSX.Element => {
    return (
        <div className='welcome'>
          <div className="welcome-block">
            <div className="changer"><Button appearance='ghost' arrow='none' size='large'>{portfolio && portfolio.firstName + ' ' + portfolio.lastName}</Button></div>
            <div><Button appearance='primary' arrow='none' size='medium'>{portfolio && portfolio.title}</Button></div>
            <div><Button appearance='ghost' arrow='none' size='medium'>{portfolio && portfolio.homeCity}</Button></div>
            <div className="icons"> 
                <a target='_blank' rel='noopener noreferrer' href='https://wa.me/+79132045176'><img src="/whatsapp.svg" alt="arrow"/></a>
                <a target='_blank' rel='noopener noreferrer' href='https://t.me/@TarascLoyd'><img src="/telegram.svg" alt="arrow"/></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/Tarascloyd'><img src="/github.svg" alt="arrow"/></a>
            </div>
          </div> 
        </div>  
    );
}

export default Welcome;