import './style.css';
import {Link} from "react-router-dom";

function PageNotFound() {

    return (

        <main>

            <p className="kasa-not-found">404</p>

            <p className="kasa-not-found-description">Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/" className="kasa-not-found-back-to-home">Retourner sur la page d’accueil</Link>

        </main>

    );
}

export default PageNotFound;