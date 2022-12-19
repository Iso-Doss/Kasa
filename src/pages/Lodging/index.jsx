import React, {useEffect} from "react";

import './style.css';
import {useParams} from "react-router-dom";
import lodging_data from '../../data/lodging.json';
import AccordionCard from "../../components/AccordionCard";
import Slider from "../../components/Slider";
import rateActive from '../../assets/images/rate-active.png';
import rate from '../../assets/images/rate.png';

function Lodging() {

    let {id} = useParams();

    let rateRange = [1, 2, 3, 4, 5];

    let lodging = lodging_data.filter((lodging_value) => lodging_value.id === id);

    if (lodging.length >= 1) {

        lodging = lodging[0];

    }

    useEffect(() => {

        document.title = 'Logement | Kasa';

        window.scrollTo(0, 0);

    }, []);

    return (

        <main>

            <Slider pictures={lodging.pictures}/>

            <section className="kasa-accommodation-details">

                <div className="kasa-accommodation-details-bloc">

                    <p className="kasa-accommodation-details-title">{lodging.title}</p>

                    <p className="kasa-accommodation-details-location">{lodging.location}</p>

                    <div className="kasa-accommodation-details-tags">

                        {
                            lodging.tags.map((tag, index) => (

                                <p key={index} className="kasa-accommodation-details-tag">{tag}</p>

                            ))
                        }

                    </div>

                </div>

                <div className="kasa-accommodation-details-bloc">

                    <div className="kasa-accommodation-details-author">

                        <div className="kasa-accommodation-details-author-first-last-name">

                            {
                                lodging.host.name.split(' ').map((name, index) =>
                                    <p key={name + " " + index}
                                       className="kasa-accommodation-details-author-first-name">{name}</p>
                                )

                            }

                        </div>

                        <div className="kasa-accommodation-details-author-avatar">

                            <img alt="#" src={lodging.host.picture}/>

                        </div>

                    </div>

                    <div className="kasa-accommodation-details-rate">

                        {
                            rateRange.map((rangeElem, index) =>
                                lodging.rating >= rangeElem ? (
                                    <img key={index} alt="#" src={rateActive}/>
                                ) : <img key={index} alt="#" src={rate}/>
                            )
                        }

                    </div>

                </div>

            </section>

            <section className="kasa-accordion-cards">

                <AccordionCard title={"Description"} content={lodging.description}/>

                <AccordionCard title={"Équipements"}
                               content={(lodging.equipments.map((equipment, index) => (
                                           <li key={equipment + " " + index}>{equipment}</li>
                                       )
                                   )
                               )} isAbout={false}/>

            </section>

        </main>

    );

}

export default Lodging;