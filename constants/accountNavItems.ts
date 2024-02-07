import { TSideNavItemsProps } from '@/types/common';
import { CalendarClock, Car, History, Settings, User } from 'lucide-react';
import { USER_ROLE } from './role';

const accountNavItems = ({
  role,
  params,
}: {
  role: string;
  params: { id: string };
}) => {
  const { id } = params;

  const defaultItems: TSideNavItemsProps = [
    // {
    //   title: 'Overview',
    //   label: '',
    //   link: '/account',
    //   key: 'overview',
    //   icon: LineChart,
    //   variant: 'ghost',
    // },
    {
      title: 'Profile',
      label: '',
      link: `/account/${id}`,
      key: 'profile',
      icon: User,
      variant: 'ghost',
    },
    // {
    //   title: 'Payments',
    //   label: '',
    //   link: `/account/${id}/payments`,
    //   key: 'payments',
    //   icon: CreditCard,
    //   variant: 'ghost',
    // },
  ];

  const customerSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    // {
    //   title: 'Coupons',
    //   label: '',
    //   link: `/account/${id}/coupons`,
    //   key: 'coupons',
    //   icon: Tag,
    //   variant: 'ghost',
    // },
    {
      title: 'Bookings',
      label: '',
      link: `/account/${id}/bookings`,
      key: 'bookings',
      icon: CalendarClock,
      variant: 'ghost',
    },
    {
      title: 'Trip History',
      label: '',
      link: `/account/${id}/history`,
      key: 'history',
      icon: History,
      variant: 'ghost',
    },
    // {
    //   title: 'Reviews',
    //   label: '',
    //   link: `/account/${id}/reviews`,
    //   key: 'reviews',
    //   icon: MessageSquare,
    //   variant: 'ghost',
    // },
    {
      title: 'Settings',
      label: '',
      link: `/account/${id}/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
    // {
    //   title: 'Help & feedback',
    //   label: '',
    //   link: `/account/${id}/feedback`,
    //   key: 'feedback',
    //   icon: HelpCircle,
    //   variant: 'ghost',
    // },
  ];

  const driverSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    {
      title: 'Trip Request',
      label: '',
      link: `/account/${id}/trip`,
      key: 'trip',
      icon: Car,
      variant: 'ghost',
    },
    {
      title: 'Trip History',
      label: '',
      link: `/account/${id}/history`,
      key: 'history',
      icon: History,
      variant: 'ghost',
    },
    // {
    //   title: 'Support',
    //   label: '',
    //   link: `/account/${id}/support`,
    //   key: 'support',
    //   icon: PhoneForwarded,
    //   variant: 'ghost',
    // },
    {
      title: 'Settings',
      label: '',
      link: `/account/${id}/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
  ];

  const stuffSidebarItems: TSideNavItemsProps = [
    ...defaultItems,

    {
      title: 'Settings',
      label: '',
      link: `/account/${id}/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
  ];

  if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  else if (role === USER_ROLE.ADMIN) return stuffSidebarItems;
  else {
    return defaultItems;
  }
};

export default accountNavItems;
