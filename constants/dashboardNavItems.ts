import { TSideNavItemsProps } from '@/types/common';
import { Car, KanbanSquare, LineChart, User } from 'lucide-react';
import { USER_ROLE } from './role';

const dashboardNavItems = ({
  role,
  params,
}: {
  role: string;
  params: { id: string };
}) => {
  const { id } = params;

  const defaultItems: TSideNavItemsProps = [
    {
      title: 'Overview',
      label: '',
      link: `/dashboard/${id}`,
      key: 'overview',
      icon: LineChart,
      variant: 'ghost',
    },
  ];

  const superAdminSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    {
      title: 'Manage Booking',
      label: '',
      link: `/dashboard/${id}/booking`,
      key: 'booking',
      icon: KanbanSquare,
      variant: 'ghost',
    },
    {
      title: 'Manage Driver',
      label: '',
      link: `/dashboard/${id}/driver`,
      key: 'driver',
      icon: User,
      variant: 'ghost',
    },
    {
      title: 'Manage Vehicle',
      label: '',
      link: `/dashboard/${id}/vehicle`,
      key: 'vehicle',
      icon: Car,
      variant: 'ghost',
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return superAdminSidebarItems;
  else {
    return defaultItems;
  }
};

export default dashboardNavItems;
