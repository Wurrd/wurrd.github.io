import Layout from "../../components/Layout";

const projects = [
  { title: "League of Legends Discord Bot", url: "https://github.com/Googolplexic/LoL-discord-bot", color: "bg-red-600", desc: "Discord bot for LoL utilities" },
  { title: "Blend In: Game", url: "https://github.com/TMZero-c/CMPT371Project", color: "bg-green-500", desc: "Multiplayer stealth game" },
  { title: "CloudCue", url: "https://github.com/CMPT-276-SUMMER-2025/final-project-21-spring", color: "bg-blue-500", desc: "Cloud audio platform" },
  { title: "Adobe Express Add-on", url: "https://github.com/Googolplexic/beSquare", color: "bg-yellow-500", desc: "Add-on for Adobe Express" },
  { title: "Emergency Event Reporter", url: "https://github.com/MACHI-NE/MACHI-NE-", color: "bg-purple-500", desc: "Report emergencies quickly" },
  { title: "Salmon Run: Game", url: "https://github.com/Marcetho/salmon-run", color: "bg-indigo-500", desc: "Local co-op arcade game" },
];

export default function Projects() {
  return (
    <Layout activePage="Projects">
      <div className="grid grid-cols-2 gap-6">
        {projects.map((proj) => (
          <a
            key={proj.title}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-4 bg-white rounded-md shadow hover:shadow-md transition"
          >
            <div className={`${proj.color} w-24 h-24 rounded-md flex-shrink-0`} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{proj.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{proj.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  );
}
