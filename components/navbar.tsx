'use client';

import { cn } from '@/lib/utils';
import { getUserInfo } from '@/services/auth.service';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
import { NavItems } from './navItems';
import { Button } from './ui/button';
import UserProfile from './userProfile';

const Navbar = () => {
  // const { data } = useGetUserProfileQuery({});

  const data = getUserInfo();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className="bg-black" ref={navRef}>
      <div className="relative flex h-16 px-4 items-center justify-between">
        <div className="absolute inset-y-0 left-2 flex items-center md:hidden">
          <Button
            onClick={toggleMenu}
            variant={'outline'}
            className="relative px-3 h-9"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        <div className="flex flex-1 items-stretch justify-start ml-10 md:ml-1">
          <div
            onClick={() => router.push('/')}
            className="flex flex-shrink-0 items-center"
          >
            <CustomImage
              src={logo}
              alt="logo"
              priority={true}
              className="w-32 h-12"
            />
          </div>

          <div className="hidden md:block">
            <NavItems onClose={closeMenu} />
          </div>
        </div>

        <div className=" ml-auto flex items-center space-x-4">
          <UserProfile data={data} />
        </div>
      </div>

      <div
        className={cn(
          'md:hidden bg-white dark:bg-black ',
          isOpen ? 'block ' : 'hidden',
        )}
      >
        <NavItems onClose={closeMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
