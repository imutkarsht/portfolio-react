import React from "react";

const BodyRight = () => {
 return (
  <div className="sm:p-8 p-2 flex items-center justify-center flex-col xl:max-w-1/2 sm:max-w-full xl:mr-20 sm:mr-2 rounded-full">
   <div>
    <img
     src="/images/bg2.png"
     alt="profilePhoto"
     className="xl:w-96 w-60 lg:w-72 border-3 bg-blue-300 border-8 dark:border-slate-600 rounded-full"
    />
   </div>
  </div>
 );
};

export default BodyRight;
