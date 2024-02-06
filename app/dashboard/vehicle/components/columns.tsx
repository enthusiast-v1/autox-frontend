'use client';
import { DataTableColumnHeader } from '@/components/ui/columHeader';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type Vehicle = {
  id?: string;
  vehicleId?: string;
  model?: string;
  mileage?: number;
  color?: string;
  images?: string[];
  overview?: string;
  basePrice?: number;
  fuelType?: string;
  passengerCapacity?: number;
  location?: string;
  plateNo?: string;
  chassisNo?: string;
  status?: string;
  owner?: string;
  vehicleType?: string;
  brand?: string;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    accessorKey: 'model',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    accessorKey: 'color',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="color" />
    ),
  },
  {
    accessorKey: 'owner',
    header: 'Owner',
  },
  {
    accessorKey: 'brand',
    header: 'Brand',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
