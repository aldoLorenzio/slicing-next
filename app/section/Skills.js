import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div className="bg-[#F3FEFC] min-h-screen">
      <div className="container mx-auto flex-col text-center justify-center items-center pt-10">
        <h1 className="font-semibold text-2xl tracking-wider">Skills</h1>
        <h2 className="text-gray-400 text-sm mt-2">Skills yang saya punya</h2>
        <div className="grid grid-cols-3 mt-20">
          <div className="m-7">
            <SkillCard title="Javascript" level="Advanced" img="/JSLogo.svg" />
          </div>
          <div className="m-7">
            <SkillCard title="React" level="Advanced" img="/ReactLogo.svg"/>
          </div>
          <div className="m-7">
            <SkillCard title="NodeJS" level="Advanced" img="NodeJSLogo.svg" />
          </div>
          <div className="m-7">
            <SkillCard title="ExpressJS" level="Advanced" img="ExpressLogo.svg" />
          </div>
          <div className="m-7">
            <SkillCard title="Prisma" level="Advanced" img="PrismaLogo.svg" />
          </div>
          <div className="m-7">
            <SkillCard title="Tailwind" level="Advanced" img="TailwindLogo.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
