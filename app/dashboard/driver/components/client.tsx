/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Heading } from '@/components/heading';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';

import { formatDate } from 'date-fns';
import Loading from '../loading';
import { Driver, columns } from './columns';
import { useGetAllDriverQuery } from '@/redux/api/driverApi';
import AddADriver from './add-a-driver';

const DriverClient = () => {
  const { data, isLoading } = useGetAllDriverQuery({});

  if (isLoading) {
    return <Loading />;
  }
  const formattedVehicles: Driver[] = data?.map((item: any) => ({
    ...item,
    email: item?.user?.email,
    createdAt: formatDate(new Date(item?.createdAt), 'MMMM do, yyyy'),
  }));

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <Heading
          title={`Drivers (${formattedVehicles?.length})`}
          description="Manage your drivers"
        />
        <AddADriver />
      </div>
      <Separator />
      <div className="p-2 border rounded-md shadow-sm">
        <DataTable
          searchKey="driverId"
          columns={columns}
          data={formattedVehicles}
        />
      </div>
    </div>
  );
};

export default DriverClient;
