import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projects }) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4 mt-8 md:gap-6'>
      {projects.map((item) => {
        return (
          <div key={item.id} className='flex flex-col p-4 transition-all duration-200 ease-in-out bg-white border border-black rounded-lg w-72 bg-opacity-30 dark:bg-opacity-50 dark:bg-content-2 dark:border-white dark:text-white hover:shadow-lg'>
            <img
              width={1000}
              height={562}
              src={item.imgSrc}
              className='object-cover w-full h-40 rounded-t-lg'
              alt={item.name}
            />
            <h2 className='mt-4 text-lg font-semibold'>{item.name}</h2>
            <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>{item.description}</p>
            <div className='flex items-center justify-between w-full mt-4'>
              <Link to={item.codeLink} target='_blank'>
                <button
                  className='flex items-center justify-center px-4 pb-1 mt-4 text-xl font-semibold text-white transition-all bg-black rounded-md dark:bg-white dark:text-black hover:dark:bg-gray-300 hover:bg-gray-800'
                >Code
                </button>
              </Link>
              <Link to={item.demoLink} target='_blank'>
                <button
                  className='flex items-center justify-center px-4 pb-1 mt-4 text-xl font-semibold text-white transition-all bg-black rounded-md dark:bg-white dark:text-black hover:dark:bg-gray-300 hover:bg-gray-800'
                >Demo
                </button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard;
