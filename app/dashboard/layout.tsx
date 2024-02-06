import { redirect } from 'next/navigation';
import React from 'react';

import SecondaryNavBar from '@/components/secondaryNavBar';
import { authKey } from '@/constants/authKey';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = getCookie(authKey, { cookies });

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SecondaryNavBar />
      {children}
      {/* <SideBar sideNavItems={dashboardNavItems('super_admin')}>
       
      </SideBar> */}
    </div>
  );
}
