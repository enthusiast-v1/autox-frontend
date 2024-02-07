'use client';

import { getClientUserInfo } from '@/services/auth.service';
import { Bell, Search } from 'lucide-react';
import Link from 'next/link';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
import UserProfile from './userProfile';

const SecondaryNavBar = () => {
  const { id } = getClientUserInfo();

  return (
    <nav className="bg-black h-14 flex items-center justify-between px-6">
      <Link href={'/'}>
        <CustomImage
          src={logo}
          alt="logo"
          priority={true}
          className="w-28 h-10"
        />
      </Link>

      <div className="flex items-center space-x-8">
        <Search strokeWidth={1} className="w-5 md:w-7 h-5 md:h-7 text-white" />

        <div className="relative">
          <Bell strokeWidth={1} className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <span className="absolute top-[-15%] right-[-10%] text-[8px] w-3 h-3 text-center font-semibold bg-white text-black rounded-full">
            0
          </span>
        </div>
        <UserProfile id={id} />
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
