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
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: 'driverId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Driver Id" />
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    accessorKey: 'Actions',
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
