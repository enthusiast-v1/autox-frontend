'use client';
import { DataTableColumnHeader } from '@/components/ui/columHeader';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type Driver = {
  id?: string;
  driverId?: string;
  licenseNo?: string;
  licenseExpire?: string;
  nidNo?: string;
  status?: string;
  userId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const columns: ColumnDef<Driver>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'licenseNo',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="licenseNo" />
    ),
  },
  {
    accessorKey: 'driverId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver Id" />
    ),
  },
  {
    accessorKey: 'licenseExpire',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="License Expire" />
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
