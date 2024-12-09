"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div className=' w-screen fixed top-0 right-0 z-10'>
      <div className='grid grid-cols-2 mx-auto justify-between sm:items-center py-4 sm:py-6'>
        <div className='text-white ml-2 text-xl  sm:text-3xl sm:ml-10 font-bold font-serif'>Coffee
        </div>
        <div className='flex justify-end mr-1.5 mt-1.5 gap-2 text-sm sm:text-lg sm:gap-10 sm:mr-24 font-serif font-bold'>
         <Link href="/components/Home" className='text-white hover:text-yellow-300 duration-500'>Home</Link>
         <Link href="/components/About" className='text-white  hover:text-yellow-300 duration-500 '>Aboutus</Link>
         <Link href="/components/OurMenu" className='text-white  hover:text-yellow-300 duration-500 '>Menu</Link>
         <Link href="/components/Testimonails" className='text-white  hover:text-yellow-300 duration-500 '>Testimonails</Link>
         <Link href="/components/Gallary" className='text-white  hover:text-yellow-300 duration-500'>Gallary</Link>
         <Link href="/components/ContactUs" className='text-white  hover:text-yellow-300 duration-500'>Contactus</Link>
        </div>
      </div>
   </div>
    </nav>
  )
}

export default Navbar
