import '../App.css';
import { useState } from 'react';
import logoBgExtRmv from '../logo/weather-app-logo-remove-exterior-bg.png'
import hamburgerIcon from '../logo/hamburgerIcon.png'

function Header() {
    const [buttonIsClicked, setButtonIsClicked] = useState(false);

    const handleChange = () => {
        setButtonIsClicked(!buttonIsClicked);
    }
    return (
        <header>
            <div><img src={logoBgExtRmv} alt='website logo' className='main-logo'/></div>
            <div onClick={handleChange}><img src={hamburgerIcon} alt='hamburger icon' className='hamburger-icon'/></div>
            <nav>
                <ul className={buttonIsClicked ? 'true' : ''}>
                    <li>Settings</li>
                    <li>About</li>
                    <li>Egg</li>
                    <li>Details</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;