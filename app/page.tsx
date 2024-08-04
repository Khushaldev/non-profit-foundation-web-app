import { AboutUsComponent } from "@/components/AboutUs";
import Carousel from "@/components/Crousel";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { OurImpact } from "@/components/OurImpact";
import { OurProgrammes } from "@/components/OurProgrammes";
import Image from "next/image";

export default function Main() {
  const data = [
    {
      image:
        "https://www.smilefoundationindia.org/wp-content/uploads/2022/09/Banner1-scaled.jpg",
    },
    {
      image:
        "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner2-1.jpg",
    },
    {
      image:
        "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner4-1.jpg",
    },
    {
      image:
        "https://www.smilefoundationindia.org/wp-content/uploads/2022/12/Banner3-1.jpg",
    },
  ];
  return (
    <main className="font-Poppins">
      <Navbar />
      <Carousel data={data} />
      <AboutUsComponent />
      <OurImpact />
      <OurProgrammes />
      <Footer />
    </main>
  );
}
