import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  function getTechTags(repo) {
  const techs = [];
  const content = (repo.name + " " + (repo.description || "")).toLowerCase();

  if (content.includes("react")) techs.push("React");
  if (content.includes("node")) techs.push("Node.js");
  if (content.includes("php")) techs.push("PHP");
  if (content.includes("mongo")) techs.push("MongoDB");
  if (content.includes("mysql")) techs.push("MySQL");
  if (content.includes("js") || repo.language === "JavaScript") techs.push("JavaScript");
  if (repo.language === "HTML") techs.push("HTML");
  if (repo.language === "CSS") techs.push("CSS");

  return techs;
}

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/otundeoladipo7021/repos"
        );
        const data = await res.json();

        console.log("GitHub repos:", data);

        setRepos(data); // ✅ No filter, no slice, no sort
      } catch (err) {
        console.error("GitHub fetch error:", err);
        setError("Could not load repos");
      }
    };

    fetchRepos();
  }, []);


  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-gray-950 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {Array.isArray(repos) && repos.length > 0 ? (
    repos.map((repo) => (
      <div
        key={repo.id}
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:shadow-cyan-500/20 transition-all duration-300"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-2 text-cyan-300">
          {repo.name}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          {repo.description || "No description provided."}
        </p>

        <p className="text-xs mb-2 text-gray-500">
          🛠 Language: {repo.language || "Unknown"}
        </p>

        {/* 👇 Smart tech tags go here */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {getTechTags(repo).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 👇 GitHub button */}
        <div className="mt-4">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline text-sm"
          >
            View on GitHub
          </a>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-400">Loading projects...</p>
  )}
</div>

    </section>
  );
}
