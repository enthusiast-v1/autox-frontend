/* eslint-disable @typescript-eslint/no-explicit-any */
import { Separator } from './separator';

const Heading = ({ title }: any) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl  font-bold">{title}</h3>
      <Separator />
    </div>
  );
};

export default Heading;
