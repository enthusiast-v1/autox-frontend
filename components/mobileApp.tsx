/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import phoneImage from '@/assets/mobile.png';
import Image from 'next/image';
import { Button } from './ui/button';

const MobileApp = () => {
  const playStore = (
    <svg
      height={28}
      width={28}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 274"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m188.81319 178.874645c32.459028-17.822918 57.067107-31.403792 59.188129-32.459027 6.785161-3.608904 13.791921-13.15878 0-20.577082-4.453091-2.332069-28.42803-15.490849-59.188129-32.4590268l-42.642044 43.0641388z"
        fill="#ffd900"
      />
      <path
        d="m146.171146 136.443648-135.7770817 136.842869c3.1868096.422094 6.7851608-.422094 11.0272053-2.754164 8.906183-4.875185 103.3180544-56.433965 167.3919204-91.647155z"
        fill="#f43249"
      />
      <path
        d="m146.171146 136.443648 42.642044-42.8530918s-157.8420441-86.13882935-167.3919204-91.22506183c-3.5983512-2.13157461-7.6293487-2.76471558-11.2382523-2.13157461z"
        fill="#00ee76"
      />
      <path
        d="m146.171146 136.443648-135.9881287-136.20972824c-5.5188788 1.27683429-10.1830173 6.15201978-10.1830173 16.12399014v240.8046171c0 9.127782 3.60890354 15.701896 10.3940643 16.335037z"
        fill="#00d3ff"
      />
    </svg>
  );
  const apple = (
    <svg
      height={28}
      width={28}
      viewBox="0 0 384 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <path d="m318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8.9-115.1 44.5-115.1 133.2q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center">
      <div className=" md:w-3/6 ">
        <h3 className="text-lg md:text-4xl font-bold">
          Download our app to get most out of the products.
        </h3>
        <p className="my-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ab vero
          et eligendi rem unde fuga recusandae quo quibusdam, pariatur
          accusantium obcaecati.
        </p>
        <div className="flex gap-4 flex-col  sm:flex-row ">
          <Button size={'md'}>
            <div className="flex items-center gap-4">
              <div>{playStore}</div>
              <div className="text-start">
                <p>Get The Name</p>
                <p>App Store</p>
              </div>
            </div>
          </Button>

          <Button size={'md'} variant="destructive">
            <div className="flex items-center gap-4">
              <div> {apple}</div>
              <div className="text-start">
                <p>Get The Name</p>
                <p>App Store</p>
              </div>
            </div>
          </Button>
        </div>
      </div>

      <div></div>
      <Image
        src={phoneImage}
        width={450}
        height={450}
        alt="Picture of the author"
      />
    </section>
  );
};

export default MobileApp;
