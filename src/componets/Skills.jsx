import React from "react";
import Marquee from "react-fast-marquee";
import HTML from "../assets/html.png";
import CSS from "../assets/text.png";
import JS from "../assets/js.png";
import ReactLogo from "../assets/structure.png";
const NodeJS = new URL("../assets/nodeJs.png", import.meta.url).href;
import MongoDB from "../assets/MongoDB.png";
import TypeScript from "../assets/typeScript.png";
import Express from "../assets/expressJs.png";
import C from "../assets/c.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";

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
