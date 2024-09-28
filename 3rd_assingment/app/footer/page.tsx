'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export const Footer = () => {
  const route=useRouter();
  return (
    <div>footer
      <br/>
      <button style={buttonStyle} onClick={()=>route.push("/")}>back to Homepage</button>
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
 export default Footer