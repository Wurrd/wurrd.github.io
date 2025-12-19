import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout activePage="About">
      <div className="flex space-x-6 items-start">
        <div>
        </div>
        <p className="text-gray-800 text-base leading-relaxed max-w-prose">
          I’m Howard Jin, 3rd year student at SFU.
        </p>
      </div>
    </Layout>
  );
}