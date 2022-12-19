import './style.css';
import {useEffect} from "react";

function Banner({image, text}) {

    useEffect(() => {

        let kasa_banner_selector = document.getElementsByClassName("kasa-banner");

        kasa_banner_selector[0].style.background = "url('" + image + "')";

        kasa_banner_selector[0].style.backgroundSize = "cover";

    }, [image]);


    return (

        <section className="kasa-banner">

            <div className="kasa-banner-shadow"></div>

            {text ? <h1>{text}</h1> : ""}

        </section>

    );
}

export default Banner;