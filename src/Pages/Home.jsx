import React, { useEffect } from 'react'
import BodyLeft from '../components/home/BodyLeft';
import BodyRight from '../components/home/BodyRight';
import { BACKEND_API } from '../utils/constants';

const Home = () => {

  useEffect(() => {
    const connectToBackend = async () => {
      try {
        const response = await fetch(`${BACKEND_API}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    connectToBackend();
  }, []);
  
  return (
    <div className='flex flex-wrap-reverse items-center justify-center pt-16 text-black xl:justify-between xl:pt-20 dark:text-white lg:pt-36 md:pt-24 sm:pt-20'>
      <BodyLeft/>
      <BodyRight/>
    </div>
  )
}

export default Home