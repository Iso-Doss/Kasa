import {useEffect} from "react";

import './style.css';
import Banner from "../../components/Banner";
import about_banner_image from "../../assets/images/about-banner-image.png";
import about_data from '../../data/about.json';
import AccordionCard from "../../components/AccordionCard";

function About() {

    useEffect(() => {

        document.title = 'À propos | Kasa';

        window.scrollTo(0, 0);

    }, []);

    return (

        <main>

            <Banner image={about_banner_image}/>

            <section className="kasa-accordion-cards">
                {

                    about_data.map((data, index) => (

                        <AccordionCard key={index} title={data.title} content={data.content} isFirst={index + 1 === 1}
                                       isAbout={true}/>

                    ))

                }

            </section>

        </main>

    );

}

export default About;