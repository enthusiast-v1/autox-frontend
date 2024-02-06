import SecondaryNavBar from '@/components/secondaryNavBar';
import { authKey } from '@/constants/authKey';
import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getCookie(authKey, { cookies });

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SecondaryNavBar />
      {children}

      {/* <SideBar sideNavItems={accountNavItems('customer')}></SideBar> */}
    </div>
  );
};

export default AccountLayout;
