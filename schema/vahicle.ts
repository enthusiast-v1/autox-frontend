import * as z from 'zod';

export const formSchema = z.object({
  model: z.string({ required_error: 'Model is required' }).min(1),
  mileage: z.coerce.number({ required_error: 'Mileage no is required' }).min(1),
  color: z.string({ required_error: 'Color is required' }).min(1),

  overview: z.string({ required_error: 'Overview  is required' }).min(1),
  basePrice: z.coerce
    .number({ required_error: 'Base price  is required' })
    .min(1),
  fuelType: z.string({ required_error: 'Fuel type  is required' }).min(1),
  passengerCapacity: z.coerce
    .number({
      required_error: 'Passenger capacity   is required',
    })
    .min(1),
  plateNo: z
    .string({
      required_error: 'Plate number  is required',
    })
    .min(1),
  chassisNo: z
    .string({
      required_error: 'Chassis No  is required',
    })
    .min(1),
  vehicleType: z
    .string({
      required_error: 'Vehicle Type No  is required',
    })
    .min(1),
  brand: z
    .string({
      required_error: 'Brand Id Type No  is required',
    })
    .min(1),
  year: z.string({ required_error: 'year  is required' }).min(1),
  registrationNumber: z
    .string({ required_error: 'registrationNumber  is required' })
    .min(1),
  rentalRate: z.coerce
    .number({ required_error: 'rentalRate  is required' })
    .min(1),
});
