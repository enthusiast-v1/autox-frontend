'use client';

import Navbar from '@/components/navbar';
import { getUserInfo } from '@/services/auth.service';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getUserInfo();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default AccountLayout;
