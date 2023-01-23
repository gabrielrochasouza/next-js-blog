import React from "react";
import { NewsCardContainer } from "./style";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../avatar";

const NewsCard = ({ post }) => {
  const { id, slug, createdAt, title, coverImage, author, categories } = post;
  return (
    <NewsCardContainer>
      <a href={"/posts/" + slug}>
        <figure>
          <figcaption>{title}</figcaption>
          <Image width={500} height={500} src={coverImage.url} alt={title} />
          <div>
            <div className="info">
              <span>{categories?.map((cat) => cat.name + " ")}</span>
              <h2>{title}</h2>
              <Avatar author={author} createdAt={createdAt} />
            </div>
          </div>
        </figure>
      </a>
    </NewsCardContainer>
  );
};

export default NewsCard;
