import React from "react";
import PaginationUI from "./Pagination/PaginationUI";
import StoriesSection from "./StorySection/StoriesSection";
import FilterContainer from "./FilterSection/FilterContainer";
import PageNotFound from "./NotFound/PageNotFound";
import ArticleLoadingPage from "./Loader/ArticleLoadingPage";
import SearchBar from "./Search/SearchBar";
import { useAppReducer } from "../context/AppContext";

const StoryPage = () => {
  const { isLoading, isError } = useAppReducer();

  const renderContent = () => (
    <>
      <main className="container pt-12 lg:pt-20 ">
        <section><SearchBar /></section>
        <section className="flex flex-row gap-x-4 md:gap-x-12 mt-10 min-[450px]:mt-6">
          <aside className="w-1/12 lg:w-3/12">
            <FilterContainer />
          </aside>
          <article className="w-11/12 lg:w-9/12">
            <StoriesSection />
          </article>
        </section>
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
