import React from 'react'
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../utils/mockData';

const BodyLeft = () => {
  return (
    <div className='flex flex-col p-4 m-2 xl:max-w-1/2 md:ml-2 xl:ml-20 md:max-w-full'>
        <h2 className='mt-1 text-xl sm:text-4xl'>Hello, I'm <span className='font-semibold text-accent-1 dark:text-accent-2'>Utkarsh</span></h2>
        <p className='my-1 mb-2 text-3xl sm:text-6xl'>I'm a <span className='font-semibold text-accent-1 dark:text-accent-2'>Frontend Developer</span></p>
        <p className='pr-1 text-gray-900 sm:pr-10 dark:text-gray-300'>WELCOME TO MY WORLD OF CODE! I'M PASSIONATE ABOUT COMPUTER SCIENCE AND THRIVE ON EMBRACING NEW AND EXHILARATING CONCEPTS EVERY SINGLE DAY.</p>
        <div className='flex items-center justify-start gap-8'>
          <ul className='flex gap-2 mt-4 text-2xl '>
            {socialLinks.map((item)=>{
              return(
                <Link to={item.link} target='_blank' key={item.id}> 
                  <li className='transition-all hover:cursor-pointer hover:text-accent-1 dark:hover:text-accent-2' >  <item.icon /> </li>
                </Link>
              )
            })}
          </ul>
        <Link to={"https://bit.ly/3WQHePq"} target='_blank'>
         <Button title="Resume" />
        </Link>
        </div>
      </div>
  )
}

export default BodyLeft;