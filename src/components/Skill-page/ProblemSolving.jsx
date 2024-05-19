import React from 'react'
import ProblemSolvingItem from './ProblemSolvingItem';

const ProblemSolving = () => {
  return (
    <div
      className="flex flex-col items-center justify-center my-3   p-4 rounded-md"
      style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <h2 className="text-3xl font-semibold capitalize dark:text-white">
          Problem Solving
        </h2>
        <div className="w-full h-0.5 bg-accent-1 dark:bg-accent-2 mx-4 my-2"></div>
        <ProblemSolvingItem />
    </div>
  )
}

export default ProblemSolving