import React from "react";

const StoryLoader = () => {
  return (
    <div className="mb-16 md:mb-20">
      <div
        role="status"
        className="animate-pulse flex mb-6 max-[450px]:gap-x-4 gap-x-8">
        <div className="flex items-center justify-center max-[450px]:h-[4.5rem] h-[5rem] bg-gray-300 rounded max-[450px]:w-[8.5rem] w-[6.5rem]">
          <svg
            className="w-10 h-10 text-gray-200 m-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full flex flex-col justify-between pt-2">
          <div className="h-3 bg-gray-200 rounded-full w-4/12 sm:w-1/12 mb-2 max-[450px]:mb-4"></div>
          <div>
            <div className="h-3 bg-gray-200 rounded-full max-w-[100%] mb-2"></div>
            <div className="h-3 bg-gray-200 rounded-full max-w-[80%] mb-2"></div>
          </div>
        </div>
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2.5 bg-gray-200 rounded-full max-w-[90%] mb-2.5"></div>
      <div className="h-2.5 bg-gray-200 rounded-full max-w-[80%] mb-6"></div>
      <div className="h-2.5 bg-gray-200 rounded-full max-w-[20%]"></div>
    </div>
  );
};

export default StoryLoader;
