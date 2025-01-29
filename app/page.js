import Nav from "./components/Nav";
import Button from "./components/Button";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

const source_sans_font = Source_Sans_3({
  subsets: ["latin"],
  weight: ['300' ,'400','600','700'],
  variable: '--font-source_sans'
});

const serif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-source_serif'
})

export default function Home() {
  return (
    <>
      <div className={`bg-hero bg-cover w-full bg-center bg-no-repeat h-[600px] pb-4 relative ${source_sans_font.variable} ${serif4.variable}`}>
        <div className="container mx-auto font-source_sans text-white">
          <nav className="flex py-9">
            <div className={`text-lg w-3/12`}>
              Dodo
            </div>
            <div className="w-6/12">
              <ul className="flex justify-center space-x-10">
               <Nav />
              </ul>
            </div>
            <div className="w-3/12 text-end text-lg">
              <Button href="#kontak">Kontak</Button>
            </div>
          </nav>
          <div className="text-center text-[2rem] tracking-wider font-normal items-center flex flex-col mt-20">
            <h1 className="mb-4">Belajar Design UI biar enak frontendnya</h1>
            <h1>Ini percobaan pertama gw kawan</h1>
          </div>
          <div className="mx-auto text-center text-sm mt-5 opacity-75 tracking-wider font-serif4 w-4/12">
            <h3>I start from 3 years ago and still learning slowly because have lot work to do hehe</h3>
          </div>
          <div className="text-center mt-10">
            <Button bgcolor="bg-secondary" text="text-slate-950">Pelajari</Button>
          </div>
        </div>
      </div>
    </>
  );
}