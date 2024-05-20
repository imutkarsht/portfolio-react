import React from 'react'
import BodyLeft from './BodyLeft';
import BodyRight from './BodyRight';

const Body = () => {
  return (
    <div className='flex items-center xl:justify-between justify-center xl:pt-20 text-black dark:text-white lg:pt-36 md:pt-24 sm:pt-20 pt-16 flex-wrap-reverse'>
      <BodyLeft/>
      <BodyRight/>
    </div>
  )
}

export default Body