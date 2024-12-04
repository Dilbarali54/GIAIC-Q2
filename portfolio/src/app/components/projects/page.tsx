import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
    <section className='mt-60'>
      <h1 className='text-white text-5xl text-center mt-10 animate-bounce duration-500 font-serif'><span>My Projects</span></h1>
      <div className='text-white justify-items-center mt-40 grid grid-cols-2 md:grid-cols-3 text-center'>
      
       <div className="items-center justify-center p-4">
      <Image
        src="/analog-clock.PNG" alt="analogclock" width={300} height={300} className="w-64 h-56 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500 "/>
        <a href="https://analog-clock-eight-xi.vercel.app/ " target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Analog Clock</h3></a>
       </div> 

       <div className=" items-center justify-center p-4">
      <Image 
        src="/qr-code.PNG" alt="explore-pakistan" width={300} height={300} className="w-64 h-56 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500 "/>
        <a href=" https://qr-code-generator-wheat-psi.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>QR CODE</h3></a>
       </div>

       <div className=" items-center justify-center p-4">
      <Image
        src="/calculator.png" alt="calculator" width={300} height={300} className="w-64 h-48 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://my-projects-mocha-kappa.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Calculator</h3></a>
      </div>

        <div className=" items-center justify-center p-4">
      <Image
        src="/cv.PNG" alt="resume-builder" width={300} height={300} className="w-64 h-52 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://resume-builder-theta-nine.vercel.app/" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Resume-Builder</h3></a>
      </div> 
      
      <div className=" items-center justify-center p-4">
      <Image
        src="/chess-game.png" alt="chess-game" width={300} height={300} className="w-64 h-50 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://chess-game-neon.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Chess Game Table</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/semester-table.png" alt="semester-table" width={300} height={300}  className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://semester-table.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Semester Table</h3></a>
      </div> 

      <div className=" items-center justify-center p-4">
      <Image
        src="/registration-form.png" alt="registration-form" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://registration-form-sooty-ten.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Registration Form</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/stop-watch.png" alt="stop-watch" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://stop-watch-inky-six.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Stop Watch</h3></a>
      </div>
      </div>
      
        </section>
    </div>
  )
}

export default Project
