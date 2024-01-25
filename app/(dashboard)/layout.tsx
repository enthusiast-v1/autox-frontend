import { getUserInfo } from '@/services/auth.service';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const user = getUserInfo();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!user) {
    redirect('/login');
  }

  return <>{children}</>;
}
