import React from 'react'
import TechStack from '../components/Skill-page/TechStack'
import ProblemSolving from '../components/Skill-page/ProblemSolving'

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-3 justify-between mt-4 '>
      <TechStack />
      <ProblemSolving />
    </div>
  )
}

export default Skills