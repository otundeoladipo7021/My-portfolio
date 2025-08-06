// src/components/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-950 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mb-12">
          Whether you have a question, a project idea, or just want to say hello, my inbox is always open.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="mailto:jomilojutundeoladipo@hotmail.com"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex items-center gap-4 shadow-md transition"
          >
            <FaEnvelope className="text-2xl text-cyan-400" />
            jomilojutundeoladipo@hotmail.com
          </a>

          <a
            href="https://github.com/otundeoladipo7021"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex items-center gap-4 shadow-md transition"
          >
            <FaGithub className="text-2xl text-cyan-400" />
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/oluwajomiloju-tunde-oladipo-24ba69233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex items-center gap-4 shadow-md transition"
          >
            <FaLinkedin className="text-2xl text-cyan-400" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
