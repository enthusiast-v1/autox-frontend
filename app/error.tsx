'use client';

import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.refresh();
    router.push('/');
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-y-2">
      <h1 className="text-5xl md:text-6xl font-bold">500</h1>
      <h2 className="text-2xl md:text-3xl text-center">
        Internal Server Error!!!
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={handleBackToHome}>Return Home</Button>
        <div className="flex justify-center items-center">
          <Button onClick={handleBackToHome} variant={'secondary'}>
            Contact Support <User className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
