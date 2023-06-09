import { useEffect, useState } from "react";

const TopClasses = () => {
    const [topClasses, setTopClasses]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/top-class')
        .then(res=>res.json())
        .then(data=>{
            setTopClasses(data)
        })
    },[])
    return (
        <div>
            <h1>top classes {topClasses.length}</h1>
        </div>
    );
};

export default TopClasses;