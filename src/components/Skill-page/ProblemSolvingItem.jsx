import React, { useEffect, useState } from 'react';
import { LEET_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { ProbSolv } from '../../utils/mockData';


const ProblemSolvingItem = () => {
    const [totalSolved, setTotalSolved] = useState(0);

    useEffect(() => {
        getLeetData();
    }, []);

    async function getLeetData() {
        try{
            const data = await fetch(LEET_URL);
            const json = await data.json();
            setTotalSolved(json.totalSolved);
        }
        catch(error){
            console.log("Error in Fetching Data...");
        }
    }

    ProbSolv[0].data[0] = `Did ${totalSolved} questions`;

    return (
        <div className='flex flex-wrap justify-center md:gap-0 gap-1'>
            {ProbSolv.map((item) => {
                const Icon = item.icon;
                return (
                    <Link to={item.link} target='_blank' >
                     <div key={item.id} className='flex flex-col md:m-4 m-1 border-2 border-content-main-text-1 dark:border-content-main-text-2 rounded-lg hover:shadow-md transition-all ease-in-out duration-150 cursor-pointer items-center justify-center dark:bg-content-2 bg-content-1'>
                        <Icon size={100} className='dark:text-white p-2 pb-1 items-center justify-center flex align-middle' />
                        <div className='w-full h-0.5 dark:bg-gray-300 bg-gray-900'></div>
                        <ul className='dark:text-white text-left p-2 text-lg pb-1'>
                            {item.data.map((e, index) => (
                                <li key={index}>{e}</li>
                            ))}
                        </ul>
                        </div>
                    </Link>
                    
                );
            })}
        </div>
    );
};

export default ProblemSolvingItem;
