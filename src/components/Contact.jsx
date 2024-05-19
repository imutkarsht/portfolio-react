import React from 'react';
import HeadText from './HeadText';

const Contact = () => {
  return (
    <>
      <HeadText heading="Contact" />
      <form 
        className='flex flex-col mt-10 gap-6 items-center bg-slate-700 p-4 md:w-2/3 mx-auto rounded-lg'
      >
        <div className='flex flex-col gap-2 items-start w-full'>
          <label htmlFor="name" className='text-white text-lg'>
            Name
          </label>
          <input 
            type="text" 
            required 
            name='name' 
            placeholder='Enter your name' 
            className='border-none outline-none rounded-md p-2 text-lg md:w-full capitalize dark:text-white dark:bg-slate-900 bg-opacity-75'
          />
        </div>
        <div className='flex flex-col gap-2 items-start w-full'>
          <label htmlFor="email" className='text-white text-lg'>
            Email
          </label>
          <input 
            type="email" 
            required 
            name='email' 
            placeholder='Enter your email' 
            className='border-none outline-none rounded-md p-2 text-lg md:w-full capitalize dark:text-white dark:bg-slate-900 bg-opacity-75'
          />
        </div>
        <div className='flex flex-col gap-2 items-start w-full'>
          <label htmlFor="message" className='text-white text-lg'>
            Message
          </label>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Enter your message" 
            className='border-none outline-none rounded-md p-2 dark:text-white text-lg md:w-full capitalize dark:bg-slate-900 bg-opacity-75 resize-none'
          ></textarea>
        </div>
        <button 
          type="submit" 
          className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
