import { useEffect, useState } from "react";
import ClassCard from "../Compontents/ClassCard";
import SectionHeading from "../Compontents/SectionHeading";
import { Helmet } from "react-helmet-async";

const ApprovedClasses = () => {
    const [classes, setClasses]= useState([]);
    useEffect(()=>{
        fetch('https://assignment-twelve-server-puce.vercel.app/class/approved')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
        })
    },[])
    return (
        <div className="pt-16">
             <Helmet>
                <title>Sporting Star || Classes </title>
            </Helmet>
            <SectionHeading heading={'All Classes'}></SectionHeading>
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                {classes.map(lesson=><ClassCard key={lesson._id} lesson={lesson}></ClassCard>)}
            </div>

        </div>
    );
};

export default ApprovedClasses;