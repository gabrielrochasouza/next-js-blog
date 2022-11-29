import React from "react";
import NewsBlock from "../newsBlock";
import { NewsSectionContainer } from "./style";
import NewsCard from "../newsCard";

const NewsSection = ({ posts, category }) => {
  return (
    <NewsSectionContainer>
      {category ? (
        <h1>Posts Relacionados à Categoria {category}</h1>
      ) : (
        <div className="flex-container top-cards-news">
          {posts.slice(0, 3).map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="block-list-posts">
        {posts.map((post) => (
          <NewsBlock key={"block:" + post.id} post={post} />
        ))}
      </div>
    </NewsSectionContainer>
  );
};

export default NewsSection;
