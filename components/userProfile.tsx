'use client';

import { authKey } from '@/constants/authKey';
import { removeUserInfo } from '@/services/auth.service';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import CustomImage from './customImage';
import { Avatar } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function UserProfile({
  data,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}) {
  const router = useRouter();

  const handleSignOut = () => {
    removeUserInfo(authKey);
    toast.success('Signed out successfully');
    router.push('/signIn');
  };

  return (
    <DropdownMenu>
      {data?.image ? (
        <DropdownMenuTrigger asChild>
          <Avatar>
            <CustomImage src={data?.image} alt="user image" priority={true} />
          </Avatar>
        </DropdownMenuTrigger>
      ) : (
        <Link href={'/login'}>
          <Button variant={'outline'}>Login</Button>
        </Link>
      )}

      <DropdownMenuContent className=" w-48 mt-2 mr-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile`}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>

          <Link href={`/settings`}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSignOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
