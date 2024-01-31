'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import Loader from '@/components/loader';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { times } from '@/constants/timeList';

const formSchema = z.object({
  pickUpLocation: z.string({ required_error: 'Location is required' }),
  pickUpDate: z.string({ required_error: 'Date is required' }),
  pickUpTime: z.string({ required_error: 'Time is required' }),
  dropOffLocation: z.string({ required_error: 'Location is required' }),
  dropOffDate: z.string({ required_error: 'Date is required' }),
  dropOffTime: z.string({ required_error: 'Time is required' }),
  vehicleType: z.string().optional(),
  driverRequired: z.boolean().optional(),
});

type dailyBookingFormValues = z.infer<typeof formSchema>;

const DailyBookingForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<dailyBookingFormValues>({
    resolver: zodResolver(formSchema),
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
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <FormField
              control={form.control}
              name="pickUpLocation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Pick-up location"
                      {...field}
                    />
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
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Drop-off location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pickUpTime"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Pick-up time"
                        />
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
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Pick-up time"
                        />
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
              name="driverRequired"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Archived</FormLabel>
                    <FormDescription>
                      This product will not appear anywhere in the store
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {loading ? (
              <>
                Book Now
                <Loader />
              </>
            ) : (
              <>Book Now</>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default DailyBookingForm;
