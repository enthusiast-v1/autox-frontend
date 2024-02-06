import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { authKey } from '@/constants/authKey';
import { getBaseUrl } from '@/helpers/baseUrl';
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

async function getUser(id: string) {
  const res = await fetch(`${getBaseUrl()}/profile/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return await res.json();
}

const NavBar = async () => {
  let data = {};

  const authToken = getCookie(authKey, { cookies });

  if (authToken) {
    const user = decodedToken(authToken as string) as CustomJwtPayload;

    data = await getUser(user.id);
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
        <UserProfile data={data} />
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
