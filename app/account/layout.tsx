'use client';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import accountNavItems from '@/constants/accountNavItems';
import { getUserInfo } from '@/services/auth.service';
import { redirect } from 'next/navigation';
import React from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getUserInfo();

  if (!user) {
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
