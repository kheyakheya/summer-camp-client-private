import { useEffect, useState } from "react";
import InstructorCard from "../Compontents/InstructorCard";

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
            <h2>All the instructors {instructors.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                {instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)}
            </div>

        </div>
    );
};

export default Instructors;