import React from 'react';
import { educationItems } from '../../utils/mockData';


const EducationCard = () => {
    return (
        <div className="content-ed grid xl:mx-32 md:mx-16 sm:mx-0 sm:ml-10 xl:grid-cols-2 xl:gap-16 ml-3 mr-3 gap-3  grid-cols-1 align-middle">
            {educationItems.map((item, index) => (
                <div key={index} className="box flex flex-col relative p-5 border rounded-sm bg-content-1 dark:bg-content-2 dark:text-white cursor-pointer transition-all duration-400 mb-5 bg-opacity-60 dark:bg-opacity-60 hover:shadow-md hover:dark:shadow-content-main-text-2 hover:shadow-content-main-text-1"
                >
                    <div className="grade-year flex items-center justify-between mb-2">
                        <h4 className="relative text-accent-low-contrast-1 dark:text-accent-low-contrast-2">{item.period}</h4>
                        <h4 className="relative text-black dark:text-white">
                            <span className="text-content-secondary-text-1 dark:text-content-secondary-text-2">Grade:</span> {item.grade} <span className="text-accent-1 dark:text-accent-2">{item.gradeType}</span>
                        </h4>
                    </div>
                    <h3 className="text-xl py-2 text-accent-1 dark:text-accent-2">{item.degree}</h3>
                    <p className="leading-tight text-content-secondary-text-1 dark:text-content-secondary-text-2 text-lg">{item.details}</p>
                    <div className="before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-accent-1 dark:before:bg-accent-2 before:border before:border-white before:right-full before:top-0 before:mr-6"></div>
                </div>
            ))}
        </div>
    );
};

export default EducationCard;
