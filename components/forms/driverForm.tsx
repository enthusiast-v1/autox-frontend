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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  licenseNo: z.string({ required_error: 'License no is required' }).min(1),
  licenseExpire: z.string({ required_error: 'Expire date is required' }).min(1),
  nidNo: z.string({ required_error: 'NID no is required' }).min(1),
  status: z.string({ required_error: 'Status is required' }),
  userId: z.string({ required_error: 'User id is required' }).min(1),
});

type DriverFormValues = z.infer<typeof formSchema>;

const DriverForm = () => {
  const form = useForm<DriverFormValues>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: DriverFormValues) {
    console.log(values);
  }
  return (
    <div className="p-4 w-2/3 mx-auto">
      <h3 className="text-2xl pb-4 mb-10 border-b-2">Create Driver</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <FormLabel>NID NO</FormLabel>
                  <FormControl>
                    <Input type="date" placeholder="NID No" {...field} />
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
          <Button type="submit">Create Driver</Button>
        </form>
      </Form>
    </div>
  );
};

export default DriverForm;
