import React from 'react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className='bg-slate-950 py-2'>
    <div className="shadow-lg p-40 m-40 items-center  py-10">
      <h2 className=' px-4 text-center text-4xl text-white py-4 '>Contact Us</h2>
      <div className="h-1 w-24 bg-green-500 ml-72 mb-40"></div>
      <form>
        <div className="mb-4 items-center">
          <label className="block  text-2xl font-bold"><span>Name:</span></label>
          <input
            type="text"
            name="name"
            className=" w-full h-12 px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-3xl font-bold"><span>Email: </span></label>
          <input
            type="email"
            name="email"
            className="w-full h-14 px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-3xl font-bold"><span>Message:</span></label>
          <textarea
            name="message"
            className="w-full h-52 px-3 py-2 border rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-10 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;



