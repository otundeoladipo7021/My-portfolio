import Navbar from "./components/Navbar";
import VantaBackground from "./components/VantaBackground";
import About from "./components/About";
import { FaChevronDown } from "react-icons/fa";
import Projects from "./components/Projects";
import ResumeTimeline from "./components/ResumeTimeline";
import Contact from "./components/Contacts";


function App() {
  return (
    <div className="text-white min-h-screen relative">
      <Navbar />
      <VantaBackground />
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Oluwajomiloju Tunde-Oladipo
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Web Developer & Creative Designer
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>
         <a
  href="#about"
  className="border border-cyan-500 hover:bg-cyan-500 hover:text-gray-900 text-cyan-500 font-bold px-6 py-3 rounded-lg transition"
>
  Let’s Explore
</a>
        </div>
        <a
  href="#about"
  className="mt-8 text-cyan-400 text-3xl animate-bounce hover:text-cyan-300 transition duration-300"
>
  <FaChevronDown />
</a>
      </section>
      <About />
      <ResumeTimeline />
      <Projects />
      <Contact />
      <footer className="text-center py-6 bg-gray-900 text-gray-400 text-sm">
  <p>&copy; {new Date().getFullYear()} Oluwajomiloju Tunde-Oladipo</p>
  <p className="mt-2">
    <a
      href="https://github.com/otundeoladipo7021"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      GitHub
    </a>
  </p>
</footer>
      {/* Add other sections like Projects, Contact, etc. here */}
    </div>
  );
}

export default App;
