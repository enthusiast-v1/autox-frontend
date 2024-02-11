import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import accountNavItems from '@/constants/accountNavItems';
import dashboardNavItems from '@/constants/dashboardNavItems';
import { usePathname } from 'next/navigation';

const SideBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  //   const { role } = getClientUserInfo();

  const role = 'admin';

  const sideNavItems = pathname.startsWith('/dashboard')
    ? dashboardNavItems({ role })
    : accountNavItems({ role });

  return (
    <div
      className={cn(
        'h-screen sticky left-0 top-0 bottom-0 overflow-auto',
        className,
      )}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <nav className="space-y-4">
            {sideNavItems?.map(item => (
              <Link key={item.key} href={item.link}>
                <Button
                  variant={`${pathname === item.link ? 'secondary' : 'ghost'}`}
                  className="w-full justify-start my-[2px]"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
