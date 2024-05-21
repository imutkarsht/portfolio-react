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
      className='border-none outline-none rounded-md p-3 text-lg w-full capitalize dark:text-content-main-text-2 text-content-main-text-1 bg-secondary-2 dark:bg-secondary-1 dark:placeholder-black placeholder-white bg-opacity-75'
    />
  </div>
);

export default InputField;
