import Button from '../Button/Button'
import './Welcome.css'

const Welcome = ():JSX.Element => {
    return (
        <div className='welcome'>
          <div className="welcome-block">
            <div className="changer"><Button appearance='ghost' arrow='none' size='large'>Shvetsov Taras</Button></div>
            <div><Button appearance='primary' arrow='none' size='medium'>Full Stack Developer</Button></div>
            <div className="icons"> 
                <img src="/whatsapp.svg" alt="arrow"/>
                <img src="/telegram.svg" alt="arrow"/>
                <img src="/github.svg" alt="arrow"/>
            </div>
          </div> 
        </div>  
    );
}

export default Welcome;