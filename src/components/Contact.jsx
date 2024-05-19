import React from 'react';
import HeadText from './HeadText';

const Contact = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        <HeadText heading="Contact" />
        <form 
          className='flex flex-col mt-10 gap-6 items-center bg-content-1 dark:bg-content-2 p-6 rounded-lg shadow-lg'
        >
          <div className='flex flex-col gap-2 items-start w-full'>
            <label htmlFor="name" className='dark:text-white text-lg'>
              Name
            </label>
            <input 
              type="text" 
              required 
              name='name' 
              placeholder='Enter your name' 
              className='border-none outline-none rounded-md p-3 text-lg w-full capitalize dark:text-content-main-text-2 text-content-main-text-1 bg-secondary-2 dark:bg-secondary-1 dark:placeholder-black placeholder-white bg-opacity-75'
            />
          </div>
          <div className='flex flex-col gap-2 items-start w-full'>
            <label htmlFor="email" className='dark:text-white text-lg'>
              Email
            </label>
            <input 
              type="email" 
              required 
              name='email' 
              placeholder='Enter your email' 
              className='border-none outline-none rounded-md p-3 text-lg w-full capitalize dark:text-content-main-text-2 text-content-main-text-1 bg-secondary-2 dark:bg-secondary-1 dark:placeholder-black placeholder-white bg-opacity-75'
            />
          </div>
          <div className='flex flex-col gap-2 items-start w-full'>
            <label htmlFor="message" className='dark:text-white text-lg'>
              Message
            </label>
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Enter your message" 
              className='border-none outline-none rounded-md p-3 text-lg w-full capitalize dark:text-content-main-text-2 text-content-main-text-1 bg-secondary-2 dark:bg-secondary-1 dark:placeholder-black placeholder-white bg-opacity-75 resize-none'
            ></textarea>
          </div>
          <button 
            type="submit" 
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
