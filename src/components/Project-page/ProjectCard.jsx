import React from 'react'

const projects = [
    {
        id: "1",
        name: "Amazon UI clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "minor",
        imgSrc: "../../images/AUI.png"
    },
    {
        id: "2",
        name: "Basic Dom Projects",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "minor",
        imgSrc: "../../images/bdp.png"
    },
    {
        id: "3",
        name: "Technokratos EMS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "major",
        imgSrc: "../../images/techems.png"
    },
]

const ProjectCard = () => {
    return (
        <div className='flex items-center justify-center md:gap-6 gap-4 mt-8 flex-wrap'>
            {projects.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col p-4 w-72 transition-all duration-200 ease-in-out bg-opacity-50 dark:bg-opacity-50 dark:bg-content-2 border-2 border-black dark:border-white bg-white dark:text-white rounded-lg hover:shadow-lg'>
                        <img
                            width={1000}
                            height={562}
                            src={item.imgSrc}
                            className='w-full h-40 object-cover rounded-t-lg'
                            alt={item.name}
                        />
                        <h2 className='text-lg font-semibold mt-4'>{item.name}</h2>
                        <p className='dark:text-gray-400 text-gray-600 text-sm mt-2'>{item.description}</p>
                        <div className='flex items-center justify-between w-full mt-4'>
                            <button 
                                className='flex items-center justify-center pb-1 mt-4 text-xl font-semibold px-4  rounded-md  dark:bg-white bg-black text-white dark:text-black hover:dark:bg-gray-300 hover:bg-gray-800 transition-all '
                                >Code
                            </button>
                            <button 
                                className='flex items-center justify-center pb-1 mt-4 text-xl font-semibold px-4  rounded-md  dark:bg-white bg-black text-white dark:text-black hover:dark:bg-gray-300 hover:bg-gray-800 transition-all'
                                >Demo
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard
