import { Helmet } from "react-helmet-async";
import TopClasses from "../Compontents/TopClasses";

const Home = () => {
    return (
        <div className="pt-20">
            <Helmet>
                <title>Website || Home </title>
            </Helmet>
            <h3>hoooomeee</h3>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;