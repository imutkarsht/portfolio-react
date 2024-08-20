import React from 'react';

const ProjectsShimmer = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 mt-8 md:gap-6'>
      {[...Array(6)].map((_, index) => (
        <div key={index} className='flex flex-col p-4 transition-all duration-200 ease-in-out bg-white border border-black rounded-lg w-72 bg-opacity-30 dark:bg-opacity-50 dark:bg-content-2 dark:border-white dark:text-white animate-shimmer'>
          <div className='w-full h-40 bg-gray-300 rounded-t-lg dark:bg-gray-700'></div>
          <div className='h-6 mt-4 bg-gray-300 rounded dark:bg-gray-700'></div>
          <div className='h-4 mt-2 bg-gray-300 rounded dark:bg-gray-700'></div>
          <div className='flex items-center justify-between w-full mt-4'>
            <div className='w-24 h-10 bg-gray-300 rounded dark:bg-gray-700'></div>
            <div className='w-24 h-10 bg-gray-300 rounded dark:bg-gray-700'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsShimmer;
