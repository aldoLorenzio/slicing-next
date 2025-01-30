import React from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";

const Hero = () => {
  return (
    <>
      <div className="text-center text-[2rem] tracking-wider font-normal items-center flex flex-col mt-20">
        <h1 className="mb-4">Belajar Design UI biar enak frontendnya</h1>
        <h1>Ini percobaan pertama gw kawan</h1>
      </div>
      <div className="mx-auto text-center text-sm mt-5 opacity-75 tracking-wider leading-[3] font-serif4 w-4/12">
        <h3>
          I start from 3 years ago and still learning slowly because have lot
          work to do hehe
        </h3>
      </div>
      <div className="text-center mt-10">
        <Button bgcolor="bg-secondary" text="text-slate-950">
          Pelajari
        </Button>
      </div>
    </>
  );
};

export default Hero;
