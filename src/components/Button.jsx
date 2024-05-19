import React from 'react'

const Button = ({title}) => {
  return (
    <button 
    className='flex items-center dark:text-white justify-center pb-1 mt-4 text-xl font-bold px-4  rounded-md bg-blue-400 hover:bg-blue-600 transition-all '
    >{title}
    </button>
  )
}

export default Button