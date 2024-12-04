import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div>
      <section className='mt-[400px] sm:mt-72'>
        <h1 className="text-5xl text-white text-center mb-10 font-serif"><span>ABOUT</span></h1>
        <p className='text-white text-xl text-center px-20 font-serif'>I Am Passionate About pursuing a career in Cloud Computing and <br/>Artificial intelligence (AI) technologies. I have a strong foundation in HTML, CSS, JavaScript, Typescript, Tailwind CSS, NodeJs and NetxJs and I&apos;m continuously expanding my knowledge and skills in these areas.I am Enthusiastic about Cloud Engineering & GenAI  exploring and mastering various cloud services and solutions..</p>
        <div className='text-white flex flex-col sm:flex-row sm:justify-around text-center mt-10'>
          <article>
          <h5><span>Full Name</span></h5>
          <p>Dilbar Ali</p>
          </article>
          <article>
          <h5><span>Email</span></h5>
          <p>dilbarhashmi12.@gmail.com</p>
          </article>
          <article>
          <h5><span>GitHub</span></h5>
          <Link href="https://github.com/Dilbarali54 " target='_blank'>https://github.com/Dilbarali54 </Link>
          </article>
          <article>
          <h5><span>Phone</span></h5>
          <p>0311-2247720</p>
          </article>
        </div>
      </section>
      
    </div>
  )
}

export default About
