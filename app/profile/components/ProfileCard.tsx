'use client';

import CustomImage from '@/components/customImage';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatDate } from 'date-fns';
import { Plus } from 'lucide-react';
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
    <div className="m-10 w-10/12 mx-auto">
      <div className="flex items-start justify-between ">
        <div>
          {' '}
          <h3 className="text-2xl font-bold">Your Profile</h3>
          <p>manage vehicle</p>
        </div>
        <Button onClick={() => router.push(`/profile/${profileData?.id}`)}>
          <Plus className="mr-2 h-4 w-4 " /> Edit Profile
        </Button>
      </div>
      <Separator />

      <div className="flex  items-center flex-col lg:flex-row  gap-7">
        <CustomImage
          src={profileData?.image}
          alt="profile image"
          className="w-64 mx-0 h-72"
        />
        <div className="flex items-center  flex-col lg:flex-row  gap-4 justify-around w-full">
          <div>
            <p className="font-bold text-xl mb-2">Basic Information</p>
            <span className="mr-24 font-bold py-2 w-48 inline-block">
              Name :{' '}
            </span>
            <span>
              {profileData.firstName} {profileData.lastName}{' '}
            </span>
            <div>
              <span className="mr-24 font-bold py-2 w-48 inline-block">
                Gender :{' '}
              </span>
              <span>{profileData?.gender} </span>
            </div>
            <span className="mr-24 font-bold py-2 w-48 inline-block">
              {' '}
              Date of Birth :{' '}
            </span>
            <span>{profileData?.dateOfBirth}</span>
          </div>
          <div>
            <p className="font-bold  text-xl mb-2 mt-6">Contact Information</p>

            <span className="mr-24 font-bold py-2 w-48 inline-block">
              {' '}
              Address :{' '}
            </span>
            <span>{profileData?.address}</span>
            <div>
              <span className="mr-24 font-bold py-2 w-48 inline-block">
                Contact NO{' '}
              </span>

              <span>{profileData?.contactNo}</span>
            </div>
            <div>
              <span className="mr-24 font-bold py-2 w-48 inline-block">
                {' '}
                Emergency Contact :{' '}
              </span>

              <span>{profileData?.emergContact}</span>
            </div>
            <span className="mr-24 font-bold py-2 w-48 inline-block">
              {' '}
              Join :{' '}
            </span>

            <span>
              {formatDate(new Date(profileData?.createdAt), 'MMMM do, yyyy')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
