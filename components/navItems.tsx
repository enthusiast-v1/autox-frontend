'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type NavItemsProps = {
  onClose: () => void;
};

export function NavItems({ onClose }: NavItemsProps) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/reservations`,
      label: 'Reservations',
      active: pathname === `/reservations`,
    },
    {
      href: `/special-offers`,
      label: 'Special Offers',
      active: pathname === `/special-offers`,
    },
  ];

  return (
    <div className="flex flex-col  md:flex-row md:items-center space-y-1 md:space-y-0 px-2 md:px-0 pb-3 md:pb-0 mt-0 md:mt-2 pt-2 md:pt-0 md:space-x-[2px] mx-2 ">
      {routes.map(route => (
        <Link
          onClick={onClose}
          key={route.href}
          href={route.href}
          className={cn(
            'hover:bg-slate-700 rounded-md py-2 text-sm px-2 font-medium transition-colors',
            route.active ? 'bg-white text-black' : 'text-white',
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}
