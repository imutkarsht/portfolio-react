import React from 'react';

const ShimmerHome = () => {
  return (
    <div className='flex items-center xl:justify-between justify-center xl:pt-20 text-black dark:text-white lg:pt-36 md:pt-24 sm:pt-20 pt-16 flex-wrap-reverse'>
      <div className='flex flex-col m-2 xl:max-w-1/2 md:ml-2 xl:ml-20 md:max-w-full p-4'>
        <div className='h-8 bg-slate-300 dark:bg-slate-700 mb-4 rounded animate-shimmer'></div>
        <div className='h-12 bg-slate-300 dark:bg-slate-700 mb-4 rounded animate-shimmer'></div>
        <div className='h-24 bg-slate-300 dark:bg-slate-700 mb-4 rounded animate-shimmer'></div>
        <div className='flex gap-8 items-center justify-start'>
          <ul className='flex gap-2 text-2xl mt-4'>
            {[...Array(4)].map((_, index) => (
              <li key={index} className='h-8 w-8 bg-slate-300 dark:bg-slate-700 rounded-full animate-shimmer'></li>
            ))}
          </ul>
          <div className='h-10 w-32 bg-slate-300 dark:bg-slate-700 rounded animate-shimmer'></div>
        </div>
      </div>
      <div className='sm:p-8 p-2 flex items-center justify-center flex-col xl:max-w-1/2 sm:max-w-full xl:mr-20 sm:mr-2 rounded-full'>
        <div className='h-96 w-96 bg-slate-300 dark:bg-slate-700 rounded-full animate-shimmer'></div>
      </div>
    </div>
  );
};

export default ShimmerHome;
