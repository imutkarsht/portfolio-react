import React from 'react'
import EducationCard from './EducationCard'
import HeadText from '../HeadText'

const Education = () => {
  return (
    <div className='flex flex-col gap-10'>
        <HeadText heading="Education" />
        <div className='flex flex-col flex-wrap gap-1 w-full items-center justify-center'>
          <EducationCard/>
        </div>
    </div>
  )
}

export default Education