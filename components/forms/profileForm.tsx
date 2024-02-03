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
  firstName: z.string({ required_error: 'License no is required' }).min(1),
  lastName: z.string({ required_error: 'Expire date is required' }).min(1),
  gender: z.string({ required_error: 'Expire date is required' }).min(1),
  dateOfBirth: z.string({ required_error: 'NID no is required' }).min(1),
  address: z.string({ required_error: 'NID no is required' }).min(1),
  image: z.string({ required_error: 'Status is required' }),
  contactNo: z.string({ required_error: 'User id is required' }).min(1),
  emergContact: z.string({ required_error: 'User id is required' }).min(1),
  userId: z.string({ required_error: 'User id is required' }).min(1),
});

type ProfileFormValues = z.infer<typeof formSchema>;

const ProfileForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(formSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  function onSubmit(values: ProfileFormValues) {}
  return (
    <div className="p-4 w-2/3 mx-auto">
      <h3 className="text-2xl pb-4  mb-10 border-b-2">Create Profile</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frist Name</FormLabel>
                  <FormControl>
                    <Input placeholder="frist name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="last name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>select profile image</FormLabel>
                  <FormControl>
                    <Input type="file" placeholder="image" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
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
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birthday</FormLabel>
                  <FormControl>
                    <Input
                      type="datetime"
                      placeholder="birth date"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="contact number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emergContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emergency Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="emergency contact" {...field} />
                  </FormControl>

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
          <Button type="submit">Create Profile</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
