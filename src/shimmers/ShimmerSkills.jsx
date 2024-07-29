import React from 'react';

const ShimmerSkills = () => {
  return (
    <div className='flex flex-col items-center gap-3 justify-between mt-4'>
      {/* Shimmer for TechStack */}
      <div className="flex flex-col items-center justify-center my-3 p-4 rounded-md" style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div className='h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-shimmer mb-2'></div>
        <div className='w-full h-0.5 bg-gray-300 dark:bg-gray-700 animate-shimmer mx-4 my-2'></div>
        <div className='flex items-center justify-around flex-wrap'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex flex-col md:m-4 m-1 border bg-gray-300 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-50 border-gray-400 dark:border-gray-600 rounded-lg animate-shimmer items-center justify-center p-4'>
              <div className='h-20 w-20 bg-gray-400 dark:bg-gray-600 rounded-full mb-2'></div>
              <div className='w-full h-0.5 bg-gray-400 dark:bg-gray-600 mb-2'></div>
              <div className='h-6 w-32 bg-gray-400 dark:bg-gray-600 rounded'></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Shimmer for ProblemSolving */}
      <div className="flex flex-col items-center justify-center my-3 p-4 rounded-md" style={{ marginLeft: "5%", marginRight: "5%" }}>
        <div className='h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-shimmer mb-2'></div>
        <div className='w-full h-0.5 bg-gray-300 dark:bg-gray-700 animate-shimmer mx-4 my-2'></div>
        <div className='flex flex-wrap justify-center md:gap-0 gap-1'>
          {[...Array(4)].map((_, index) => (
            <div key={index} className='flex flex-col md:m-4 m-1 border bg-gray-300 dark:bg-gray-700 bg-opacity-30 dark:bg-opacity-50 border-gray-400 dark:border-gray-600 rounded-lg animate-shimmer items-center justify-center p-4'>
              <div className='h-20 w-20 bg-gray-400 dark:bg-gray-600 rounded-full mb-2'></div>
              <div className='w-full h-0.5 bg-gray-400 dark:bg-gray-600 mb-2'></div>
              <ul className='dark:text-white text-left p-2 text-lg pb-1'>
                {[...Array(3)].map((_, i) => (
                  <li key={i} className='h-4 w-24 bg-gray-400 dark:bg-gray-600 rounded mb-1'></li>
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
