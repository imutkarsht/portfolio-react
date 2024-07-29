import React from 'react';

const ShimmerEducation = () => {
  return (
    <div className='content-ed grid xl:mx-32 md:mx-16 sm:mx-0 sm:ml-10 xl:grid-cols-2 xl:gap-16 ml-3 mr-3 gap-3 grid-cols-1 align-middle'>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="box flex flex-col relative p-5 border rounded-md bg-gray-300 dark:bg-gray-700 cursor-pointer animate-shimmer mb-5">
          <div className="grade-year flex items-center justify-between mb-2">
            <div className='h-6 w-20 bg-gray-400 dark:bg-gray-600 rounded'></div>
            <div className='h-6 w-20 bg-gray-400 dark:bg-gray-600 rounded'></div>
          </div>
          <div className='h-8 w-40 bg-gray-400 dark:bg-gray-600 rounded mb-2'></div>
          <div className='h-16 w-full bg-gray-400 dark:bg-gray-600 rounded'></div>
          <div className="before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-gray-400 dark:before:bg-gray-600 before:right-full before:top-0 before:mr-6"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerEducation;
