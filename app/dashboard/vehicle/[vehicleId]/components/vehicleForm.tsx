'use client';

import { Heading } from '@/components/heading';
import ImageUpload from '@/components/imageUpload';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const initialData = {
  vehicleId: 'V123',
  model: 'Toyota Corolla',
  mileage: 50000.5,
  color: 'Blue',
  images: [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww',
  ],

  overview: 'Well-maintained sedan with spacious interior',
  basePrice: 25000,
  fuelType: 'Petrol',
  passengerCapacity: 5,
  location: 'New York',
  plateNo: 'ABC123',
  chassisNo: '12345678901234567',
  status: 'Available',
  owner: 'John Doe',
  vehicleType: 'Sedan',
  brand: 'Toyota',
  driverId: 'D1234',
  createdAt: '2024-02-04T10:00:00Z',
  updatedAt: '2024-02-04T10:00:00Z',
};

const formSchema = z.object({
  vehicleId: z.string({ required_error: 'Vehicle Id is required' }).min(1),
  model: z.string({ required_error: 'Model is required' }).min(1),
  mileage: z.coerce.number({ required_error: 'Mileage no is required' }).min(1),
  color: z.string({ required_error: 'Color is required' }).min(1),
  images: z.string({ required_error: 'Status is required' }),
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
  location: z
    .string({
      required_error: 'Location   is required',
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
  status: z
    .string({
      required_error: 'status No  is required',
    })
    .min(1),
  owner: z
    .string({
      required_error: 'status No  is required',
    })
    .min(1),
  vehicleType: z
    .string({
      required_error: 'Vehicle Type No  is required',
    })
    .min(1),
  driverId: z
    .string({
      required_error: 'Driver Id Type No  is required',
    })
    .min(1),
  brandId: z
    .string({
      required_error: 'Brand Id Type No  is required',
    })
    .min(1),
});

type VehicleFormValues = z.infer<typeof formSchema>;

const VehicleForm = () => {
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    vehicleId: initialData?.vehicleId,
    model: initialData?.model,
    mileage: initialData?.mileage,
    color: initialData?.color,
    images: initialData?.images[0],
    overview: initialData?.overview,
    basePrice: initialData?.basePrice,
    fuelType: initialData?.fuelType,
    passengerCapacity: initialData?.passengerCapacity,
    location: initialData?.location,
    plateNo: initialData?.plateNo,
    chassisNo: initialData?.chassisNo,
    status: initialData?.status,
    owner: initialData?.owner,
    vehicleType: initialData?.vehicleType,
    driverId: initialData?.driverId,
    brandId: 'sgd',
  };
  const title = initialData ? 'Edit vehicle' : 'Create vehicle';
  const description = initialData
    ? 'Update vehicle infomation'
    : 'Add a new vehicle';

  const action = initialData ? 'Save changes' : 'Create';

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: VehicleFormValues) {
    setLoading(true);
    console.log(values);
    if (initialData) {
      console.log('update a vehicle');
    } else {
      console.log('create a vehicle');
    }

    setLoading(false);
  }
  return (
    <div className="m-4">
      <Heading title={title} description={description} />
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 border shadow-sm p-6 rounded-md"
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    onChange={url => field.onChange(url)}
                    onRemove={() => field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="vehicleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Id</FormLabel>
                  <FormControl>
                    <Input placeholder="vehicle Id" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="model" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mileage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mileage</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Input placeholder="color" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overview</FormLabel>
                  <FormControl>
                    <Textarea placeholder="overview" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="basePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="select fuel type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="LPG">LPG</SelectItem>
                      <SelectItem value="CNG">CNG</SelectItem>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Diesel"> Diesel</SelectItem>
                      <SelectItem value="Gasoline"> Gasoline</SelectItem>
                      <SelectItem value="Kerosene"> Kerosene</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passengerCapacity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passenger Capacity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="location" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plateNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plate NO</FormLabel>
                  <FormControl>
                    <Input placeholder="plate No" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="chassisNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chassis No</FormLabel>
                  <FormControl>
                    <Input placeholder="chassis No" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="select status"
                          defaultValue={'Available'}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Availavle">Availavle</SelectItem>
                      <SelectItem value="In_A_Trip">In_A_Trip</SelectItem>
                      <SelectItem value="Accident">Accident</SelectItem>
                      <SelectItem value="On_Vacation"> On_Vacation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input placeholder="owner" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <FormControl>
                    <Input placeholder="vehicle type" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="driverId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Driver Id</FormLabel>
                  <FormControl>
                    <Input placeholder="driver id" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand Id</FormLabel>
                  <FormControl>
                    <Input placeholder="brand id" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                {action}
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              action
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default VehicleForm;
