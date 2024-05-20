import React from 'react';
import Button from '../UI/Button';

const ProjectTop = ({ handleFilterChange }) => {
  return (
    <div className='flex items-center justify-center md:gap-4 gap-1 w-full flex-wrap'>
      <div className='flex items-center justify-center gap-2 pb-4'>
        <Button title="All" onClick={() => handleFilterChange('All')} />
        <Button title="Major" onClick={() => handleFilterChange('Major')} />
        <Button title="Minor" onClick={() => handleFilterChange('Minor')} />
      </div>
    </div>
  );
};

export default ProjectTop;
