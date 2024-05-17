import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between pr-9 pl-3 dark:bg-slate-900 bg-slate-300 dark:text-white text-black py-3'>
        <h1 className='text-4xl uppercase font-semibold'>Utkarsh Tiwari</h1>
        <ul className='flex items-center justify-center gap-5 text-xl'>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/education"}>
            <li>Education</li>
          </Link>
          <Link to={"/skills"}>
            <li>Skills</li>
          </Link>
          <Link to={"/projects"}>
            <li>Projects</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Header       