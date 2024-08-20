import React from 'react';

const ShimmerEducation = () => {
  return (
    <div className='grid grid-cols-1 gap-3 ml-3 mr-3 align-middle content-ed xl:mx-32 md:mx-16 sm:mx-0 sm:ml-10 xl:grid-cols-2 xl:gap-16'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative flex flex-col p-5 mb-5 bg-gray-300 border rounded-md cursor-pointer box dark:bg-gray-700 animate-shimmer">
          <div className="flex items-center justify-between mb-2 grade-year">
            <div className='w-20 h-6 bg-gray-400 rounded dark:bg-gray-600'></div>
            <div className='w-20 h-6 bg-gray-400 rounded dark:bg-gray-600'></div>
          </div>
          <div className='w-40 h-8 mb-2 bg-gray-400 rounded dark:bg-gray-600'></div>
          <div className='w-full h-16 bg-gray-400 rounded dark:bg-gray-600'></div>
          <div className="before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-gray-400 dark:before:bg-gray-600 before:right-full before:top-0 before:mr-6"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEducation;
