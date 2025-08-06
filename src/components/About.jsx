import { useEffect } from "react";
import { FaCode, FaDatabase, FaPenNib } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../assets/profile.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    {
      number: 1,
      title: "Frontend Development",
      description:
        "Building responsive websites with JavaScript, React, HTML, CSS, Tailwind, Vanta.js, Three.js",
      icon: <FaCode />,
    },
    {
      number: 2,
      title: "Backend & CMS",
      description:
        "Working with PHP, SQL, WordPress, and REST APIs for dynamic content management",
      icon: <FaDatabase />,
    },
    {
      number: 3,
      title: "Design Tools",
      description:
        "Using Figma, Photoshop, Illustrator, Premier Pro, DaVinci Resolve for UI/UX design, photo and video editing",
      icon: <FaPenNib />,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-16 gap-12 text-white"
    >
      {/* Profile Image */}
      <div
        data-aos="fade-right"
        className="flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-1/2"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-accent"
        />
      </div>

      {/* Bio + Skills */}
      <div
        data-aos="fade-left"
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-secondary mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0">
          My name is Jomiloju Tunde-Oladipo, or Joju for short. I’m a Web
          Developer with skills in HTML, CSS, JavaScript, React, JQuery,
          Tailwind, Three.js, PHP, and WordPress. My goal is to create
          interactive and visually appealing web experiences. I love solving
          problems and learning new technologies.
        </p>

        <div className="flex flex-col gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-6 hover:translate-x-1 transition-transform"
            >
              {/* Number & Line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {skill.number}
                </div>
                {index !== skills.length - 1 && (
                  <div className="w-1 h-16 bg-accent/30"></div>
                )}
              </div>

              {/* Skill Text */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
                <p className="text-secondary">{skill.description}</p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}