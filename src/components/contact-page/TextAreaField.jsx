import React from 'react';

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className='flex flex-col gap-2 items-start w-full'>
    <label htmlFor={name} className='dark:text-white text-lg'>
      {label}
    </label>
    <textarea 
      name={name} 
      value={value}
      onChange={onChange}
      rows="4" 
      required
      placeholder={placeholder} 
      className='border-none outline-none rounded-md p-3 text-lg w-full   dark:text-content-main-text-2 text-content-main-text-1 dark:bg-secondary-2 bg-gray-white placeholder-black dark:placeholder-white bg-opacity-75 focus:ring-4 focus:bg-gray-50 focus:dark:text-white focustext-black focus:dark:bg-gray-800 ring-accent-1 dark:ring-accent-2'
    ></textarea>
  </div>
);

export default TextAreaField;
