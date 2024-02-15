'use client';

import { useGetSingleVehicleQuery } from '@/redux/api/vehicleApi';

type VehicleDetailsProps = {
  params: { id: string };
};

// page design assigned to @Ahmed Musa

const VehicleDetails = ({ params: { id } }: VehicleDetailsProps) => {
  const { data, isLoading } = useGetSingleVehicleQuery(id);

  console.log('SINGLE VEHICLE', data);

  if (isLoading) return <p>Loading...</p>;

  return <div>Vehicle details page is here {id}</div>;
};

export default VehicleDetails;
