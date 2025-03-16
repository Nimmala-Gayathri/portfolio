import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import Resume from "../assets/Resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Me
      </h2>
      <form action="https://submit-form.com/h6vzpGCfP" className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-white"
        />
        <input
          type="number"
          placeholder="Your Phone"
          className="w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-white"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold w-full text-white">
          Send Message
        </button>
      </form>
      <div className="text-center mt-8">
        <a href={Resume} download="Gayathri_Nimmala_Resume.pdf" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold inline-block">
          Download Resume
        </a>
      </div>
      
      <div className="text-center mt-8">
        <h3 className="text-xl font-semibold text-white">Let's connect!</h3>
        <div className="flex justify-center gap-6 mt-4">
          <a href="tel:9100589025" className="text-white text-2xl hover:text-blue-500">
            <FaPhone />
          </a>
          <a href="mailto:nimmalagayathri292@gmail.com" className="text-white text-2xl hover:text-blue-500">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/nimmala-gayathri-544228303" target="_blank" className="text-white text-2xl hover:text-blue-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Nimmala-Gayathri" target="_blank" className="text-white text-2xl hover:text-blue-500">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/gayathri_nimmala_/?hl=en" target="_blank" className="text-white text-2xl hover:text-blue-500">
            <FaInstagram />
          </a>
        </div>
        <p className="mt-4 text-white">nimmalagayathri292@gmail.com</p>
      </div>
    </section>
  );
}
