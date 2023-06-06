import { Outlet } from "react-router-dom";
import Navbar from "../Compontents/Shared/Navbar";
import Footer from "../Compontents/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;