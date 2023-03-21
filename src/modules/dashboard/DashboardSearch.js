import React from "react";
import { IconClose, IconSearch } from "../../components/icons";
import { IMAGE_EXPERIMENT } from "../../constants/const";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <div className="relative z-[50]">
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
      {showSearch && (
        <div className="search-results w-full lg:w-[843px] bg-white absolute top-full left-0 z-50 translate-y-5 pb-[25px] rounded-[20px]">
          <div className="flex justify-between items-center p-[10px] bg-graySoft rounded-3xl">
            <h4 className="text-sm font-medium text-text1 p-[15px] underline">
              See all 10,124 fundraisier
            </h4>
            <button className="flex justify-center items-center w-[72px] h-[50px] bg-error bg-opacity-20 rounded-xl text-error">
              <IconClose></IconClose>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col mb-6 gap-y-5">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="mb-5 text-sm font-semibold">Related searchs</h3>
            <div className="flex flex-col gap-y-[10px] text-text2 text-sm font-normal">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
              <p>
                <strong>education</strong> and schools fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={IMAGE_EXPERIMENT}
        alt="avatar"
        className="w-[50px] h-[50px] rounded-[10px] object-cover"
      />
      <div className="flex-1 text-sm font-normal text-text1">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
