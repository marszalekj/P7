import { NavLink } from "react-router-dom";
import logoHeader from '../../assets/LOGOheader.png'

const Header = () => {
    return (
    <header>
        <div>
            <NavLink to = '/'>
    <img id='logo-header' alt='Logo Kasa' src={logoHeader} />
             </NavLink>
        </div>
        <nav className='nav'>
            <ul>
    <li><NavLink to = '/'>Accueil</NavLink></li>
    <li><NavLink to = "/about">A Propos</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header 