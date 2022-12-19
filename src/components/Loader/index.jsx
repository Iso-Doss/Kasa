import './style.css';

function Loader() {

    window.addEventListener("load", () => {

        let kasa_loader_selector = document.getElementsByClassName("kasa-loader");

        kasa_loader_selector[0].classList.add("hide");

    });

    window.addEventListener("beforeunload", function () {

        let kasa_loader_selector = document.getElementsByClassName("kasa-loader");

        kasa_loader_selector[0].classList.remove("hide");

        kasa_loader_selector[0].classList.add("show");

    });

    return (

        <div className="kasa-loader">

            <div className="kasa-loader-ring"></div>

        </div>

    );
}

export default Loader;