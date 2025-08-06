
import {
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaUniversity,
  FaBuilding,
} from "react-icons/fa";

const resumeItems = [
  {
    title: "Web Developer",
    org: "Beauld Communications",
    date: "June 2025 – Present",
    desc: "Contributed to the development of VYPA®, a cloud-based digital signage platform. Built mobile-first UI with React and Tailwind CSS, integrated APIs for billing and scheduling, and collaborated in Agile sprints to deliver a functional frontend MVP.",
    type: "work",
  },
  {
    title: "Graphic Designer (Volunteer)",
    org: "African Family Revival Organisation",
    date: "Jan 2025 – Apr 2025",
    desc: "Designed digital art celebrating Black Canadian Freedom Fighters using Adobe tools. Created culturally impactful visuals while engaging community stakeholders to ensure authenticity and connection.",
    type: "volunteer",
  },
  {
    title: "Cyber Security Intern",
    org: "Petricor Digital Technologies",
    date: "Jul 2021 – Oct 2021",
    desc: "Supported users with technical issues, data recovery, and cloud services. Gained hands-on experience with GCP and Acronis Cyber Protect Cloud for disaster recovery strategy and system backup management.",
    type: "work",
  },
  {
    title: "Technical Support Intern",
    org: "Descasio",
    date: "Jul 2017 – Sept 2017",
    desc: "Resolved over 150 support tickets monthly, achieving a 90% first-response rate. Led weekly solution-focused meetings that drove system improvement and reduced recurring issues.",
    type: "work",
  },
  {
    title: "Ontario College Certificate – Web Development",
    org: "Conestoga College, Waterloo, ON",
    date: "Sept 2024 – June 2025",
    desc: "Specialized in Web Development & Internet Systems Application Fundamentals, covering modern web technologies and responsive design.",
    type: "education",
     icon: <FaUniversity className="text-2xl text-cyan-400" />
  },
  {
    title: "Ontario College Certificate – Business Entrepreneurship",
    org: "Fanshawe College, London, ON",
    date: "Sept 2023 – June 2024",
    desc: "Focused on business foundations, digital marketing, and entrepreneurship strategies to complement technical development skills.",
    type: "education",
     icon: <FaUniversity className="text-2xl text-cyan-400" />,
  },
];

// Icon generator
const getIcon = (type) => {
  switch (type) {
    case "work":
      return <FaBriefcase className="text-cyan-400 text-xl" />;
    case "education":
      return <FaGraduationCap className="text-cyan-400 text-xl" />;
    case "volunteer":
      return <FaHeart className="text-cyan-400 text-xl" />;
    default:
      return <FaBriefcase className="text-cyan-400 text-xl" />;
  }
};

const ResumeTimeline = () => {
  return (
    <section id="resume" className="bg-gray-950 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12 text-center">
          Education & Experience
        </h2>

        <div className="relative border-l-2 border-cyan-500 pl-6">
          {resumeItems.map((item, idx) => (
            <div
  key={idx}
  className="mb-12 pl-16 relative"
  data-aos="fade-up"
  data-aos-delay={idx * 100}
>
  {/* Floating Icon to the Left */}
  <div className="absolute left-0 top-1 w-12 h-12 bg-gray-950 rounded-full border-2 border-cyan-500 shadow-lg flex items-center justify-center">
    <div className="text-xl text-cyan-400">
      {item.icon ? item.icon : getIcon(item.type)}
    </div>
  </div>

  {/* Content Block */}
  <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
    <p className="text-sm text-gray-400 italic mb-2">
      {item.org} — {item.date}
    </p>
    <p className="text-gray-300">{item.desc}</p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeTimeline;
