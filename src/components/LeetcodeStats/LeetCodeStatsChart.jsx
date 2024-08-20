import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import DoughnutChart from './DoughnutChart';
import StatCard from './StatCard';

ChartJS.register(ArcElement, Tooltip, Legend);

const LEET_URL = "https://leetcode-stats-api.herokuapp.com/imutkarsht";

const LeetCodeStatsChart = () => {
  const [data, setData] = useState(null);
  const [solved, setSolved] = useState(0);
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [totalEasy, setTotalEasy] = useState(0);
  const [totalMedium, setTotalMedium] = useState(0);
  const [totalHard, setTotalHard] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(LEET_URL)
      .then(response => response.json())
      .then(apiData => {
        const { totalEasy, totalMedium, totalHard, easySolved, mediumSolved, hardSolved } = apiData;
        const totalQuestions = [totalEasy, totalMedium, totalHard];
        const solvedQuestions = [easySolved, mediumSolved, hardSolved];
        const remainingQuestions = totalQuestions.map((total, index) => total - solvedQuestions[index]);

        setSolved(easySolved + mediumSolved + hardSolved);
        setTotal(totalEasy + totalHard + totalMedium);
        setEasy(easySolved);
        setMedium(mediumSolved);
        setHard(hardSolved);
        setTotalEasy(totalEasy);
        setTotalHard(totalHard);
        setTotalMedium(totalMedium);
        
        setData({
          labels: ['Easy Solved', 'Easy Remaining', 'Medium Solved', 'Medium Remaining', 'Hard Solved', 'Hard Remaining'],
          datasets: [
            {
              label: 'Questions Solved',
              data: [
                solvedQuestions[0], remainingQuestions[0],
                solvedQuestions[1], remainingQuestions[1],
                solvedQuestions[2], remainingQuestions[2],
              ],
              backgroundColor: [
                'rgba(102, 187, 106, 1)', 'rgba(102, 187, 106, 0.2)', 
                'rgba(255, 167, 38, 1)', 'rgba(255, 167, 38, 0.2)', 
                'rgba(239, 83, 80, 1)', 'rgba(239, 83, 80, 0.2)', 
              ],
              borderColor: [
                'rgba(102, 187, 106, 1)', 'rgba(102, 187, 106, 0.2)',
                'rgba(255, 167, 38, 1)', 'rgba(255, 167, 38, 0.2)',
                'rgba(239, 83, 80, 1)', 'rgba(239, 83, 80, 0.2)',
              ],
              borderWidth: 1,
            },
          ],
        });

        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  const options = {
    cutout: '90%',
    rotation: 270,
    circumference: 180,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    },
  };

  return (
    <div className='flex items-center justify-between gap-4 px-2 py-0 bg-gray-300 border border-black rounded-md dark:bg-primary-2 dark:border-font-1'>
      <DoughnutChart
        loading={loading}
        data={data}
        options={options}
        solved={solved}
        total={total}
      />

      <div className="flex flex-col gap-4">
        <StatCard
          title="Easy"
          color="green"
          value={`${easy}/${totalEasy}`}
          loading={loading}
        />
        <StatCard
          title="Medium"
          color="orange"
          value={`${medium}/${totalMedium}`}
          loading={loading}
        />
        <StatCard
          title="Hard"
          color="red"
          value={`${hard}/${totalHard}`}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default LeetCodeStatsChart;