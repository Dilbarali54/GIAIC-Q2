
import React from 'react'
 interface StudentProps{
    name:string;
    rollno:string;
    distanceLearning:string;
    city:string;
    center:string;
    campus:string;
    daysTime:string;
    batch:string;
 }
 function  StudentCard(props: StudentProps){
  return (
    <div className="border-2 p-4 rounded-lg w-44 bg-orange-500 shadow-md">
        <div className='text-white text-justify gap-2 text-align-center text-xs'>
        <h1 className='font-bold'> Student ID Card </h1> 
        <h2 className='font-bold'>Name:{props.name}</h2> 
        <p>Rollno:{props.rollno}</p>
        <p>distanceLearning:{props.distanceLearning}</p>
        <p>city:{props.city}</p>
        <p>center:{props.center}</p>
        <p>campus:{props.campus}</p>
        <p>daysTime:{props.daysTime}</p>
        <p>batch:{props.batch}</p>
        </div>
    </div>
)}


export default StudentCard