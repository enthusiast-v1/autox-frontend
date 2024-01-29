'use client';

import car from '@/assets/audicar.jpg';
import car1 from '@/assets/car.jpg';
import phoneImage from '@/assets/mobile.png';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';

const CarFilter = () => {
  const carFilterData = [
    {
      id: 1,
      name: 'Audi A1 S-line',
      image: phoneImage,
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
      image: car,
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
      image: car1,
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
    <section>
      <div className="text-center mb-10">
        <p className="font-bold text-xl">Vehicles Models</p>
        <h3 className="font-bold text-4xl my-2">Our Rental Fleet</h3>
        <p className="w-1/2 mx-auto">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>

      <div className="flex flex-col  justify-between md:flex-row">
        <div>
          {carFilterData.map((car, index) => (
            <button
              key={car.id}
              onClick={() => handleFilter(index)}
              className={`flex flex-col justify-center items-center mb-4 text-center  font-bold py-4 px-10 w-full  text-xl hover:bg-destructive hover:text-white ${index === activeBtn ? 'bg-destructive text-white' : 'bg-[#e9e9e9]'} transition-all`}
            >
              {car.name}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={selectedCar.image}
            width={450}
            height={450}
            alt="Picture of the car"
          />
        </div>
        <div className="w-60 mx-auto md:mx-0">
          <p className="bg-destructive text-white p-2 text-center ">
            <span className="text-3xl font-bold"> ${selectedCar.price}</span>
            <span className="text-xl">/ rent per day</span>
          </p>
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
            className="w-full mt-4 font-bold "
            variant={'destructive'}
          >
            RESERVE NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarFilter;
