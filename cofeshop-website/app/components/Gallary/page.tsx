import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Gallary = () => {
  return (
    <div className="bg-slate-400 text-white py-10">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-black">GALLARY</h2>
      <div className="h-1 w-24 bg-green-500 mx-auto mt-4"></div>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center px-10">
      <div className="text-center p-5 ml-14">
        <Image src={"/gallery-1.png"} alt="coffe" width={300} height={250} />
      </div>
      <div className="text-center p-5">
        <Image src={"/gallery-2.png"} alt="egg" width={300} height={250} />
      </div>
      <div className="text-center p-5">
        <Image src={"/gallery-3.png"} alt="milk" width={300} height={200} />
      </div>
    </div>

      <div className="flex flex-col md:flex-row justify-around items-center px-10">
      <div className="text-center p-5">
        <Image src={"/gallery-4.png"} alt="blackcoffe" width={300} height={250} />
      </div>

      <div className="text-center p-5">
        <Image src={"/gallery-5.png"} alt="speical combos" width={300} height={250} />
      </div>

      <div className="text-center p-5">
        <Image src={"/gallery-6.png"} alt="tea break" width={300} height={250} />
      </div>
    </div>
  </div>
  )
}

export default Gallary
