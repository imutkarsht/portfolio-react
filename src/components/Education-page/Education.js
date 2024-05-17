import React from 'react'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className="relative flex justify-center dark:text-white mt-5 items-center gap-3 text-4xl text-center">
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="w-1/2 h-1 ml-20 bg-blue-600"></div>
            <h1 className="relative z-10 mx-2">Education</h1>
            <div className="w-1/2 h-1 mr-20 bg-blue-600"></div>
          </div>
        </div>
        <div className='flex flex-col flex-wrap gap-1 w-full items-center justify-center'>
          <EducationCard/>
        </div>
    </div>
  )
}

export default Education