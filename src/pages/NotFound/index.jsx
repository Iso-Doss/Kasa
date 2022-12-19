import {useEffect} from "react";

import './style.css';
import PageNotFound from "../../components/PageNotFound";

function NotFound() {

    useEffect(() => {

        document.title = 'Page introuvable (404) | Kasa';

        window.scrollTo(0, 0);

    }, []);

    return (

        <PageNotFound/>

    );

}

export default NotFound;