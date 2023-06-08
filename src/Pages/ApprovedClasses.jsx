import { useEffect, useState } from "react";
import ClassCard from "../Compontents/ClassCard";

const ApprovedClasses = () => {
    const [classes, setClasses]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/class/approved')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
        })
    },[])
    return (
        <div className="pt-16">
            <h2>All the approved classes {classes.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-content-center">
                {classes.map(lesson=><ClassCard key={lesson._id} lesson={lesson}></ClassCard>)}
            </div>

        </div>
    );
};

export default ApprovedClasses;