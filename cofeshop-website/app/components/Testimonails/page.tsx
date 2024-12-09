import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Testimonails = () => {
  return (
    <div className="bg-slate-100 text-black py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">TESTIMONAILS</h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mt-4"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center px-10">
        <div className="text-center p-5 ml-14">
          <Image src={"/user-1.png"} alt="micale brown" width={250} height={250} />
          <h3 className="text-xl  font-bold mt-8 mr-16 ">Michael Brown </h3>
          <p className="mt-2">Fantastic mocha flavor.Fresh and
          aromatic. Quick shipping! </p>
        </div>
        <div className="text-center p-5">
          <Image src={"/user-2.png"} alt="Emily Harris " width={250} height={250} />
          <h3 className="text-xl font-bold mt-4 mr-20"> Emily Harris</h3>
          <p className="mt-2">Excellent quality! Fresh beans and
          quick deleviry. highly recommend </p>
        </div>
        <div className="text-center p-5">
          <Image src={"/user-3.png"} alt="Anthony Thompson " width={250} height={250} />
          <h3 className="text-xl font-bold mt-4">Anthony Thompson </h3>
          <p className="mt-2"> Best decaf i’ve tried! Smooth and
          flavorful. Arrived promptly.</p>
        </div>
      </div>
        <div className="flex flex-col md:flex-row justify-around items-center px-10">
        <div className="text-center p-5">
          <Image src={"/user-5.png"} alt="James willim " width={250} height={250} />
          <h3 className="text-xl  font-bold mt-8 mr-16 ">James willim </h3>
          <p className="mt-2"> Great espresso blend! smooth and
          bold flavour. fast shipping tool</p>
        </div>
        <div className="text-center p-5">
          <Image src={"/user-4.png"} alt="Sarah jhonsaon " width={250} height={250} />
          <h3 className="text-xl font-bold mt-14 mr-28">Sarah jhonsaon </h3>
          <p className="mt-2"> Loved the french roast. Perfectly
          balanced and rich. will order again!</p>
        </div>
        <div className="text-center p-5">
          <Image src={"/user-6.png"} alt=" Juille be" width={250} height={250} />
          <h3 className="text-xl font-bold mt-12 ml-8"> Juille be</h3>
          <p className="mt-2"> Excellent quality! Fresh beans and
          quick deleviry. </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonails
