import React from 'react'
import LeetCodeStatsChart from '../LeetcodeStats/LeetCodeStatsChart'
import ProblemSolvingItem from './ProblemSolvingItem'
import LeetCommitGraph from '../LeetcodeStats/LeetCommitGraph'

const ProblemSolving = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 my-3 rounded-md"
      style={{ marginLeft: "5%", marginRight: "5%" }}
      >
        <h2 className="text-3xl font-semibold capitalize dark:text-white">
          Coding Stats
        </h2>
        <div className="w-full h-0.5 bg-accent-1 dark:bg-accent-2 mx-4 my-2"></div>
        <div className='flex flex-wrap items-center justify-center gap-[4vw]'>
          <div className='flex flex-col items-start'>
            <a href='https://leetcode.com/u/imutkarsht' target='_blank' className='px-1 py-2 text-2xl text-zinc-800 dark:text-zinc-200 '>Leetcode stats</a>
            <LeetCodeStatsChart />
          </div>
          <div className='flex flex-col items-start'>
            <a href='https://leetcode.com/u/imutkarsht' target='_blank' className='px-1 py-2 text-2xl text-zinc-800 dark:text-zinc-200 '>Leetcode submissions</a>
            <LeetCommitGraph />
          </div>
          <div className='flex flex-col items-start'>
            <ProblemSolvingItem />
          </div>
        </div>
    </div>
  )
}

export default ProblemSolving