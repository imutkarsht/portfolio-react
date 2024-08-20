import React from 'react';

const ShimmerSkills = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-3 mt-4'>
      {/* Shimmer for TechStack */}
      <div className="flex flex-col items-center justify-center p-4 my-3 rounded-md" style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div className='w-40 h-8 mb-2 bg-gray-300 rounded dark:bg-gray-700 animate-shimmer'></div>
        <div className='w-full h-0.5 bg-gray-300 dark:bg-gray-700 animate-shimmer mx-4 my-2'></div>
        <div className='flex flex-wrap items-center justify-around'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-4 m-1 bg-gray-300 border border-gray-400 rounded-lg md:m-4 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-50 dark:border-gray-600 animate-shimmer'>
              <div className='w-20 h-20 mb-2 bg-gray-400 rounded-full dark:bg-gray-600'></div>
              <div className='w-full h-0.5 bg-gray-400 dark:bg-gray-600 mb-2'></div>
              <div className='w-32 h-6 bg-gray-400 rounded dark:bg-gray-600'></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Shimmer for ProblemSolving */}
      <div className="flex flex-col items-center justify-center p-4 my-3 rounded-md" style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div className='w-40 h-8 mb-2 bg-gray-300 rounded dark:bg-gray-700 animate-shimmer'></div>
        <div className='w-full h-0.5 bg-gray-300 dark:bg-gray-700 animate-shimmer mx-4 my-2'></div>
        <div className='flex flex-wrap justify-center gap-1 md:gap-0'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex flex-col items-center justify-center p-4 m-1 bg-gray-300 border border-gray-400 rounded-lg md:m-4 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-50 dark:border-gray-600 animate-shimmer'>
              <div className='w-20 h-20 mb-2 bg-gray-400 rounded-full dark:bg-gray-600'></div>
              <div className='w-full h-0.5 bg-gray-400 dark:bg-gray-600 mb-2'></div>
              <ul className='p-2 pb-1 text-lg text-left dark:text-white'>
                {[...Array(3)].map((_, i) => (
                  <li key={i} className='w-24 h-4 mb-1 bg-gray-400 rounded dark:bg-gray-600'></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerSkills;
