import React from 'react'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../utils/mockData';

const BodyLeft = () => {
  return (
    <div className='flex flex-col m-2 xl:max-w-1/2 md:ml-2 xl:ml-20 md:max-w-full p-4'>
        <h2 className='sm:text-4xl text-xl mt-1'>Hello, I'm <span className='text-accent-1 dark:text-accent-2 font-semibold'>Utkarsh</span></h2>
        <p className='sm:text-6xl text-3xl my-1 mb-2'>I'm a <span className='text-accent-1 dark:text-accent-2 font-semibold'>Frontend Developer</span></p>
        <p className='sm:pr-10 pr-1 text-gray-900 dark:text-gray-300'>WELCOME TO MY WORLD OF CODE! I'M PASSIONATE ABOUT COMPUTER SCIENCE AND THRIVE ON EMBRACING NEW AND EXHILARATING CONCEPTS EVERY SINGLE DAY.</p>
        <div className='flex gap-8 items-center justify-start'>
          <ul className='flex gap-2 text-2xl mt-4 '>
            {socialLinks.map((item)=>{
              return(
                <Link to={item.link} target='_blank'> 
                  <li className='hover:cursor-pointer hover:text-accent-1 dark:hover:text-accent-2 transition-all' key={item.id}>  <item.icon /> </li>
                </Link>
              )
            })}
          </ul>
        <Link to={"https://drive.google.com/file/d/1EUCHEGq1WY4r0iZa21SWHPLYbD8xn0i6/view"} target='_blank'>
         <Button title="Resume" />
        </Link>
        </div>
      </div>
  )
}

export default BodyLeft;