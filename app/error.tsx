'use client';

import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex justify-center p-2 items-center flex-col h-screen gap-y-2">
      <h2 className="text-4xl sm:text-6xl font-bold">500</h2>
      <h2 className="text-2xl sm:text-4xl text-center">
        Internal Server Error
      </h2>
      <p className="text-gray-700 text-center">
        The server encountered an internal error. Please try again later.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          className="bg-black text-white py-1 px-2 rounded flex items-center gap-2"
          href="/"
        >
          Return Home
        </Link>
        <Link
          className="text-black outline outline-1 py-1 px-2 rounded flex items-center gap-2"
          href="/"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
