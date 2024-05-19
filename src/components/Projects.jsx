import React from 'react'
import HeadText from './HeadText'
import ProjectTop from './ProjectTop';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <HeadText heading="Projects" />
      <div className='flex flex-col items-center justify-center gap-2 mt-10 p-4 dark:bg-slate-900' 
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