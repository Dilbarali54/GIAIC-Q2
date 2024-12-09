import Link from 'next/link';
import Image from 'next/image';


const OurMenu = () => {
  return (
    <div className="bg-brown-900 text-white py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">OUR MENU</h2>
        <div className="h-1 w-24 bg-green-500 mx-auto mt-4"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center px-10">
        <div className="text-center p-5 ml-14">
          <Image src={"/cofe.png"} alt="Hot Beverages" width={250} height={250} />
          <h3 className="text-xl  font-bold mt-8 mr-16 ">Hot Beverages</h3>
          <p className="mt-2">Wide range steaming hot coffee to make you fresh and light</p>
        </div>
        <div className="text-center p-5">
          <Image src={"/cold.png"} alt="Cool Beverages" width={250} height={250} />
          <h3 className="text-xl font-bold mt-4">Cool Beverages</h3>
          <p className="mt-2">Creamy and frothy cold coffee to make you cool</p>
        </div>
        <div className="text-center p-5">
          <Image src={"/refresh.png"} alt="Refreshment" width={250} height={250} />
          <h3 className="text-xl font-bold mt-4">Refreshment</h3>
          <p className="mt-2">Fruit and icy refreshing drink to make feel refresh</p>
        </div>
      </div>

        <div className="flex flex-col md:flex-row justify-around items-center px-10">
        <div className="text-center p-5">
          <Image src={"/deserts.png"} alt="Desserts" width={250} height={250} />
          <h3 className="text-xl  font-bold mt-8 mr-16 ">Desserts</h3>
          <p className="mt-2">Satiate your paiate and take you
          an a cuilnary treat.</p>
        </div>
        <div className="text-center p-5">
          <Image src={"/combo.png"} alt="speical combos" width={250} height={250} />
          <h3 className="text-xl font-bold mt-12">Special Combos</h3>
          <p className="mt-2">Your favorite eating and drinking
          combations: </p>
        </div>
        <div className="text-center p-5">
          <Image src={"/burger.png"} alt="burger&french fries" width={250} height={250} />
          <h3 className="text-xl font-bold mt-12">Burger&French Fries</h3>
          <p className="mt-2">Quick bites to satisfy your small
          size hunger </p>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;

