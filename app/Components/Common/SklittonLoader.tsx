import React from "react";

const SklittonLoader: React.FC = () => {
  return (
    <div className=" flex flex-col m-8 shadow-md card w-60 h-[350px] bg-base-100 animate-pulse rounded-md">
      <div className="h-48 rounded-t dark:bg-gray-400"></div>
      <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-base-900">
        <div className="w-full h-6 rounded dark:bg-gray-400"></div>
        <div className="w-full h-6 rounded dark:bg-gray-400"></div>
        <div className="w-3/4 h-6 rounded dark:bg-gray-400"></div>
      </div>
    </div>
  );
};

export default SklittonLoader;
