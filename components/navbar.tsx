import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { authKey } from '@/constants/authKey';
import { CustomJwtPayload } from '@/types/common';
import { decodedToken } from '@/utils/jwtDecode';
import { getCookie } from 'cookies-next';
import { AlignRight } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
import { NavItems } from './navItems';
import UserProfile from './userProfile';

const NavBar = async () => {
  let id = '';

  const authToken = getCookie(authKey, { cookies });
  if (authToken) {
    const decodedData = decodedToken(authToken) as CustomJwtPayload;

    id = decodedData.id;
  }

  return (
    <nav className="bg-black flex h-16 px-4 items-center justify-between">
      <div className="flex items-stretch justify-start ml-2">
        <Link href={'/'}>
          <CustomImage
            src={logo}
            alt="logo"
            priority={true}
            className="w-24 md:w-32 h-10 md:h-12"
          />
        </Link>

        <div className="hidden md:block">
          <NavItems />
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-4 mr-2">
        <UserProfile id={id} />
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <AlignRight className="w-6 h-6 text-white" />
          </SheetTrigger>
          <SheetContent
            side={'right'}
            className="flex items-center justify-center bg-black border-none"
          >
            <SheetClose>
              <NavItems />
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
