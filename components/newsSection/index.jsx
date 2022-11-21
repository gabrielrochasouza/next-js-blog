import React from "react";
import NewsBlock from "../newsBlock";
import { NewsSectionContainer } from "./style";
import NewsCard from "../newsCard";

const NewsSection = ({ posts }) => {
  return (
    <NewsSectionContainer>
      <div className="flex-container top-cards-news">
        {posts.slice(0, 3).map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
      <div className="block-list-posts">
        {posts.map((post) => (
          <NewsBlock key={"block:" + post.id} post={post} />
        ))}
      </div>
    </NewsSectionContainer>
  );
};

export default NewsSection;
