import React from 'react';
import HeadText from './UI/HeadText';

const Contact = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-2xl">
        <HeadText heading="Contact" />
        <form 
          className='flex flex-col mt-10 gap-6 items-center bg-content-1 bg-opacity-50 dark:bg-opacity-20 border-2 border-black dark:border-white dark:bg-content-2 p-6 rounded-lg shadow-lg'
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
            className='flex items-center justify-center pb-1 mt-4 text-xl font-semibold px-4  rounded-md border-4 dark:border-accent-2 border-accent-1 bg-accent-high-contrast-1 dark:bg-accent-high-contrast-2 bg-opacity-80 dark:text-content-main-text-2 text-content-main-text-2 hover:bg-accent-low-contrast-1 hover:dark:bg-accent-low-contrast-2 transition-all hover:dark:text-content-main-text-1 duration-300 ease-in-out'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
