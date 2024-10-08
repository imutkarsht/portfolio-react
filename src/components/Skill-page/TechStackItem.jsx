import React from 'react';
import { TechStack } from '../../utils/mockData';

const TechStackItem = () => {
    const getShadowClass = (accent) => {
        switch (accent.toLowerCase()) {
            case 'blue':
                return 'hover-shadow-blue';
            case 'yellow':
                return 'hover-shadow-yellow';
            case 'orange':
                return 'hover-shadow-orange';
            case 'black':
                return 'hover-shadow-black';
            case 'pink':
                return 'hover-shadow-pink';
            case 'green': 
                return 'hover-shadow-green';
            default:
                return 'hover-shadow-white';
        }
    };

    return (
        <div className='flex flex-wrap justify-center gap-1 md:gap-0'>
            {TechStack.map((item) => {
                const IconComponent = item.icon;
                const shadowClass = getShadowClass(item.accent);

                return (
                    <div
                    key={item.id}
                    className={`flex flex-col hover:animate-subtleBounce md:m-4 m-1 border bg-opacity-30 dark:bg-opacity-50 border-content-main-text-1 dark:border-content-main-text-2 rounded-lg transition-all ease-in-out duration-150 cursor-pointer items-center justify-center dark:bg-content-2 bg-content-1 hover:shadow-lg hover:dark:shadow-content-main-text-2 hover:shadow-content-main-text-1 ${shadowClass}`}
                  >
                    <IconComponent size={80} className='p-2 pb-1 dark:text-white' />
                    <div className='w-full h-0.5 dark:bg-gray-300 bg-gray-900'></div>
                    <h3 className='px-1 pb-1 text-lg font-semibold text-center dark:text-white'>{item.name}</h3>
                  </div>
                );
            })}
        </div>
    );
};

export default TechStackItem;
