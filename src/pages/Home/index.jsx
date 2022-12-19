import {useEffect} from "react";

import './style.css';
import Banner from "../../components/Banner";
import home_banner_image from '../../assets/images/home-banner-image.png';
import housing from '../../data/lodging.json'
import LodgingCard from "../../components/LodgingCard";

function Home() {

    useEffect(() => {

        document.title = 'Accueil | Kasa';

        window.scrollTo(0, 0);

    }, []);

    return (

        <main>

            <Banner image={home_banner_image} text={"Chez vous, partout et ailleurs"}/>

            <section className="kasa-housing" id="kasa-housing">

                {
                    housing.map((lodging) => (

                        <LodgingCard key={lodging.id} id={lodging.id} title={lodging.title} cover={lodging.cover}/>

                    ))
                }

            </section>

        </main>

    );

}

export default Home;