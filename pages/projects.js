import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout activePage="Projects">
      <div className="grid grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex space-x-4 items-start">
            <div className="bg-red-600 w-24 h-24 rounded-md" />
            <p className="text-gray-800 mt-2">
              Lorem ipsum dolor sit amet, consectetu
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}