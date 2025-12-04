import { FaCloud, FaServer, FaCode, FaDatabase, FaPenNib, FaTools, FaHeart } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: <FaCloud />,
      skills: ["AWS (EC2, ECS, RDS, CloudWatch, Amplify, Cognito)", "Google Cloud Platform", "Docker", "Elastic Beanstalk", "Infrastructure Monitoring"]
    },
    {
      title: "DevOps & CI/CD",
      icon: <FaServer />,
      skills: ["GitHub Actions", "AWS Amplify", "Container Deployments", "PowerShell", "Bash Scripting", "Automation"]
    },
    {
      title: "Programming & Frameworks",
      icon: <FaCode />,
      skills: ["JavaScript", "TypeScript", "React.js", "PHP", "HTML/CSS", "RESTful APIs", "Git", "jQuery", "Tailwind CSS"]
    },
    {
      title: "Database & Backend",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "AWS RDS", "phpMyAdmin", "SQL", "Database Optimization"]
    },
    {
      title: "Design & Tools",
      icon: <FaPenNib />,
      skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe XD", "UI/UX Design"]
    },
    {
      title: "Methodologies & Tools",
      icon: <FaTools />,
      skills: ["Agile/Scrum", "Jira", "WordPress", "Shopify", "Microsoft Power Automate", "Code Reviews", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-cyan-400">Technical Skills</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning cloud infrastructure, full-stack development, and creative design
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl text-cyan-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Non-Technical Skills */}
        <div className="mt-12 bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
            <FaHeart /> Professional Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Communication", "Strategic Thinking", "Collaboration", "Time Management", "Adaptability", "Problem Solving", "Agile Project Management", "Remote Teamwork", "User-Focused Design"].map((skill, i) => (
              <span
                key={i}
                className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}