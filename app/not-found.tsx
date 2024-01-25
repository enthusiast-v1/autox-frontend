import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center p-2 flex-col h-screen gap-y-2">
      <h2 className="text-4xl sm:text-6xl font-bold">404</h2>
      <h2 className="text-2xl sm:text-4xl">Page Not Found</h2>
      <p className="text-gray-700 text-center">
        Sorry, We could not find requested resource
      </p>
      <Link
        className="bg-black text-white py-1 px-2 rounded flex items-center gap-2"
        href="/"
      >
        Return Home
        <svg
          height="16"
          viewBox="0 0 8 8"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          className="pt-1"
        >
          <path d="m5 0v2h-5v1h5v2l3-2.53z" transform="translate(0 1)" />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
