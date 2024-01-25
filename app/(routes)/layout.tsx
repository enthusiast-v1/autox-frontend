import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
