import React from "react";
import TechStackItem from './TechStackItem'

const TechStack = () => {
 return (
  <div
   className="flex flex-col items-center justify-center my-3p-4 rounded-md"
   style={{ marginLeft: "5%", marginRight: "5%" }}
  >
   <h2 className="text-3xl font-semibold capitalize dark:text-white">
    My Tech Stack
   </h2>
   <div className="w-full h-0.5 bg-accent-1 dark:bg-accent-2 mx-4 my-2"></div>
   <div className="flex items-center justify-around flex-wrap">
    <TechStackItem />
   </div>
  </div>
 );
};

export default TechStack;
