import React from 'react';

const TextAreaField = ({ label, name, value, onChange, placeholder }) => (
  <div className='flex flex-col items-start w-full gap-2'>
    <label htmlFor={name} className='text-lg dark:text-white'>
      {label}
    </label>
    <textarea 
      name={name} 
      value={value}
      onChange={onChange}
      rows="4" 
      required
      placeholder={placeholder} 
      className='w-full p-3 text-lg placeholder-black bg-opacity-75 border-none rounded-md outline-none dark:text-content-main-text-2 text-content-main-text-1 dark:bg-secondary-2 bg-gray-white dark:placeholder-white focus:ring-4 focus:bg-gray-50 focus:dark:text-white focustext-black focus:dark:bg-gray-800 ring-accent-1 dark:ring-accent-2'
    ></textarea>
  </div>
);

export default TextAreaField;
