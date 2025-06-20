import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex space-x-6 items-start">
        <div className="bg-red-500 w-40 h-56 rounded-md flex-shrink-0"></div>
        <p className="text-gray-800 text-base leading-relaxed max-w-prose">
          Hi, I’m Howard. I’m passionate about building beautiful and useful digital products. 
          Whether it’s through web development, design, or content creation, I love turning ideas 
          into interactive, meaningful experiences. Feel free to explore my projects and get in touch!
        </p>
      </div>
    </Layout>
  );
}