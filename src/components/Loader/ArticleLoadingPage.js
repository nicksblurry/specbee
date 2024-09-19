import React from "react";
import StoryLoader from "./StoryLoader";
import FilterLoader from "./FilterLoader";

const ArticleLoadingPage = () => {
  return (
    <>
      <main className="flex flex-row pt-12 lg:pt-20 gap-x-4 md:gap-x-12 container">
        <aside className="hidden md:block md:w-3/12">
          <FilterLoader />
        </aside>
        <article className="w-full md:w-9/12">
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
        </article>
      </main>
    </>
  );
};

export default ArticleLoadingPage;
