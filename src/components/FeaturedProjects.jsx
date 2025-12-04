import { FaExternalLinkAlt } from "react-icons/fa";

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Vypa.co – Digital Signage CMS Platform",
      description: "A comprehensive cloud-based digital signage and content management platform built from the ground up.",
      details: [
        "Built full-stack architecture using PHP, MySQL, JavaScript, and RESTful APIs",
        "Implemented authentication, subscription plans, license management, and Stripe billing",
        "Developed responsive dashboard for media uploads, scheduling, and real-time content delivery",
        "Managed deployments, GitHub version control, and database optimization"
      ],
      tech: ["PHP", "MySQL", "JavaScript", "REST APIs", "Stripe", "AWS", "Tailwind CSS"],
      link: "https://vypa.co",
      type: "production"
    },
    {
      title: "MasterCaterer – Catering Service Website",
      description: "Full-service website for a Nigerian and international catering business with modern, mobile-optimized design.",
      details: [
        "Designed and developed complete multi-page website with menu listings",
        "Created intuitive UI with service descriptions and mobile-optimized layouts",
        "Implemented SEO setup and performance optimization",
        "Focused on brand-aligned visual design and user experience"
      ],
      tech: ["Astro", "React", "HTML", "CSS", "SEO"],
      link: null,
      type: "client"
    }
  ];

  return (
    <section id="featured-projects" className="min-h-screen px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-cyan-400">Featured Projects</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Showcasing production-grade applications and client work
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-950 to-gray-800 p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                {project.link && (<a
                  
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                )}
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-900/40 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}