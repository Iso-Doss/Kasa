import './style.css';

import {Outlet} from "react-router-dom";

import Loader from "../Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Layout({children}) {
    return (

        <>

            <Loader/>

            <Header/>

            <Outlet/>

            <Footer/>

        </>

    );
}

// function Layout({children}) {
//     return (
//
//         <>
//
//             <ScrollUpButton/>
//
//             <Header/>
//
//             {children}
//
//             <Footer/>
//
//         </>
//
//     );
// }

export default Layout;