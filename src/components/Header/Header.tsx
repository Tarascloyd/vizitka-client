import Button from '../Button/Button'
import './Header.css'

const Header = ():JSX.Element => {
    return (
        <div className="header">
          <div className="header-block">
            <Button appearance="ghost" arrow="right">About</Button>
            <Button appearance="ghost" arrow="right">Skills</Button>
            <Button appearance="ghost" arrow="right">Interests</Button>
          </div>
        </div>  
    );
}

export default Header;