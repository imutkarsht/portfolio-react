import React, { useState } from 'react';
import ProjectTop from './ProjectTop';
import ProjectCard from './ProjectCard';
import { projects } from '../../utils/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className=' mb-2'>
      <div className='flex flex-col items-center justify-center p-4' style={{ marginLeft: "5%", marginRight: "5%" }}>
        <ProjectTop handleFilterChange={handleFilterChange} />
        <div>
          <ProjectCard projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
