import { Helmet } from "react-helmet-async";
import Banner from "../Compontents/Home/Banner";
import TopClasses from "../Compontents/Home/TopClasses";
import TopInstructor from "../Compontents/TopInstructor";
import OurStars from "../Compontents/OurStars";

const Home = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Sporting Star || Home </title>
            </Helmet>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <TopInstructor></TopInstructor>
            <OurStars></OurStars>
           
        </div>
    );
};

export default Home;