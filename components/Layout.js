import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, activePage }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <div className="flex px-6 py-6 space-x-6">
        <Sidebar activePage={activePage} />
        <main className="flex-1 bg-gray-200 p-6 rounded-lg shadow">
          {children}
        </main>
      </div>
    </div>
  );
}