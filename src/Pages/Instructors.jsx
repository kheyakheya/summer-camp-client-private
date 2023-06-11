import { useEffect, useState } from "react";
import InstructorCard from "../Compontents/InstructorCard";
import SectionHeading from "../Compontents/SectionHeading";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors]= useState([]);
    useEffect(()=>{
        fetch('https://assignment-twelve-server-puce.vercel.app/users/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="pt-16">
             <Helmet>
                <title>Sporting Star || Instructors </title>
            </Helmet>

            <SectionHeading  heading={'All Instructors'}></SectionHeading>
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                {instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
            </div>

        </div>
    );
};

export default Instructors;