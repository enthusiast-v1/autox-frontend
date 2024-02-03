import Footer from '@/components/footer';
import NavBar from '@/components/navBar';

import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
