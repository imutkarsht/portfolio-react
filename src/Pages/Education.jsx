import React from "react";
import EducationCard from "../components/Education-page/EducationCard";
import HeadText from "../components/UI/HeadText";

const Education = () => {
   return (
      <div className="flex flex-col gap-10 mt-5">
         <HeadText heading="Education" />
         <div className="flex flex-col flex-wrap items-center justify-center w-full gap-1">
            <EducationCard />
         </div>
      </div>
   );
};

export default Education;
