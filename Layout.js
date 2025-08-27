import React from 'react';
import Navbar from '@/components/Navbar';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen relative bg-white">
      <Navbar currentPageName={currentPageName} />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}