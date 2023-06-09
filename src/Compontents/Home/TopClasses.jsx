import  { useEffect, useState } from 'react';
import SectionHeading from '../SectionHeading';

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
            <SectionHeading></SectionHeading>
            <h1>top classes {topClasses.length}</h1>
        </div>
    );
};

export default TopClasses;