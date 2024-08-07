import React from 'react';

const StatCard = ({ title, color, value, loading }) => {
  return (
    <div className='flex flex-col items-center justify-between text-xs border dark:border-font-1 border-black p-2 py-1 rounded-md dark:bg-secondary-2 bg-primary-1'>
      <h3 className={`text-${color}-500`}>{title}</h3>
      <p>
        {loading ? (
          <div className="w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        ) : (
          value
        )}
      </p>
    </div>
  );
};

export default StatCard;
