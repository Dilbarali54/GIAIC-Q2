"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-brown-900 text-white">
      <div className="text-left p-8">
        <h2 className="text-6xl font-bold text-yellow-500 m-4 p-4">Chino Coffee Shop</h2>
        <p className="mt-4 text-sm font-semibold">
          Welcome to our coffee paradise,Where every bean tells
          a story and every cup sparks joy. <br /> We take pride in our carefully curated selection of coffee. Each cup is crafted with precision,<br /> using beans  that are ethically sourced and roasted to perfection.
          Whether you prefer a classic <br /> espresso, a rich latte, or a refreshing iced coffee, we have something to satisfy every palate.
        </p>
      </div>
      <div className="relative ml-10">
        <Image src={"/hero.png"} alt="Coffee Cup" width={400} height={400} />
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Hero
