'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { addDays, format } from 'date-fns';

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

import Loader from '@/components/loader';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { times } from '@/constants/timeList';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const formSchema = z.object({
  pickUpLocation: z.string({ required_error: '' }),

  pickUpTime: z.string({ required_error: '' }),
  dropOffLocation: z.string({ required_error: '' }),

  dropOffTime: z.string({ required_error: '' }),
  vehicle: z.string({ required_error: '' }),
  driverRequired: z.string({ required_error: '' }),

  pickUpDate: z
    .date({ required_error: '' })
    .refine(
      data => data > addDays(new Date(), -1),
      'Date must be in the future',
    ),

  dropOffDate: z
    .date({ required_error: '' })
    .refine(
      data => data > addDays(new Date(), -1),
      'Date must be in the future',
    ),
});

type dailyBookingFormValues = z.infer<typeof formSchema>;

const DailyBookingForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<dailyBookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickUpLocation: undefined,
      dropOffLocation: undefined,
      pickUpDate: undefined,
      dropOffDate: undefined,
      pickUpTime: undefined,
      dropOffTime: undefined,
      driverRequired: 'driver',
    },
  });

  const onSubmit = async () => {
    setLoading(true);

    // if (initialData) {
    //   const res: any = await updateProduct({ id, data });

    //   if (res?.data?._id) {
    //     router.push(`/${params.storeId}/products`);
    //     toast.success('Product updated successfully');
    //   } else if (res?.error) {
    //     toast.error(res?.error?.message);
    //   }
    // } else {
    //   data.storeId = storeId as string;

    //   const res: any = await createProduct(data);

    //   if (res?.data?._id) {
    //     router.push(`/${params.storeId}/products`);
    //     toast.success('Product created successfully');
    //   } else if (res?.error) {
    //     toast.error(res?.error?.message);
    //   }
    // }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-md p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="grid md:grid-cols-7 gap-2 md:gap-4">
            <div className="col-span-2 space-y-[6px]">
              <FormField
                control={form.control}
                name="pickUpLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pick-up location</FormLabel>
                    <FormControl>
                      <Input disabled={loading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dropOffLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drop-off location</FormLabel>
                    <FormControl>
                      <Input disabled={loading} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2 items-center">
              <FormField
                control={form.control}
                name="pickUpDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pick-up date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              <>
                                <CalendarIcon className="mr-2 h-4 w-4" />{' '}
                                {format(field.value, 'PPP')}
                              </>
                            ) : (
                              <></>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dropOffDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drop-off date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full justify-start text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              <>
                                <CalendarIcon className="mr-2 h-4 w-4" />{' '}
                                {format(field.value, 'PPP')}
                              </>
                            ) : (
                              <></>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1 items-center space-y-2">
              <FormField
                control={form.control}
                name="pickUpTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pick-up time</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {times?.map(t => (
                          <SelectItem key={t.id} value={t.time}>
                            {t.time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dropOffTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Drop-off date</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {times?.map(t => (
                          <SelectItem key={t.id} value={t.time}>
                            {t.time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2 items-center space-y-2">
              <FormField
                control={form.control}
                name="vehicle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose a vehicle</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="BMW-e4">BMW-e4 - 4p</SelectItem>
                        <SelectItem value="BMW-e5">BMW-e5 - 6p</SelectItem>
                        <SelectItem value="BMW-e6">BMW-e6 - 8p</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="driverRequired"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cutomized option</FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="driver">Need driver</SelectItem>
                        <SelectItem value="self">Self drive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button disabled={loading} className="w-[27%]" type="submit">
              {loading ? (
                <>
                  Book Now
                  <Loader />
                </>
              ) : (
                <>Book Now</>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DailyBookingForm;
