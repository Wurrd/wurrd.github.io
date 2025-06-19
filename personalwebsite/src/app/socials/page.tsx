export default function Socials() {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/username' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username' },
  ];
  return (
    <div className="space-y-4">
      {socials.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block bg-white p-4 rounded shadow hover:bg-gray-100"
        >
          {name}
        </a>
      ))}
    </div>
  );
}
