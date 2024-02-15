/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Heading } from '@/components/heading';
import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { useGetAllVehicleQuery } from '@/redux/api/vehicleApi';
import { formatDate } from 'date-fns';

import Loading from '../loading';
import { Vehicle, columns } from './columns';
import AddAVehicle from './add-a-vehicle';

export const VehicleClient = () => {
  const { data, isLoading } = useGetAllVehicleQuery({});
  if (isLoading) {
    return <Loading />;
  }
  const formattedVehicles: Vehicle[] = data.map((item: any) => ({
    id: item.id,
    model: item.model,
    mileage: item.mileage,
    color: item.color,
    images: item.images,
    overview: item.overview,
    basePrice: item.basePrice,
    fuelType: item.fuelType,
    passengerCapacity: item.passengerCapacity,
    location: item.location,
    plateNo: item.plateNo,
    chassisNo: item.chassisNo,
    status: item.status,
    owner: item.owner,
    vehicleType: item.vehicleType,
    brand: item.brand,
    createdAt: formatDate(new Date(item?.createdAt), 'MMMM do, yyyy'),
  }));

  return (
    <div className="m-4">
      <div className="flex items-center justify-between">
        <Heading
          title={`Vehicle (${formattedVehicles?.length})`}
          description="Manage your vehicles"
        />
        <AddAVehicle />
      </div>
      <Separator />
      <div className="p-2 border rounded-md shadow-sm">
        <DataTable
          searchKey="model"
          columns={columns}
          data={formattedVehicles}
        />
      </div>
    </div>
  );
};
