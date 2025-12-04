// src/components/Contact.jsx
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Whether you have a project idea, job opportunity, or just want to chat about technology, I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:jomilojutundeoladipo@hotmail.com"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex flex-col items-center gap-3 shadow-md transition group"
          >
            <FaEnvelope className="text-3xl text-cyan-400 group-hover:text-gray-900" />
            <span className="text-sm">Email Me</span>
          </a>

          <a
            href="tel:+12265046041"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex flex-col items-center gap-3 shadow-md transition group"
          >
            <FaPhone className="text-3xl text-cyan-400 group-hover:text-gray-900" />
            <span className="text-sm">226-504-6041</span>
          </a>

          <a
            href="https://github.com/otundeoladipo7021"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex flex-col items-center gap-3 shadow-md transition group"
          >
            <FaGithub className="text-3xl text-cyan-400 group-hover:text-gray-900" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/oluwajomiloju-tunde-oladipo-24ba69233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-cyan-500 hover:text-gray-900 text-white p-6 rounded-lg flex flex-col items-center gap-3 shadow-md transition group"
          >
            <FaLinkedin className="text-3xl text-cyan-400 group-hover:text-gray-900" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}


export default Contact;
