import React from "react";

const BodyRight = () => {
 return (
  <div className="flex flex-col items-center justify-center p-2 rounded-full sm:p-8 xl:max-w-1/2 sm:max-w-full xl:mr-20 sm:mr-2">
   <div>
    <img
     src="/images/bg2.png"
     alt="profilePhoto"
     className="border-8 rounded-full xl:w-96 w-60 lg:w-72 border-3 dark:border-secondary-2 border-secondary-1"
     style={{ backgroundImage: "radial-gradient(circle, rgb(255, 2, 150) 0%, rgb(0, 234, 255) 100%)" }}
    />
   </div>
  </div>
 );
};

export default BodyRight;
