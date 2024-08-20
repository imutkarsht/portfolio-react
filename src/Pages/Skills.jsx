import React from 'react'
import TechStack from '../components/Skill-page/TechStack'
import ProblemSolving from '../components/Skill-page/ProblemSolving'

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-3 mt-4'>
      <TechStack />
      <ProblemSolving />
    </div>
  )
}

export default Skills