import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import OurMenu from "./components/OurMenu/page";
import Testimonails from "./components/Testimonails/page";
import Gallary from "./components/Gallary/page";
import ContactUs from "./components/ContactUs/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <OurMenu/>
      <Testimonails/>
      <Gallary/>
      <ContactUs/>
    </div>

  );
}
