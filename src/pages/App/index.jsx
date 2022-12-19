import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../Home";
import About from "../About";
import Lodging from "../Lodging";
import NotFound from "../NotFound";

function Index() {

    return (

        <Router>

            <Routes>

                <Route path="/" element={<Layout/>}>

                    <Route index element={<Home/>}/>

                    <Route path="/lodging/:id" element={<Lodging/>}/>

                    <Route path="/about" element={<About/>}/>

                    <Route path="*" element={<NotFound homePageUrl={"/"}/>}/>

                </Route>

            </Routes>

        </Router>

    );

}

export default Index;
