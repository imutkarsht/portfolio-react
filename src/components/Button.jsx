import React from 'react'

const Button = ({title}) => {
  return (
    <button 
    className='flex items-center justify-center pb-1 mt-4 text-xl font-semibold px-4  rounded-md bg-accent-1 dark:bg-accent-2 dark:text-content-main-text-1 text-content-main-text-2 hover:bg-accent-high-contrast-1 hover:dark:bg-accent-high-contrast-2 transition-all '
    >{title}
    </button>
  )
}

export default Button