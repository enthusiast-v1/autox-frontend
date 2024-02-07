'use client';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { DataTable } from '@/components/ui/dataTable';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Vehicle, columns } from './columns';

const data = [
  {
    id: '01',
    vehicleId: 'ABC123',
    model: 'Toyota Corolla',
    mileage: 5000.5,
    color: 'Blue',
    images: ['image1.jpg', 'image2.jpg'],
    overview: 'This is a well-maintained vehicle.',
    basePrice: 20000,
    fuelType: 'Petrol',
    passengerCapacity: 5,
    location: 'New York',
    plateNo: 'XYZ456',
    chassisNo: '1234567890',
    status: 'Available',
    owner: 'John Doe',
    vehicleType: 'Sedan',
    brand: 'Toyota',
    driverId: '1',
    createdAt: '2024-02-05T12:00:00Z',
    updatedAt: '2024-02-05T12:00:00Z',
  },
  {
    id: '01',
    vehicleId: 'DEF456',
    model: 'Honda Civic',
    mileage: 3000.8,
    color: 'Red',
    images: ['image3.jpg', 'image4.jpg'],
    overview: 'This vehicle is in excellent condition.',
    basePrice: 18000,
    fuelType: 'Diesel',
    passengerCapacity: 4,
    location: 'Los Angeles',
    plateNo: 'ABC789',
    chassisNo: '0987654321',
    status: 'Available',
    owner: 'Jane Smith',
    vehicleType: 'Sedan',
    brand: 'Honda',
    driverId: '2',
    createdAt: '2024-02-04T10:00:00Z',
    updatedAt: '2024-02-04T15:30:00Z',
  },
];

export const VehicleTable = () => {
  const router = useRouter();
  const formattedVehicles: Vehicle[] = data.map(item => ({
    id: item.id,
    vehicleId: item.vehicleId,
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
    driverId: item.driverId,
    createdAt: formatDate(new Date(item?.createdAt), 'MMMM do, yyyy'),
  }));

  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          {' '}
          <h3 className="text-2xl font-bold">{`Vehicle(${formattedVehicles?.length})`}</h3>
          <p>manage vehicle</p>
        </div>
        <Button onClick={() => router.push(`/dashboard/vehicle/new`)}>
          <Plus className="mr-2 h-4 w-4 " /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="owner" columns={columns} data={formattedVehicles} />
    </>
  );
};
