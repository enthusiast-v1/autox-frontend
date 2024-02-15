'use client';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import React from 'react';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1444px] mx-auto">
      <SecondaryNavBar />
      <div className="bg-background">
        <div className="grid md:grid-cols-5">
          <SideBar className="hidden lg:block" />
          <div className="col-span-5 lg:col-span-4 md:border-l">
            <div className="h-full px-4 py-6 lg:px-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
