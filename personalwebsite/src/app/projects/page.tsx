export default function Projects() {
  const projects = [
    { title: 'Project A', description: 'Desc A', link: 'https://...' },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(({ title, description, link }) => (
        <a
          key={title}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="block bg-white p-4 rounded shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm">{description}</p>
        </a>
      ))}
    </div>
  );
}
