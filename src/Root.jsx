import { Outlet } from "react-router-dom";
import Navbar from "./CommonComponets/Navbar";
import Footer from "./CommonComponets/Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;