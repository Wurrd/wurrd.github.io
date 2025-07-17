'use client';

import Link from 'next/link';

const navItems = ['About','Socials','Projects','Contact'];

export default function Sidebar({ activePage }) {
  return (
    <aside className="w-48 space-y-4">
      {navItems.map((item) => {
        const isActive = item === activePage;
        const base = 'py-2 px-4 rounded-lg text-center cursor-pointer hover:bg-gray-400 transition';
        const active = isActive ? 'bg-gray-300 text-red-600' : 'bg-gray-200 text-black';
        const href = item.toLowerCase() === 'about'
          ? '/'
          : `/${item.toLowerCase()}/`;

        return (
          <Link key={item} href={href}>
            <div className={`${base} ${active}`}>{item}</div>
          </Link>
        );
      })}
    </aside>
  );
}
