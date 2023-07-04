import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.scss';

function Header() {
    return (
    <header className='header-kasa'>
        <img src={logo} alt="Logo_Kasa" />
        <nav>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? 'link active' : 'link')}>Accueil</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => (isActive ? 'link active' : 'link')}>A propos</NavLink></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header