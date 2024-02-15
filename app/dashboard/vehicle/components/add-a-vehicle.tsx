/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { Textarea } from '@/components/ui/textarea';
import { useCreateVehicleMutation } from '@/redux/api/vehicleApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { formSchema } from '@/schema/vahicle';
import { ScrollArea } from '@/components/ui/scroll-area';
import { fuelTypes, vehicleBrands, vehicleTypes } from '@/constants/vehicle';
import { TFuelType, TVehicleBrand, TVehicleType } from '@/types/vehicle';
import { toast } from 'sonner';

type VehicleFormValues = z.infer<typeof formSchema>;

const AddAVehicle = () => {
  const [createVehicle] = useCreateVehicleMutation();

  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: VehicleFormValues) => {
    try {
      const res = await createVehicle(data);

      if (res) toast.success('Vehicle added successfully');
    } catch (error) {
      console.log('Error form add vehicle on submit --> ', error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add a vehicle
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-max">
        <ScrollArea className="h-screen w-[700px] rounded-md border my-10">
          <AlertDialogHeader>
            <AlertDialogTitle>Add a vehicle</AlertDialogTitle>
          </AlertDialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 border shadow-sm p-6 rounded-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1 */}
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. X Corolla" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 2 */}
                <FormField
                  control={form.control}
                  name="mileage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mileage</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Ex. 8 km/l"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 3 */}
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. Blue" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 4 */}
                <FormField
                  control={form.control}
                  name="basePrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Base price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Ex. 8,00,000"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 5 */}
                <FormField
                  control={form.control}
                  name="fuelType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {fuelTypes.map((fuelType: TFuelType) => (
                            <SelectItem key={fuelType} value={fuelType}>
                              {fuelType}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 6 */}
                <FormField
                  control={form.control}
                  name="passengerCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Passenger Capacity</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex. 6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 7 */}
                <FormField
                  control={form.control}
                  name="plateNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plate number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex. Dhaka - Ga, 12-1212"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 8 */}
                <FormField
                  control={form.control}
                  name="chassisNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chassis number</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. SV30-0169266" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 9 */}
                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicleTypes.map((vehicleType: TVehicleType) => (
                            <SelectItem key={vehicleType} value={vehicleType}>
                              {vehicleType}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 10 */}
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a brand" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {vehicleBrands.map((vehicleBrand: TVehicleBrand) => (
                            <SelectItem key={vehicleBrand} value={vehicleBrand}>
                              {vehicleBrand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 11 */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. 2024" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 12 */}
                <FormField
                  control={form.control}
                  name="registrationNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration number</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex. DHAKA-D-11-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 13 */}
                <FormField
                  control={form.control}
                  name="rentalRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rental rate</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Ex. 10,000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* 14 */}
                <FormField
                  control={form.control}
                  name="overview"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Overview</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write something about this vehicle"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Button type="submit">Add</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </Form>
        </ScrollArea>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddAVehicle;
