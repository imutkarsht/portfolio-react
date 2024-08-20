import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { format, parse } from 'date-fns'; // Importing date-fns

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LEET_URL = "https://leetcode-stats-api.herokuapp.com/imutkarsht";

const LeetCodeSubmissionsChart = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(LEET_URL)
            .then(response => response.json())
            .then(apiData => {
                const { submissionCalendar } = apiData;

                if (!submissionCalendar) {
                    console.error('No submissionCalendar data available');
                    setLoading(false);
                    return;
                }

                const monthData = {};
                Object.keys(submissionCalendar).forEach(timestamp => {
                    const date = new Date(parseInt(timestamp) * 1000);
                    const monthYear = format(date, 'MMM yyyy');
                    monthData[monthYear] = (monthData[monthYear] || 0) + submissionCalendar[timestamp];
                });

                const months = Object.keys(monthData).sort();
                const submissions = months.map(month => monthData[month]);

                setChartData({
                    labels: months,
                    datasets: [
                        {
                            label: 'Number of Submissions',
                            data: submissions,
                            backgroundColor: 'rgba(50, 205, 50, 0.5)',
                            borderColor: 'rgba(50, 205, 50, 1)',
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
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Submissions: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className='flex items-center justify-between gap-4 px-2 py-2 pb-0 bg-gray-300 border border-black rounded-md dark:bg-primary-2 dark:border-font-1'>
            {loading ? (
                <div className='flex items-center justify-between h-40 gap-4 px-2 py-2 bg-gray-200 rounded-md w-60 dark:bg-gray-600 animate-pulse'></div>
            ) : chartData ? (
                <Bar data={chartData} options={options} />
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default LeetCodeSubmissionsChart;
