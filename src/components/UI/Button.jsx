import React from 'react'

const Button = ({title}) => {
  return (
    <button 
    className='flex items-center justify-center pb-1 mt-4 text-xl font-semibold px-4  rounded-md border-4 dark:border-accent-2 border-accent-1 bg-accent-high-contrast-1 dark:bg-accent-high-contrast-2 bg-opacity-80 dark:text-content-main-text-2 text-content-main-text-2 hover:bg-accent-low-contrast-1 hover:dark:bg-accent-low-contrast-2 transition-all hover:dark:text-content-main-text-1 duration-300 ease-in-out '
    >{title}
    </button>
  )
}

export default Button