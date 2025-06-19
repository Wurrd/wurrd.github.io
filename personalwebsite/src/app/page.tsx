export default function About() {
  return (
    <div className="bg-gray-200 p-6 rounded">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        <div className="w-48 h-64 bg-red-500 mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
          {/* Replace with <img src="/profile.jpg" alt="Profile" className="object-cover w-full h-full rounded" /> */}
        </div>
        <div className="text-black">
          <p>
            Write your about text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
      </div>
    </div>
  );
}
