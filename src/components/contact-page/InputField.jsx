import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => (
  <div className='flex flex-col gap-2 items-start w-full'>
    <label htmlFor={name} className='dark:text-white text-lg'>
      {label}
    </label>
    <input 
      type={type} 
      required 
      name={name} 
      value={value}
      onChange={onChange}
      placeholder={placeholder} 
      className='border-none outline-none rounded-md p-3 text-lg w-full capitalize dark:text-content-main-text-2 text-content-main-text-1 dark:bg-secondary-2 bg-gray-white placeholder-black dark:placeholder-white bg-opacity-75 focus:ring-4 focus:bg-gray-50 focus:dark:text-white focustext-black focus:dark:bg-gray-800 ring-accent-1 dark:ring-accent-2'
    />
  </div>
);

export default InputField;
