'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'About' },
    { href: '/socials', label: 'Socials' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          bg-gray-100 w-64 p-4 space-y-2
          fixed inset-y-0 left-0 transform z-30
          transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:static sm:inset-auto
        `}
      >
        <nav className="space-y-2">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <a
                  className={`block px-3 py-2 rounded ${
                    isActive
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                  onClick={onClose}
                >
                  {label}
                </a>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
