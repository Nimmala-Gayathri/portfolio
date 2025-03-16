import React from "react";
import Marquee from "react-fast-marquee";
const HTML = new URL("../assets/html.png", import.meta.url).href;
const CSS = new URL("../assets/text.png", import.meta.url).href;
const JS = new URL("../assets/js.png", import.meta.url).href;
const ReactLogo = new URL("../assets/structure.png", import.meta.url).href;
const NodeJS = new URL("../assets/nodeJs.png", import.meta.url).href;
const MongoDB = new URL("../assets/MongoDB.png", import.meta.url).href;
const TypeScript = new URL("../assets/typeScript.png", import.meta.url).href;
const Express = new URL("../assets/expressJs.png", import.meta.url).href;
const C = new URL("../assets/c.png", import.meta.url).href;
const Python = new URL("../assets/python.png", import.meta.url).href;
const Git = new URL("../assets/git.png", import.meta.url).href;
export default function Skills() {
  const skills = [
    { name: "HTML", img: HTML },
    { name: "CSS", img: CSS },
    { name: "JavaScript", img: JS },
    { name: "React", img: ReactLogo },
    { name: "NodeJS", img: NodeJS },
    { name: "MongoDB", img: MongoDB },
    { name: "TypeScript", img: TypeScript },
    { name: "Express", img: Express },
    { name: "C", img: C },
    { name: "Python", img: Python },
    { name: "Git", img: Git },
  ];

  return (
    <div className="py-12 text-center w-full">
      <h2 className="text-4xl font-bold text-white mb-8">SKILLS</h2>

      {/* Marquee Animation */}
      <Marquee speed={50} gradient={false} loop={0}>
        {skills.map((skill, index) => (
          <div key={index} className="mx-8 flex flex-col items-center">
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg transition-transform duration-300 hover:scale-110"
            />
            <p className="mt-2 text-lg font-semibold text-white">{skill.name}</p>
          </div>
        ))}
      </Marquee>

      {/* Grid Layout */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-xl shadow-md flex flex-col items-center hover:bg-gray-700 transition duration-300"
          >
            <img src={skill.img} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2 font-medium text-white">{skill.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
