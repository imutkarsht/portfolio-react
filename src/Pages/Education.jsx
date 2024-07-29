import React from 'react'
import EducationCard from '../components/Education-page/EducationCard'
import HeadText from '../components/UI/HeadText'

const Education = () => {
  return (
    <div className='flex flex-col mt-5 gap-10'>
        <HeadText heading="Education" />
        <div className='flex flex-col flex-wrap gap-1 w-full items-center justify-center'>
          <EducationCard/>
        </div>
    </div>
  )
}

export default Education