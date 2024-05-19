import React from 'react';
import { educationItems } from '../../utils/mockData';


const EducationCard = () => {
    return (
        <div className="content-ed grid xl:mx-32 md:mx-16 sm:mx-0 sm:ml-10  xl:grid-cols-2 xl:gap-16 ml-3 mr-3 gap-3  grid-cols-1 align-middle">
            {educationItems.map((item, index) => (
                <div key={index} className="box flex flex-col relative p-5 border bg-white dark:bg-gray-800 dark:text-white cursor-pointer transition-all duration-400 mb-5 hover:shadow-md hover:dark:shadow-slate-100 hover:shadow-slate-900">
                    <div className="grade-year flex items-center justify-between mb-2">
                        <h4 className="relative text-black dark:text-white">{item.period}</h4>
                        <h4 className="relative text-black dark:text-white">
                            <span className="text-gray-600 dark:text-gray-300">Grade:</span> {item.grade} <span className="text-blue-800 dark:text-blue-400">{item.gradeType}</span>
                        </h4>
                    </div>
                    <h3 className="text-xl py-2 text-blue-300">{item.degree}</h3>
                    <p className="leading-tight text-gray-600 dark:text-gray-200 text-lg">{item.details}</p>
                    <div className="before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-blue-400 before:border before:border-white before:right-full before:top-0 before:mr-6"></div>
                </div>
            ))}
        </div>
    );
};

export default EducationCard;
