import React, { useEffect, useState } from "react";
import StoryCard from "./StoryCard";
import { useFilterContext } from "../../context/FilterContext";
import { usePaginationContext } from "../../context/PaginationContext";

const StoriesSection = () => {
  const { filteredStories, allStories, activeCategories, activeAuthors } = useFilterContext();
  const { currentPage, limit } = usePaginationContext();

  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    if (activeCategories.length === 0 && activeAuthors.length === 0) {
      setArticleData(allStories);
    } else {
      setArticleData(filteredStories);
    }
  }, [allStories, filteredStories]);

  return (
    <div className="stories-div">
      {articleData
        ?.slice(currentPage * limit, currentPage * limit + limit)
        ?.map((curPost) => (
          <StoryCard curPost={curPost} />
        ))}
    </div>
  );
};

export default StoriesSection;
