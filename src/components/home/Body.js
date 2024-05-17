import React from 'react'
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

const Body = () => {
  return (
    <div className='flex items-center xl:justify-between justify-center xl:pt-20 dark:bg-slate-800 dark:text-white pt-36 flex-wrap-reverse'>
      <BodyLeft/>
      <BodyRight/>
    </div>
  )
}

export default Body