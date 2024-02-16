import { z } from 'zod';

export const formSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z.string({ required_error: 'Email is required' }).email(),
  address: z.string({ required_error: 'Address is required' }),
  contactNo: z.string({ required_error: 'Contact no is required' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, { message: 'Password must be 6 or more long' }),
  gender: z.string({ required_error: 'Gender is required' }).optional(),
  licenseNo: z.string({ required_error: 'license  no is required' }).min(1),
  nidNo: z.string({ required_error: 'NID no is required' }).min(1),
});
