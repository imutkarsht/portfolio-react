import React from 'react';
import { Link } from 'react-router-dom';
import { ProbSolv } from '../../utils/mockData';

const ProblemSolvingItem = () => {
    
    const getShadowClass = (accent) => {
        switch (accent.toLowerCase()) {
            case 'orange':
                return 'hover-shadow-orange';
            case 'green':
                return 'hover-shadow-green';
            default:
                return '';
        }
    };

    return (
        <div className='flex flex-wrap justify-center gap-1 md:gap-0'>
            {ProbSolv.map((item) => {
                const Icon = item.icon;
                const shadowClass = getShadowClass(item.accent);

                return (
                    <Link to={item.link} target='_blank' key={item.id}>
                        <div className={`flex flex-col hover:animate-subtleBounce md:m-4 m-1 border bg-opacity-30 dark:bg-opacity-50 border-content-main-text-1 dark:border-content-main-text-2 rounded-lg transition-all ease-in-out duration-150 cursor-pointer items-center justify-center dark:bg-content-2 bg-content-1 hover:shadow-lg hover:dark:shadow-content-main-text-2 hover:shadow-content-main-text-1 ${shadowClass}`}>
                            <Icon size={100} className='flex items-center justify-center p-2 pb-1 align-middle dark:text-white' />
                            <div className='w-full h-0.5 dark:bg-gray-300 bg-gray-900'></div>
                            <ul className='p-2 pb-1 text-lg text-left dark:text-white'>
                                {item.data.map((e, index) => (
                                    <li key={index}>{e}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProblemSolvingItem;
