import React from "react";

const BodyRight = () => {
 return (
  <div className="sm:p-8 p-2 flex items-center justify-center flex-col xl:max-w-1/2 sm:max-w-full xl:mr-20 sm:mr-2 rounded-full">
   <div>
    <img
     src="/images/bg2.png"
     alt="profilePhoto"
     className="xl:w-96 w-60 lg:w-72 border-3 border-8 dark:border-secondary-2 border-secondary-1 rounded-full"
     style={{ backgroundImage: "radial-gradient(circle, rgb(255, 2, 150) 0%, rgb(0, 234, 255) 100%)" }}
    />
   </div>
  </div>
 );
};

export default BodyRight;
