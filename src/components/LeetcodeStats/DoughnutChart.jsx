import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ loading, data, options, solved, total }) => {
  return (
    <div className='w-60 h-fit flex items-center justify-center relative py-1 px-8 rounded-md'>
      {loading ? (
        <div className='h-20 w-40 rounded-md animate-pulse bg-gray-100 dark:bg-gray-700'></div>
      ) : (
        <Doughnut data={data} options={options} />
      )}
      {!loading && (
        <div className='absolute inset-1/3 mt-[4vh] flex flex-col items-center justify-center font-semibold text-base dark:text-white text-black w-fit h-fit'>
          {solved}/{total}
          <br />
          <span className='text-xl uppercase font-bold text-zinc-800 dark:text-zinc-200'>
            solved
          </span>
        </div>
      )}
    </div>
  );
};

export default DoughnutChart;
