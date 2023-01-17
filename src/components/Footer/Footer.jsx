import logoFooter from '../../assets/LOGOfooter.png'

const Footer = () => {
    return (
    <footer>
    <img id='logo-footer' alt='Logo Kasa' src={logoFooter} />
        <div className='legal'>
    <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
    </footer>
    )
}

export default Footer 