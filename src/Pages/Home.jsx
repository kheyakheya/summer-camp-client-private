import { Helmet } from "react-helmet-async";
import Banner from "../Compontents/Home/Banner";
import TopClasses from "../Compontents/Home/TopClasses";

const Home = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Website || Home </title>
            </Helmet>
            <Banner></Banner>
            <TopClasses></TopClasses>
           
        </div>
    );
};

export default Home;