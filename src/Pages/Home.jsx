import { Helmet } from "react-helmet-async";
//import Banner from "../Compontents/Home/Banner";
import TopClasses from "../Compontents/Home/TopClasses";
import TopInstructor from "../Compontents/TopInstructor";
import OurStars from "../Compontents/OurStars";
import BannerHome from "../Compontents/BannerHome";
import { useState } from "react";

const Home = () => {
    const [isDark,setIsDark]=useState(false);
    const themeToggle=()=>{
        setIsDark(!isDark);
    }
    const themeClass = isDark ? 'bg-black text-white' : 'light-theme';
    return (
        <div className={`pt-20 ${themeClass}`}>
            <Helmet>
                <title>Sporting Star || Home </title>
            </Helmet>
            <BannerHome></BannerHome>
            <TopClasses></TopClasses>
            <TopInstructor></TopInstructor>
            <OurStars></OurStars>
            <div className="form-control w-52">
              
               <label className="ml-12 mt-12 cursor-pointer label">
                    <span className="label-text text-red-700">Theme Toggle</span>
                    <input type="checkbox" className=" toggle bg-red-700" checked={isDark} onChange={themeToggle} />
                </label>
            
            </div>

        </div>
    );
};

export default Home;