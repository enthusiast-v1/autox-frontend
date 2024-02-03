'use client';

import { getUserInfo } from '@/services/auth.service';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import dashboardNavItems from '@/constants/dashboardNavItems';

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const user = getUserInfo();

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
      <SecondaryNavBar />
      <SideBar sideNavItems={dashboardNavItems('super_admin')}>
        {children}
      </SideBar>
    </div>
  );
}
