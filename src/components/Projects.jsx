import React from 'react'
import HeadText from './HeadText'
import ProjectTop from './ProjectTop';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='mt-2 mb-2'>
      <div className='flex flex-col items-center justify-center gap-2 mt-3 p-4 ' 
           style={{marginLeft:"5%",marginRight:"5%"}}
      >
        <ProjectTop />
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Projects