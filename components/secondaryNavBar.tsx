'use client';

import { Bell, Search } from 'lucide-react';
import Link from 'next/link';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
import { Input } from './ui/input';
import UserProfile from './userProfile';

const SecondaryNavBar = () => {
  return (
    <nav className="bg-black border-b h-14 flex items-center justify-between px-6">
      <Link href={'/'}>
        <CustomImage
          src={logo}
          alt="logo"
          priority={true}
          className="w-28 h-10"
        />
      </Link>

      <div className="flex items-center space-x-6">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8 focus-visible:ring-0" />
          </div>
        </form>

        <div className="relative">
          <Bell
            strokeWidth={1.5}
            className="w-5 h-5 font-thin text-white rounded-full"
          />
          <span className="absolute top-[-15%] right-[-10%] text-[8px] w-3 h-3 text-center font-semibold bg-white text-black rounded-full">
            0
          </span>
        </div>
        <UserProfile />
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
