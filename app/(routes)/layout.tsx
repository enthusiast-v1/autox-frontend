import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
