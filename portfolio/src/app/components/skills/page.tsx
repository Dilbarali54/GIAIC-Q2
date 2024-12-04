import React from "react";

const Skills = () => {
  return (
    <div>
      <section className='id="skills" mt-48'>
        <h1 className="text-white text-center text-5xl font-serif">
          <span>My Skills</span>
        </h1>
        <div className=" justify-items-center mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <article className="text-blue-400 bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>HTML</h4>
          </article>
          <article className="text-blue-400 bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>CSS</h4>
          </article>
          <article className="text-blue-400 bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>JAVASCRIPT</h4>
          </article>
          <article className="text-blue-400 bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>TYPESCRIPT</h4>
          </article>
          <article className="text-blue-400 bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>NEXTJS</h4>
          </article>
          <article className="text-blue-400 bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>TAILWIND CSS</h4>
          </article>
          <article className="text-blue-400 bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>NODEJS</h4>
          </article>
          <article className="text-blue-400 bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:border-yellow-400">
            <h4>GRAPHIC DESIGN</h4>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
