import React from 'react'

const HeadText = ({heading}) => {
  return (
    <div className="relative flex items-center justify-center gap-3 mt-5 text-4xl text-center dark:text-white">
        <div className="absolute inset-x-0 flex items-center transform -translate-y-1/2 top-1/2">
            <div className="w-1/2 h-1 ml-20 bg-accent-1 dark:bg-accent-2"></div>
            <h1 className="relative z-10 mx-2">{heading}</h1>
            <div className="w-1/2 h-1 mr-20 bg-accent-1 dark:bg-accent-2"></div>
        </div>
    </div>
  )
}

export default HeadText