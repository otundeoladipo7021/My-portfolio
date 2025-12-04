import {
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaUniversity,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

const resumeItems = [
  {
    title: "Cloud Application Developer",
    org: "Beauld Communications, VYPA",
    date: "June 2025 – Present",
    desc: "Architected and deployed cloud-native web applications using AWS infrastructure (EC2, ECS, Elastic Beanstalk, RDS). Implemented automated CI/CD pipelines with GitHub Actions and AWS Amplify, reducing deployment time by 60%. Configured CloudWatch monitoring and engineered secure authentication with AWS Cognito.",
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
    title: "Systems & Cloud Operations Intern",
    org: "Petricor Digital Technologies",
    date: "Jul 2021 – Oct 2021",
    desc: "Administered Google Cloud Platform services for data backup and disaster recovery. Implemented backup strategies using Acronis Cyber Protect Cloud platform, ensuring 99.9% data availability. Monitored system performance and conducted routine maintenance.",
    type: "work",
  },
  {
    title: "Technical Support Specialist",
    org: "Descasio",
    date: "Jul 2017 – Sept 2017",
    desc: "Resolved over 150 support tickets monthly, achieving a 90% first-response rate. Led weekly solution-focused meetings that drove system improvement and reduced recurring issues by 25%.",
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
    <section id="resume" className="bg-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4 text-center">
          Education & Experience
        </h2>
        <p className="text-center text-gray-400 mb-12">
          My professional journey in technology and development
        </p>

        {/* Certifications Section */}
        <div className="mb-16 bg-gradient-to-br from-gray-950 to-gray-800 p-8 rounded-xl border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <FaCertificate /> Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <FaAward className="text-yellow-400" />
                <h4 className="text-lg font-semibold text-white">AWS Certified Solutions Architect</h4>
              </div>
              <p className="text-sm text-cyan-400">In Progress – Expected 2025</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <FaAward className="text-green-400" />
                <h4 className="text-lg font-semibold text-white">Acronis Cyber Protect</h4>
              </div>
              <p className="text-sm text-gray-400">Data Backup & Recovery – Completed 2021</p>
            </div>
          </div>
        </div>

        <div className="relative border-l-2 border-cyan-500 pl-6">
          {resumeItems.map((item, idx) => (
            <div
              key={idx}
              className="mb-12 pl-16 relative"
            >
              <div className="absolute left-0 top-1 w-12 h-12 bg-gray-900 rounded-full border-2 border-cyan-500 shadow-lg flex items-center justify-center">
                <div className="text-xl text-cyan-400">
                  {item.icon ? item.icon : getIcon(item.type)}
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-6 rounded-lg shadow-md hover:border-cyan-500/50 transition-all">
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