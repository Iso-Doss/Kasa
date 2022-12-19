import './style.css';
import {Link} from "react-router-dom";
import kasa_logo from '../../assets/images/logo/kasa-logo-white.png'

function Footer() {

    return (

        <footer>

            <Link to="/" className="">

                <img alt="Logo Kasa" src={kasa_logo}/>

            </Link>

            <p> &copy; 2020 Kasa. All rights reserved </p>

        </footer>

    );
}

export default Footer;