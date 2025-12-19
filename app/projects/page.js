import Layout from "../../components/Layout";

export default function Projects() {
  return (
    <Layout activePage="Projects">
      <div className="grid grid-cols-2 gap-6">
        {Array.from({ length: 1 }).map((_, index) => (
          <div key={index} className="flex space-x-4 items-start">
            <div className="bg-red-600 w-24 h-24 rounded-md" />
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/Googolplexic/LoL-discord-bot" target="_blank">League of Legends Discord Bot</a>
            </p>
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/TMZero-c/CMPT371Project" target="_blank">Blend In: Game</a>
            </p>
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/CMPT-276-SUMMER-2025/final-project-21-spring" target="_blank">CloudCue</a>
            </p>
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/Googolplexic/beSquare" target="_blank">Adobe Express Add-on</a>
            </p>
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/MACHI-NE/MACHI-NE-" target="_blank">Emergency Event Reporter</a>
            </p>
            <p className="text-gray-800 mt-2">
              <a href="https://github.com/Marcetho/salmon-run" target="_blank">Salmon Run: Game</a>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}