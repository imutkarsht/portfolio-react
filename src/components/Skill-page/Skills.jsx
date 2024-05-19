import React from 'react'
import TechStack from './TechStack'
import ProblemSolving from './ProblemSolving'

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-3 justify-between mt-4 '>
      <TechStack />
      <ProblemSolving />
    </div>
  )
}

export default Skills