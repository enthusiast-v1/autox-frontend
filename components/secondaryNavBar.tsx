import { authKey } from '@/constants/authKey';
import { getBaseUrl } from '@/helpers/baseUrl';
import { CustomJwtPayload } from '@/types/common';
import { decodedToken } from '@/utils/jwtDecode';
import { getCookie } from 'cookies-next';
import { Bell, Search } from 'lucide-react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
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

const SecondaryNavBar = async () => {
  let data = {};

  const authToken = getCookie(authKey, { cookies });

  if (authToken) {
    const user = decodedToken(authToken as string) as CustomJwtPayload;

    data = await getUser(user.id);
  }
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

      <div className="flex items-center space-x-8">
        <Search strokeWidth={1} className="w-5 md:w-7 h-5 md:h-7 text-white" />

        <div className="relative">
          <Bell strokeWidth={1} className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <span className="absolute top-[-15%] right-[-10%] text-[8px] w-3 h-3 text-center font-semibold bg-white text-black rounded-full">
            0
          </span>
        </div>
        <UserProfile data={data} />
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
