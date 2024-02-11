'use client';

import logo from '@/assets/dashboard-log.png';
import { AlignLeft, Bell, Search } from 'lucide-react';
import Link from 'next/link';
import CustomImage from './customImage';
import SideBar from './sideBar';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import UserProfile from './userProfile';

const SecondaryNavBar = () => {
  return (
    <nav className="h-13 flex items-center justify-between px-6 py-1 md:py-0 border-b">
      <div className="flex justify-center items-center">
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <AlignLeft strokeWidth={1.25} className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side={'left'}
            className="flex items-center justify-center border-none w-1/2"
          >
            <SideBar />
          </SheetContent>
        </Sheet>

        <Link href={'/'}>
          <CustomImage
            src={logo}
            alt="logo"
            priority={true}
            className="w-24 md:w-32 h-5 md:h-7 ml-8"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6 md:space-x-8">
        <div className="p-2 ">
          <form>
            <div className="relative">
              <Search
                strokeWidth={1}
                className="md:absolute left-2 top-2.5 md:h-4 h-5 w-5 md:w-4 md:text-muted-foreground"
              />
              <Input
                placeholder="Search"
                className="hidden md:block pl-8 h-9 focus-visible:ring-0"
              />
            </div>
          </form>
        </div>

        <div className="relative">
          <Bell strokeWidth={1} className="w-5 h-5" />
          <span className="absolute top-[-15%] right-[-10%] text-[8px] w-3 h-3 text-center font-semibold bg-black text-white rounded-full">
            0
          </span>
        </div>
        <UserProfile />
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
