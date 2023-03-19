import React from "react";
import { IconSearch } from "../../components/icons";

const DashboardSearch = () => {
  return (
    <div className="bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] rounded-full p-2 w-full flex items-center">
      <div className="flex-1 px-5">
        <input
          type="text"
          placeholder="Do fundrise now"
          className="w-full text-sm bg-transparent placeholder:text-text4 text-text1 focus:outline-none"
        />
      </div>
      <button className="bg-primary w-[72px] text-white flex items-center justify-center flex-shrink-0 h-10 rounded-full">
        <IconSearch strokeWidth="2.4"></IconSearch>
      </button>
    </div>
  );
};

export default DashboardSearch;
