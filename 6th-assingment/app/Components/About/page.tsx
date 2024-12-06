import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <section className="bg-slate-800  py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image
            src={"/pics3.jpg"}
            alt="Dilbar Hashmi"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">About <span className="text-white">Me</span></h2>
          <p className="text-lg text-gray-300 mb-4">
            Hello! I'm <span className="text-green-500 font-semibold">Dilbar Hashmi</span>, a passionate and creative Web Developer and Graphic Designer with over one year of experience in crafting visually appealing and highly functional digital solutions. My journey in the tech and design world began with a deep interest in understanding how things work and a keen eye for aesthetics.
          </p>
          <p className="text-lg text-gray-300 mb-4">My Expertise</p>
          <a
            href="/Dilbar CV.pdf"
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;







