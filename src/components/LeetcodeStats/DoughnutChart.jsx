import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ loading, data, options, solved, total }) => {
  return (
    <div className='relative flex items-center justify-center px-8 py-1 rounded-md w-60 h-fit'>
      {loading ? (
        <div className='w-40 h-20 bg-gray-100 rounded-md animate-pulse dark:bg-gray-700'></div>
      ) : (
        <Doughnut data={data} options={options} />
      )}
      {!loading && (
        <div className='absolute inset-1/3 mt-[4vh] flex flex-col items-center justify-center font-semibold text-base dark:text-white text-black w-fit h-fit'>
          {solved}/{total}
          <br />
          <span className='text-xl font-bold uppercase text-zinc-800 dark:text-zinc-200'>
            solved
          </span>
        </div>
      )}
    </div>
  );
};

export default DoughnutChart;
