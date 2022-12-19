import './style.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";

function Slider(pictures) {

    let [sliderImageIndex, setSliderImageIndex] = useState(1);


    useEffect(() => {

        // show_kasa_slider_image(sliderImageIndex);

    }, []);

    // function show_kasa_slider_image(index) {
    //     let i;
    //     let kasa_slider_image_selector = document.getElementsByClassName("kasa-slider-image");
    //     let kasa_slider_dot_image_selector = document.getElementsByClassName("kasa-slider-dot-image");
    //     if (index > kasa_slider_image_selector.length) {
    //         setSliderImageIndex(1);
    //     }
    //     if (index < 1) {
    //         setSliderImageIndex(kasa_slider_image_selector.length);
    //     }
    //     for (i = 0; i < kasa_slider_image_selector.length; i++) {
    //         kasa_slider_image_selector[i].style.display = "none";
    //         kasa_slider_dot_image_selector[i].classList.remove("active");
    //     }
    //     kasa_slider_image_selector[sliderImageIndex - 1].style.display = "block";
    //     kasa_slider_dot_image_selector[sliderImageIndex - 1].classList.add("active");
    //     document.getElementById("kasa-slider-min-image").innerText = sliderImageIndex;
    // }

    function nextSliderImage() {
        let sliderImageCurrent = sliderImageIndex + 1 > pictures.pictures.length ? 1 : sliderImageIndex + 1;
        setSliderImageIndex(sliderImageCurrent);
    }

    function prevSliderImage() {
        let sliderImageCurrent = sliderImageIndex - 1 < 1 ? pictures.pictures.length : sliderImageIndex - 1;
        setSliderImageIndex(sliderImageCurrent);
    }

    return (

        <section className="kasa-slider">

            <div className="kasa-slider-images-container">

                {
                    pictures.pictures.map((picture, index) => (

                        <img key={index} alt={"Kasa slider image" + index}
                             className={index + 1 === sliderImageIndex ? "kasa-slider-image kasa-slider-image-show" : "kasa-slider-image kasa-slider-image-hide"}
                             src={picture}/>

                    ))
                }

            </div>

            <div
                className={pictures.pictures.length > 1 ? "kasa-slider-shadow" : "kasa-slider-shadow one-picture-slider"}>

                {
                    pictures.pictures.length > 1 ?
                        <Link to="#" className="kasa-slider-prev" href="#" id="kasa-slider-prev"
                              onClick={prevSliderImage}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </Link>
                        :
                        ""
                }

                <div>
                    <p>
                        (
                        <span id="kasa-slider-min-image">{sliderImageIndex}</span>
                        /
                        <span id="kasa-slider-max-image">{pictures.pictures.length}</span>
                        )
                    </p>

                    {
                        pictures.pictures.map((picture, index) => (

                            <span key={index} onClick={(e) => setSliderImageIndex(index + 1)}
                                  className={index + 1 === sliderImageIndex ? "kasa-slider-dot-image active" : "kasa-slider-dot-image"}></span>

                        ))
                    }

                </div>
                {
                    pictures.pictures.length > 1 ?
                        <Link to="#" className="kasa-slider-next" href="#" id="kasa-slider-next"
                              onClick={nextSliderImage}>
                            <FontAwesomeIcon icon={faChevronRight}/>
                        </Link>
                        :
                        ""
                }

            </div>

        </section>

    );
}

export default Slider;