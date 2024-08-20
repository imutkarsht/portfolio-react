import React from 'react';
import { educationItems } from '../../utils/mockData';


const EducationCard = () => {
    return (
        <div className="grid grid-cols-1 gap-3 ml-3 mr-3 align-middle content-ed xl:mx-32 md:mx-16 sm:mx-0 sm:ml-10 xl:grid-cols-2 xl:gap-16">
            {educationItems.map((item, index) => (
                <div key={index} className="relative flex flex-col p-5 mb-5 transition-all border border-black rounded-md cursor-pointer box bg-content-1 dark:bg-content-2 dark:text-white duration-400 bg-opacity-30 dark:border-white dark:bg-opacity-60 hover:shadow-md hover:dark:shadow-content-main-text-2 hover:shadow-content-main-text-1"
                >
                    <div className="flex items-center justify-between mb-2 grade-year">
                        <h4 className="relative text-accent-1 dark:text-accent-2">{item.period}</h4>
                        <h4 className="relative text-black dark:text-white">
                            <span className="text-content-secondary-text-1 dark:text-content-secondary-text-2">Grade:</span> {item.grade} <span className="text-accent-1 dark:text-accent-2">{item.gradeType}</span>
                        </h4>
                    </div>
                    <h3 className="py-2 text-xl text-accent-1 dark:text-accent-2">{item.degree}</h3>
                    <p className="text-lg leading-tight text-content-secondary-text-1 dark:text-content-secondary-text-2">{item.details}</p>
                    <div className="before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-accent-1 dark:before:bg-accent-2 before:border before:border-white before:right-full before:top-0 before:mr-6"></div>
                </div>
            ))}
        </div>
    );
};

export default EducationCard;
