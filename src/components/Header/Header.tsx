import Button from '../Button/Button'
import './Header.css'

const Header = ():JSX.Element => {
    return (
        <div className='header'>
          <div className='header-block'>
            <Button appearance='ghost' arrow='right' link=''>Main</Button>
            <Button appearance='ghost' arrow='right' link='about'>About</Button>
            <Button appearance='ghost' arrow='right' link='skills'>Skills</Button>
            <Button appearance='ghost' arrow='right' link='interests'>Interests</Button>
          </div>
        </div>  
    );
}

export default Header;