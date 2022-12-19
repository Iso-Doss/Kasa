import './style.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';

function LodgingCart({title, content, isFirst = true, isAbout = false}) {

    let [isOpen, setIsOpen] = useState(isFirst);

    function show_hide_lodging_cart() {
        setIsOpen(!isOpen);
    }

    return (

        <div className={isAbout ? "kasa-about-accordion-card" : "kasa-accordion-card"}>
            <Link to="#" className="kasa-accordion-card-head" href="#" onClick={show_hide_lodging_cart}>
                <p className="kasa-accordion-card-head-title">{title}</p>
                {isOpen ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/>}
            </Link>

            <div
                className={"kasa-accordion-card-body" + (isOpen ? " kasa-accordion-card-body-show" : " kasa-accordion-card-body-hide")}>
                <p>{content}</p>
            </div>
        </div>

    );

}

export default LodgingCart;