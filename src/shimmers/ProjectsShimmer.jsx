import React from 'react';

const ProjectsShimmer = () => {
  return (
    <div className='flex items-center justify-center md:gap-6 gap-4 mt-8 flex-wrap'>
      {[...Array(6)].map((_, index) => (
        <div key={index} className='flex flex-col p-4 w-72 transition-all duration-200 ease-in-out bg-opacity-30 dark:bg-opacity-50 dark:bg-content-2 border border-black dark:border-white bg-white dark:text-white rounded-lg animate-shimmer'>
          <div className='w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-t-lg'></div>
          <div className='h-6 bg-gray-300 dark:bg-gray-700 rounded mt-4'></div>
          <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded mt-2'></div>
          <div className='flex items-center justify-between w-full mt-4'>
            <div className='h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded'></div>
            <div className='h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsShimmer;
