import React from 'react'
import Button from './Button'

const projects = [
    {
        id:"1",
        name:"Amazon UI clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type:"minor",
        imgSrc:"../../images/AUI.png"
    },
    {
        id:"2",
        name:"Basic Dom Projects",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type:"minor",
        imgSrc:"../../images/bdp.png"
    },

    {
        id:"3",
        name:"Technokratos EMS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type:"major",
        imgSrc:"../../images/techems.png"
    },
   
]



const ProjectCard = () => {
    return(
        <div className='flex items-center justify-center md:gap-3 gap-2 flex-wrap'>
            {projects.map((item)=>{
                return (
                    <div key={item.id} className='flex flex-col p-2 md:p-2 max-w-1/3 w-60 transition-all duration-200 ease-in-out dark:bg-gray-700 bg-gray-200 dark:text-white rounded-md hover:shadow-sm dark:hover:shadow-slate-100'>
                        <img width={1000} src={item.imgSrc} className='w-60 h-32 object-cover' alt="projectName" />
                        <h2 className='text-xl font-semibold'>{item.name}</h2>
                        <p className='dark:text-gray-300 text-xs'>{item.description}</p>
                        <div className='flex items-center justify-between w-full'>
                            <Button 
                                title = "Code"
                            />
                            <Button 
                                title = "Demo"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard