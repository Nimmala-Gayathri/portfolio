import { useState } from "react";
import Skills from "./componets/Skills";
import p1 from './assets/1.png'
import p2 from './assets/2.png'
import p3 from './assets/3.png'
import p4 from './assets/4.png'
import p5 from './assets/6.png'
// import p6 from '../assets/6.png'
// import p7 from '../assets/7.png'
import p8 from './assets/8.png'
import Contact from "./componets/Contact";
// import p9 from '../assets/9.png'
// import p10 from '../assets/10.png'
// import p11 from '../assets/11.png'
// import p12 from '../assets/12.png'

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">Gayathri Nimmala</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Full Stack Developer | React & Node.js Enthusiast
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
        >
          View My Work
        </a>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-16 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* InstaBuy */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p2} alt="InstaBuy" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">InstaBuy</h3>
      <p className="text-gray-400">A full-stack e-commerce platform where users can buy and sell products.</p>
      <a href="https://instabuy-69e0c.web.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>

    {/* Cinema Elk */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p1} alt="Cinema Elk" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">Cinema Elk</h3>
      <p className="text-gray-400">A movie rating platform with TMDB API integration.</p>
      <a href="https://cinema-elk-53a4d.web.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>

    {/* ticket box */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p3} alt="Mommy++" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">Ticket Box</h3>
      <p className="text-gray-400"> Ticket booking platform with TMDB API integration</p>
      <a href="https://ticketbox-9287f.web.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>

    {/* MedStart */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p4} alt="MedStart" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">MedStart</h3>
      <p className="text-gray-400">A healthcare navigation app that helps users find nearby hospitals.</p>
      <a href="https://medstart-7a174.web.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>

    {/* AI Chatbot */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p5} alt="AI Chatbot" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">AI-Powered Chatbot</h3>
      <p className="text-gray-400">A chatbot for retrieving supplier and product information using an open-source LLM.</p>
      <a href="https://fancy-semolina-197c82.netlify.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>
     {/* AI Chatbot */}
     <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <img src={p8} alt="AI Chatbot" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">Google keep note</h3>
      <p className="text-gray-400">Google Keep is a simple and efficient note-taking app by Google that allows users to create, organize, and sync notes across devices.</p>
      <a href="https://jovial-churros-bd1e61.netlify.app" className="text-blue-400 mt-4 inline-block">View Project →</a>
    </div>

  </div>
</section>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-800">
        <Skills />
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800">
        <p className="text-gray-400">
          © 2025 Gayathri Nimmala. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
