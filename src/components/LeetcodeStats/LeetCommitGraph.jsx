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
        <div className='flex justify-between items-center rounded-md gap-4 dark:bg-primary-2 bg-gray-300 px-2 py-2 pb-0 border dark:border-font-1 border-black'>
            {loading ? (
                <div className='flex h-40 w-60 justify-between items-center rounded-md gap-4 dark:bg-gray-600 bg-gray-200 px-2 py-2 animate-pulse'></div>
            ) : chartData ? (
                <Bar data={chartData} options={options} />
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default LeetCodeSubmissionsChart;
