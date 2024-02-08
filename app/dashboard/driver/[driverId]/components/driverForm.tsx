'use client';

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
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Heading } from '../../../../../components/heading';

//dummy data
const initialData = {
  licenseNo: 'DL123456',
  licenseExpire: '2025-05-15T00:00:00Z',
  nidNo: '1234567890',
  status: 'Accident',
  userId: 'U123',
  createdAt: '2024-02-04T12:00:00Z',
  updatedAt: '2024-02-04T12:00:00Z',
};

const formSchema = z.object({
  licenseNo: z.string({ required_error: 'License no is required' }).min(1),
  licenseExpire: z.string({ required_error: 'Expire date is required' }).min(1),
  nidNo: z.string({ required_error: 'NID no is required' }).min(1),
  status: z.string({ required_error: 'Status is required' }),
  userId: z.string({ required_error: 'User id is required' }).min(1),
});

type DriverFormValues = z.infer<typeof formSchema>;

const DriverForm = () => {
  const [loading, setLoading] = useState(false);

  const title = initialData ? 'Edit driver' : 'Create driver';
  const description = initialData
    ? 'Update driver infomation'
    : 'Add a new driver';

  const action = initialData ? 'Save changes' : 'Create';

  const defaultValues = {
    licenseNo: initialData?.licenseNo,
    licenseExpire: initialData?.licenseExpire
      ? new Date(initialData.licenseExpire).toISOString().split('T')[0]
      : '',
    nidNo: initialData?.nidNo,
    status: initialData?.status,
    userId: initialData?.userId,
  };
  const form = useForm<DriverFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  function onSubmit(values: DriverFormValues) {
    setLoading(true);
    console.log(values);
    if (initialData) {
      console.log('update');
    } else {
      console.log('create');
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="licenseNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License NO</FormLabel>
                  <FormControl>
                    <Input placeholder="liscense no" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="licenseExpire"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Expire</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="license expire "
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nidNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NID NO</FormLabel>
                  <FormControl>
                    <Input placeholder="NID No" {...field} />
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
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Id</FormLabel>
                  <FormControl>
                    <Input placeholder="user id" {...field} />
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

export default DriverForm;
