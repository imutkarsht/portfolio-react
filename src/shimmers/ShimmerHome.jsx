import React from 'react';

const ShimmerHome = () => {
  return (
    <div className='flex flex-wrap-reverse items-center justify-center pt-16 text-black xl:justify-between xl:pt-20 dark:text-white lg:pt-36 md:pt-24 sm:pt-20'>
      <div className='flex flex-col p-4 m-2 xl:max-w-1/2 md:ml-2 xl:ml-20 md:max-w-full'>
        <div className='h-8 mb-4 rounded bg-slate-300 dark:bg-slate-700 animate-shimmer'></div>
        <div className='h-12 mb-4 rounded bg-slate-300 dark:bg-slate-700 animate-shimmer'></div>
        <div className='h-24 mb-4 rounded bg-slate-300 dark:bg-slate-700 animate-shimmer'></div>
        <div className='flex items-center justify-start gap-8'>
          <ul className='flex gap-2 mt-4 text-2xl '>
            {[...Array(4)].map((_, index) => (
              <li key={index} className='w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 animate-shimmer'></li>
            ))}
          </ul>
          <div className='w-32 h-10 rounded bg-slate-300 dark:bg-slate-700 animate-shimmer'></div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-2 rounded-full sm:p-8 xl:max-w-1/2 sm:max-w-full xl:mr-20 sm:mr-2'>
        <div className='rounded-full h-96 w-96 bg-slate-300 dark:bg-slate-700 animate-shimmer'></div>
      </div>
    </div>
  );
};

export default ShimmerHome;
