import React from "react";
import StoryLoader from "./StoryLoader";
import FilterLoader from "./FilterLoader";

const ArticleLoadingPage = () => {
  return (
    <main className="container">
      <section className="flex flex-row pt-32 min-[450px]:pt-28 lg:pt-36 gap-x-4 md:gap-x-12">
        <aside className="invisible lg:visible w-1/12 lg:w-3/12">
          <FilterLoader />
        </aside>
        <article className="w-11/12 lg:w-9/12">
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
          <StoryLoader />
        </article>
      </section>
    </main>
  );
};

export default ArticleLoadingPage;
