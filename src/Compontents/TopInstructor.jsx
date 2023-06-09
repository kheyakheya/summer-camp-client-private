import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import TopInstructorCard from "./TopInstructorCard";

const TopInstructor = () => {
    const [topInstructors, setTopInstructors]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users/instructors/top')
        .then(res=>res.json())
        .then(data=>{
            setTopInstructors(data)
        })
    },[])
    return (
        <div className="pt-12">
            <SectionHeading heading={'Popular Instructors'}></SectionHeading>
            <div className="py-16 grid grid-cols-3 md:grid-cols-3 place-items-center gap-y-8">
            {topInstructors.map(instructor=> <TopInstructorCard key={instructor.map} instructor={instructor}></TopInstructorCard>)}

            </div>
        </div>
        
    );
};

export default TopInstructor;