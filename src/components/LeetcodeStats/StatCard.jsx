import React from 'react';

const StatCard = ({ title, color, value, loading }) => {
  return (
    <div className='flex flex-col items-center justify-between p-2 py-1 text-xs border border-black rounded-md dark:border-font-1 dark:bg-secondary-2 bg-primary-1'>
      <h3 className={`text-${color}-500`}>{title}</h3>
      <p>
        {loading ? (
          <div className="w-full bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
        ) : (
          value
        )}
      </p>
    </div>
  );
};

export default StatCard;
