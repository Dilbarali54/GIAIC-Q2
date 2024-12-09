
import Image from 'next/image';


const About = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 text-gray-900 p-5 py-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        <div className="sm:w-1/2 p-5  px-16 py-12">
          <Image src={"/bout.png"} alt="About Us" layout="responsive" width={10} height={600} />
        </div>
        <div className="md:w-1/2 p-5 py-8">
          <h2 className="text-3xl font-bold  ml-6 px-14 m-12">ABOUT US</h2>
          <p className="mt-4 text-sm font-semibold ">
            Welcome to <span className="font-bold text-blue-600">Dilbar Hashmi Chino Coffee Shop</span>.
            At [Your Coffee Shop Name], we believe in the magic of a perfect cup of coffee. Our journey began with a passion for coffee and a desire to create a space where people can relax, connect, and enjoy the best coffee in town.
            We take pride in our carefully curated selection of coffee. Each cup is crafted with precision, using beans that are ethically sourced and roasted to perfection.
            Whether you prefer a classic espresso, a rich latte, or a refreshing iced coffee, we have something to satisfy every palate.
          </p>
        </div>
      </div>    
    </div>
  );
}

export default About;
