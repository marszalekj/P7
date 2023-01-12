import './Header.css'
import logoHeader from '../../assets/LOGOheader.png'

const Header = () => {
    return (
    <header>
        <div>
    <img id='logo-header' alt='Logo Kasa' src={logoHeader} />
        </div>
        <div className='nav'>
    <h2>Accueil</h2>
    <h2>A Propos</h2>
        </div>
    </header>
    )
}

export default Header 