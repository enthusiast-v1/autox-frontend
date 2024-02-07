'use client';

import CustomImage from '@/components/customImage';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';
import { Plus, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const profileData = {
  id: 'd4b64e37-ff3b-4d62-89b6-2a25b7e2b6a1',
  firstName: 'John',
  lastName: 'Doe',
  gender: 'Male',
  dateOfBirth: '20 july 2020',
  address: '123 Main St, Cityville, State',
  image:
    'https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D',
  contactNo: '+1234567890',
  emergContact: '+1987654321',
  userId: '3b0d721b-d9b4-4b5a-9c90-5d430d0b0885',
  createdAt: new Date('2024-02-05T12:34:56.789Z'),
  updatedAt: new Date('2024-02-05T12:34:56.789Z'),
};

const ProfileCard = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          {' '}
          <CustomImage
            src={profileData?.image}
            alt="profile image"
            className="h-20 w-20 rounded-full"
          />
          <div>
            {' '}
            <h3 className="text-2xl font-bold">
              {' '}
              {profileData.firstName} {profileData.lastName}{' '}
            </h3>
            <p className="flex items-center gap-2 text-sm ">
              <UserPlus />
              {formatDate(new Date(profileData?.createdAt), 'MMMM do, yyyy')}
            </p>
          </div>
        </div>

        <Button
          onClick={() => router.push(`/account/profile/${profileData?.id}`)}
        >
          <Plus className="mr-2 h-4 w-4 " /> Edit Profile
        </Button>
      </div>

      <Separator />

      <div className="border-2 p-5 md:p-10 rounded-lg ">
        <p className="border-b-2 border-black border-dashed pb-4 font-bold text-2xl mb-8">
          Basic Information
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center w-full">
          <div>
            <p className="mb-2">Full Name</p>
            <p className="font-bold">
              {' '}
              {profileData.firstName} {profileData.lastName}{' '}
            </p>
            <p className="mb-2 mt-6"> Date of Birth </p>
            <p className="font-bold">
              {' '}
              {formatDate(new Date(profileData?.createdAt), 'MMMM do, yyyy')}
            </p>
          </div>
          <div>
            <p className="mb-2 "> Gender </p>
            <p className="font-bold">{profileData.gender}</p>
            <p className="mb-2 mt-6"> userId </p>
            <p className="font-bold">{profileData.userId}</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-2 p-5 md:p-10 rounded-lg ">
        <p className="border-b-2 border-black border-dashed pb-4 font-bold text-2xl mb-8">
          Contact Information
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center w-full">
          <div>
            <p className="mb-2">Address </p>
            <p className="font-bold"> {profileData.address}</p>
            <p className="mb-2 mt-6"> Contact NO </p>
            <p className="font-bold">{profileData.contactNo}</p>
          </div>
          <div>
            <p className="mb-2 "> Emergency Contact </p>
            <p className="font-bold">{profileData.emergContact}</p>
            <p className="mb-2 mt-6"> Join </p>
            <p className="font-bold">
              {' '}
              {formatDate(new Date(profileData?.createdAt), 'MMMM do, yyyy')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
