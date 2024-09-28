'use client'
import { useRouter } from "next/navigation";
import React from 'react'

export const About = () => {
  const route= useRouter();
  return (
    <div>
      <h1> about </h1>
      <br/>
     <button style={buttonStyle} onClick={()=>route.push("/")}> back to home page</button>  
    </div>
  )

}

const buttonStyle={
padding:'10px 20px',
backgroundColor:'blue',
color:'white',
border:'none',
borderRadius:'5px',
cursor:"pointer",
fontSize:'16px'
}

export default About