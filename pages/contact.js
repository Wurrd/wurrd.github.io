import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout activePage="Contact">
      <div className="text-gray-800 leading-relaxed max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>
          Feel free to reach out via email or through any of my social media platforms.
        </p>
        <p className="mt-4">
          Email: officialhjin@gmail.com<br />
          LinkedIn: linkedin.com/in/howard<br />
          Discord: wurrd
        </p>
      </div>
    </Layout>
  );
}