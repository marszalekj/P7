import './Header.css'
import { NavLink } from "react-router-dom";
import logoHeader from '../../assets/LOGOheader.png'

const Header = () => {
    return (
    <header>
        <div>
    <img id='logo-header' alt='Logo Kasa' src={logoHeader} />
        </div>
        <div className='nav'>
    <h2><NavLink to = '/'>Accueil</NavLink></h2>
    <h2><NavLink to = "/about">A Propos</NavLink></h2>
        </div>
    </header>
    )
}

export default Header 