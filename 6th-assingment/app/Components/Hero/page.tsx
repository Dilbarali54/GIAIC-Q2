"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
         <section className="flex flex-col lg:flex-row items-center justify-around h-screen mb-40 sm:mt-20">
        <div className='w-[300px] sm:w-[400px] sm:ml-10 '>
            <h1 className='text-white text-5xl  font-bold pt-36 '> <span>Hi, </span> I'm</h1><br />
            <h1 className='text-white text-5xl  font-bold pl-12 text-center'>Dilbar Hashmi </h1><br />
            <p className='text-white'> A passionate student of IT, Cloud Computing, GenAI, Web 3.0 
            Full Stack Developer at Govermor House Karachi.</p>
            <div className='m-8 p-2 w-auto h-auto'>
            <button className='inline-flex text-[35px] text-blue-600'><a href='http://www.linkedin.com/in/dilbar-ali-224798dhk' target='-blank'> 
             <FaLinkedinIn /></a>
            </button>

            <button className='inline-flex text-[30px] text-white m-4'><a href='https://github.com/Dilbarali54' target='-blank'> 
            <FaGithub /> </a>
            </button>
        </div>

        </div>
     
             
        <div>
          <Image src={"/pics3.jpg"} alt="My Profile Picture" width={300} height={300} className='mt-52  mb-20 w-auto h-auto rounded-[50%] shadow-lg shadow-white'/>
        </div>
    

        </section>
    </div>
  )
}

export default Hero


