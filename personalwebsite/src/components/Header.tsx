'use client';
import React from 'react';

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-gray-200 px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Welcome</h1>
      <div className="hidden sm:block">
        <span className="text-base">My Personal Website</span>
      </div>
      <button
        className="sm:hidden p-2 focus:outline-none"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
