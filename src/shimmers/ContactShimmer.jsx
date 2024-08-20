import React from 'react';

const ContactShimmer = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        <div className="w-48 h-8 mb-6 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
        <div className='flex flex-col items-center gap-6 p-6 mt-10 bg-opacity-50 rounded-lg shadow-lg bg-content-1 dark:bg-opacity-20 shadow-gray-400 dark:shadow-gray-700 dark:bg-content-2'>
          <div className="w-32 h-6 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-full h-10 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-32 h-6 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-full h-10 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-32 h-6 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-full h-32 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-24 h-10 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="w-48 h-6 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactShimmer;
