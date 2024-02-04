'use client';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import accountNavItems from '@/constants/accountNavItems';
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

  if (user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SecondaryNavBar />
      <SideBar sideNavItems={accountNavItems('customer')}>{children}</SideBar>
    </div>
  );
};

export default AccountLayout;
