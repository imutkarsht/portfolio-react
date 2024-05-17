import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMail } from 'react-icons/io5';

const BodyLeft = () => {
  return (
    <div className='flex flex-col m-2 xl:max-w-1/2 md:ml-2 xl:ml-20 md:max-w-full p-4'>
        <h2 className='sm:text-4xl text-xl mt-1'>Hello, I'm <span className='text-blue-400 font-semibold'>Utkarsh</span></h2>
        <p className='sm:text-6xl text-3xl my-1 mb-2'>I'm a <span className='text-blue-400 font-semibold'>Frontend Developer</span></p>
        <p className='pr-10 text-gray-900 dark:text-gray-300'>WELCOME TO MY WORLD OF CODE! I'M PASSIONATE ABOUT COMPUTER SCIENCE AND THRIVE ON EMBRACING NEW AND EXHILARATING CONCEPTS EVERY SINGLE DAY.</p>
        <div className='flex gap-8 items-center justify-start'>
          <ul className='flex gap-2 text-2xl mt-4 '>
            <li className='hover:cursor-pointer hover:text-blue-400 transition-all'><FaLinkedin /></li>
            <li className='hover:cursor-pointer hover:text-blue-400 transition-all'><FaInstagram /></li>
            <li className='hover:cursor-pointer hover:text-blue-400 transition-all'><FaGithub/></li>
            <li className='hover:cursor-pointer hover:text-blue-400 transition-all'><IoMail/></li>
          </ul>
          <button className='flex items-center justify-center pb-1 mt-4 text-xl font-bold px-4  rounded-md bg-blue-400 hover:bg-blue-600 transition-all '>Resume</button>
        </div>
      </div>
  )
}

export default BodyLeft;