import './style.css';
import {Link, useLocation} from "react-router-dom";
import kasa_logo from '../../assets/images/logo/kasa-logo.png';

function Header() {

    const location = useLocation();

    return (

        <header>

            <div>

                <Link to="/" className="">

                    <img alt="Logo Kasa" src={kasa_logo}/>

                </Link>

            </div>

            <nav>

                <ul>

                    <li>

                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>

                    </li>

                    <li>

                        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A Propos</Link>

                    </li>

                </ul>

            </nav>

        </header>

    );
}

export default Header;