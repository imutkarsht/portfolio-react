import React from 'react'
import Button from '../UI/Button';
import { FaSearch } from "react-icons/fa";

const ProjectTop = () => {
  return (
    <div className='flex items-center justify-center md:gap-4 gap-1 w-full flex-wrap'>
          <div className='flex items-center justify-center gap-1'>
            <input type="text" 
              placeholder='search for projects'
              className='flex items-center dark:bg-secondary-1 bg-secondary-2 placeholder:text-content-main-text-2 placeholder:dark:text-content-main-text-1 justify-start py-2 px-2 rounded-md md:text-xl text-base'
            />
            <FaSearch 
              size={42}
              className='dark:bg-gray-950 bg-gray-200 p-2 rounded-md dark:text-white'
            />
          </div>

          <div className='flex items-center justify-center gap-2 pb-4'>
            <Button title="All" />
            <Button title="Major" />
            <Button title="Minor" />
          </div>
    </div>
  )
}

export default ProjectTop