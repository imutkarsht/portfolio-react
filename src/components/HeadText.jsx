import React from 'react'

const HeadText = ({heading}) => {
  return (
    <div className="relative flex justify-center dark:text-white mt-5 items-center gap-3 text-4xl text-center">
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <div className="w-1/2 h-1 ml-20 bg-blue-600"></div>
            <h1 className="relative z-10 mx-2">{heading}</h1>
            <div className="w-1/2 h-1 mr-20 bg-blue-600"></div>
        </div>
    </div>
  )
}

export default HeadText