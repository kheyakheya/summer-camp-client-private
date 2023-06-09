import  { useEffect, useState } from 'react';
import SectionHeading from '../SectionHeading';
import TopClassCard from '../TopClassCard';

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
            <SectionHeading heading={'Popular Classes'}></SectionHeading>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                {topClasses.map(lesson=><TopClassCard key={lesson._id} lesson={lesson}></TopClassCard>)}
            </div>

        </div>
    );
};

export default TopClasses;