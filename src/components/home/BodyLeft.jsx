import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMail } from 'react-icons/io5';
import Button from '../Button';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    id:"1",
    name: "LinkedIn",
    link:"https://www.linkedin.com/in/imutkarsht/",
    icon:FaLinkedin
  },
  {
    id:"2",
    name: "Github",
    link:"https://www.github.com/imutkarsht/",
    icon:FaGithub
  },
  {
    id:"3",
    name: "Instagram",
    link:"https://www.instagram.com/im_ut_2308/",
    icon:FaInstagram
  },
  {
    id:"4",
    name: "Gmail",
    link:"mailto:uktiwari023@gmail.com",
    icon:IoMail
  },
]

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
         <Button title="Resume" />
        </div>
      </div>
  )
}

export default BodyLeft;