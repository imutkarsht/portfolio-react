import React from 'react'
import BodyLeft from '../components/home/BodyLeft';
import BodyRight from '../components/home/BodyRight';

const Home = () => {
  return (
    <div className='flex items-center xl:justify-between justify-center xl:pt-20 text-black dark:text-white lg:pt-36 md:pt-24 sm:pt-20 pt-16 flex-wrap-reverse'>
      <BodyLeft/>
      <BodyRight/>
    </div>
  )
}

export default Home