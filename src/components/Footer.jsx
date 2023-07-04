import '../styles/Footer.scss';
import logo from '../assets/logo-w.svg';

function Footer() {
    return (
        <footer>
            <img src={logo} alt='Logo Kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
  }
  
  export default Footer;