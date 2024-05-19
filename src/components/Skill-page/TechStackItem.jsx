import React from 'react';
import { TechStack } from '../../utils/constants';

const TechStackItem = () => {
    return (
        <div className='flex flex-wrap justify-center md:gap-0 gap-1'>
            {TechStack.map((item) => {
                const IconComponent = item.icon;
                return (
                    <div key={item.id} className='flex flex-col md:m-4 m-1 border-2 border-content-main-text-1 dark:border-content-main-text-2 rounded-lg hover:shadow-md transition-all ease-in-out duration-150 cursor-pointer items-center justify-center dark:bg-content-2 bg-content-1'
                    >
                        <IconComponent size={80} className='dark:text-white p-2 pb-1' />
                        <div className='w-full h-0.5 dark:bg-gray-300 bg-gray-900'></div>
                        <h3 className='dark:text-white text-center font-semibold text-lg pb-1'>{item.name}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default TechStackItem;
