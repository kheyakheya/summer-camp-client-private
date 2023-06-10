import { useEffect, useState } from "react";
import InstructorCard from "../Compontents/InstructorCard";
import SectionHeading from "../Compontents/SectionHeading";

const Instructors = () => {
    const [instructors, setInstructors]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div className="pt-16">

            <SectionHeading  heading={'All Instructors'}></SectionHeading>
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                {instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
            </div>

        </div>
    );
};

export default Instructors;