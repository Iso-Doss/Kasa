import './style.css';
import {Link} from "react-router-dom";
import {useEffect} from "react";

function LodgingCard({id, title, cover}) {

    useEffect(() => {

        let kasa_lodging_selector = document.getElementById("kasa-lodging-" + id);

        kasa_lodging_selector.style.background = "url('" + cover + "')";

        kasa_lodging_selector.style.backgroundSize = "cover";

    }, [cover, id]);

    return (

        <Link to={"/lodging/" + id} className="kasa-lodging" id={"kasa-lodging-" + id}>
            <div className="kasa-lodging-details">
                {title ? <p>{title}</p> : ""}
            </div>
        </Link>

    );
}

export default LodgingCard;