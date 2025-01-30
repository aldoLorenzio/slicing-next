import Nav from "./components/Nav";
import Button from "./components/Button";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";

const source_sans_font = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source_sans",
});

const serif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source_serif",
});

export default function Home() {
  return (
    <>
      <div
        className={`bg-hero bg-cover w-full bg-center bg-no-repeat h-[600px] pb-4 relative ${source_sans_font.variable} ${serif4.variable}`}
      >
        <div className="container mx-auto font-source_sans text-white">
          <nav id="Navbar" className="flex py-9">
            <Navbar />
          </nav>
          <section id="Hero">
            <Hero />
          </section>
        </div>
      </div>
    </>
  );
}
