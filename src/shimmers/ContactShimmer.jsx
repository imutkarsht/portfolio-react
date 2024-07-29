import React from 'react';

const ContactShimmer = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        <div className="h-8 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
        <div className='flex flex-col mt-10 gap-6 items-center bg-content-1 bg-opacity-50 dark:bg-opacity-20 shadow-gray-400 dark:shadow-gray-700 dark:bg-content-2 p-6 rounded-lg shadow-lg'>
          <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-32 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactShimmer;
