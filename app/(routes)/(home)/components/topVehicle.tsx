'use client';

import car5 from '@/assets/auth-image.png';
import car2 from '@/assets/car-2.png';
import car3 from '@/assets/car-3.png';
import car4 from '@/assets/car-4.png';

import CustomImage from '@/components/customImage';
import { useState } from 'react';
import { Button } from '../../../../components/ui/button';

const TopVehicle = () => {
  const carFilterData = [
    {
      id: 1,
      name: 'Audi A1 S-line',
      image: car5,
      price: '60',
      model: 'golf 6',
      Mark: 'Volkswagen',
      Year: '2008',
      Doors: '4/5',
      AC: 'Yes',
      Tranmission: 'Manual',
      Fuel: 'Diesel',
    },
    {
      id: 2,
      name: 'Toyota Camry',
      image: car2,
      price: '50',
      model: 'Camry',
      Mark: 'Toyota',
      Year: '2006',
      Doors: '4/5',
      AC: 'Yes',
      Tranmission: 'Automatic',
      Fuel: 'Hybrid',
    },
    {
      id: 3,
      name: 'Audi A1 S-line',
      image: car3,
      price: '60',
      model: 'golf 6',
      Mark: 'Volkswagen',
      Year: '2008',
      Doors: '4/5',
      AC: 'Yes',
      Tranmission: 'Manual',
      Fuel: 'Diesel',
    },
    {
      id: 3,
      name: 'Audi A1 S-line',
      image: car4,
      price: '60',
      model: 'golf 6',
      Mark: 'Volkswagen',
      Year: '2008',
      Doors: '4/5',
      AC: 'Yes',
      Tranmission: 'Manual',
      Fuel: 'Diesel',
    },
    {
      id: 3,
      name: 'Audi A1 S-line',
      image: car5,
      price: '60',
      model: 'golf 6',
      Mark: 'Volkswagen',
      Year: '2008',
      Doors: '4/5',
      AC: 'Yes',
      Tranmission: 'Manual',
      Fuel: 'Diesel',
    },
  ];
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectedCar, setSelectedCar] = useState(carFilterData[0]);

  const handleFilter = (index: number) => {
    setActiveBtn(index);
    setSelectedCar(carFilterData[index]);
  };

  return (
    <section className="text-center py-28 bg-black text-white">
      <h3 className="uppercase text-md font-extrabold opacity-90">
        Meet The Fleet
      </h3>
      <h2 className="text-3xl font-bold mt-2">
        Our Most Popular Rental Vehicle
      </h2>

      <div className="grid grid-cols-5 justify-between md:flex-row p-10 my-6">
        <div className="col-span-1">
          {carFilterData.map((car, index) => (
            <Button
              key={car.id}
              onClick={() => handleFilter(index)}
              className={`flex flex-col justify-center items-center mb-4 text-center  font-bold py-4 px-10 w-full text-md text-white hover:bg-white hover:text-black ${index === activeBtn ? 'bg-white text-black' : 'bg-black border border-white'} transition-all`}
            >
              {car.name}
            </Button>
          ))}
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <CustomImage
            src={selectedCar.image}
            alt="top vehicle image"
            className="w-[400px]"
          />
        </div>
        <div className="col-span-1 w-60 mx-auto md:mx-0">
          <h1 className="bg-white text-black p-2 text-center rounded-md ">
            <span className="text-3xl font-bold"> ${selectedCar.price}</span>
            <span className="text-xl">/ rent per day</span>
          </h1>
          <div className="car-info grid grid-cols-1 text-lg">
            <li>
              <span>Model</span> {selectedCar.model}
            </li>
            <li>
              <span>Year</span> {selectedCar.Year}
            </li>
            <li>
              <span>Doors</span> {selectedCar.Doors}
            </li>
            <li>
              <span>AC</span> {selectedCar.AC}
            </li>
            <li>
              <span>Transmission</span>
              {selectedCar.Tranmission}
            </li>
            <li>
              <span>Fuel</span> {selectedCar.Fuel}
            </li>
          </div>
          <Button
            size={'lg'}
            className="w-full mt-4 bg-white hover:bg-black text-black hover:text-white hover:border hover:border-white shadow-sm shadow-white"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopVehicle;
