import React from "react";
import PaginationUI from "./Pagination/PaginationUI";
import StoriesSection from "./StorySection/StoriesSection";
import FilterContainer from "./FilterSection/FilterContainer";
import { useAppReducer } from "../context/AppContext";
import PageNotFound from "./NotFound/PageNotFound";
import ArticleLoadingPage from "./Loader/ArticleLoadingPage";

const StoryPage = () => {
  const { isLoading, isError } = useAppReducer();

  const renderContent = () => (
    <>
      <main className="flex flex-row pt-12 lg:pt-20 gap-x-4 md:gap-x-12 container">
        <aside className="w-1/12 lg:w-3/12">
          <FilterContainer />
        </aside>
        <article className="w-11/12 lg:w-9/12">
          <StoriesSection />
        </article>
      </main>
      <footer className="container">
        <PaginationUI />
      </footer>
    </>
  );

  return isLoading ? (
    <ArticleLoadingPage />
  ) : isError ? (
    <PageNotFound />
  ) : (
    renderContent()
  );
};

export default StoryPage;
