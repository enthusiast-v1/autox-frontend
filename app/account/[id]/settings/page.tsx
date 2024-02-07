'use client';
import { Heading } from '@/components/heading';
import { AlertModal } from '@/components/modals/alertModal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { ChangePasswordForm } from './components/changePasswordFrom';

const SettingsPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);

    // if (res?.data?._id) {
    //   toast.success('Store deleted successfully');
    //   router.push('/');
    // }

    // if (res?.error) {
    //   toast.error(res?.error?.message);
    // }

    setLoading(false);
    setOpen(false);
  };
  return (
    <div className="p-6 border shadow-md rounded-md">
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />

      <Heading title="Account settings" description="Manage your account" />

      <Separator />
      <ChangePasswordForm />

      <div className="mt-12">
        <h2 className="text-xl font-semibold mt-2 mb-4">Manage account</h2>
        <Button
          disabled={loading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          Delete Your Account
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
