import React from 'react';

const LoadingPopup = ({ loading }) => {
   if (!loading) return null;

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex items-center justify-center space-x-4">
               <div className="w-8 h-8 border-t-4 border-blue-500 rounded-full loader animate-spin"></div>
               <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Server Loading...
               </span>
            </div>
         </div>
      </div>
   );
};

export default LoadingPopup;
