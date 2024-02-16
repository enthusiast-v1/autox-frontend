type DriverDetailsProps = {
  params: { id: string };
};

const DriverDetails = ({ params: { id } }: DriverDetailsProps) => {
  return <div>driver details page. The driver id is : {id}</div>;
};

export default DriverDetails;
