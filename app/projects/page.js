import Layout from "../../components/Layout";

const projects = [
  { title: "League of Legends Discord Bot", url: "https://github.com/Googolplexic/LoL-discord-bot", thumb: "bg-red-600" },
  { title: "Blend In: Game", url: "https://github.com/TMZero-c/CMPT371Project", thumb: "bg-indigo-500" },
  { title: "CloudCue", url: "https://github.com/CMPT-276-SUMMER-2025/final-project-21-spring", thumb: "bg-emerald-500" },
  { title: "Adobe Express Add-on", url: "https://github.com/Googolplexic/beSquare", thumb: "bg-yellow-500" },
  { title: "Emergency Event Reporter", url: "https://github.com/MACHI-NE/MACHI-NE-", thumb: "bg-pink-500" },
  { title: "Salmon Run: Game", url: "https://github.com/Marcetho/salmon-run", thumb: "bg-cyan-500" },
  { title: "Project Meteion", url: "https://github.com/oopy-goopy/Project-Meteion", thumb: "bg-gray-600" },
];

export default function Projects() {
  return (
    <Layout activePage="Projects">
      <div className="grid grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <section
            key={proj.url + index}
            className="flex space-x-4 items-start p-4 rounded-md bg-white shadow-sm"
          >
            <div className={`${proj.thumb} w-24 h-24 rounded-md`} />

            <div>
              <h3 className="text-gray-800 mt-1 text-lg font-medium">{proj.title}</h3>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-blue-600 hover:underline mt-1"
              >
                View on GitHub
              </a>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
