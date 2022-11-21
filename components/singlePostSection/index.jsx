import Image from "next/image";
import React from "react";
import Avatar from "../avatar";
import { SinglePostSectionContainer } from "./style";

const SinglePostSection = ({ posts }) => {
  const {
    id,
    slug,
    content,
    createdAt,
    title,
    coverImage,
    author,
    categories,
  } = posts[0];
  return (
    <SinglePostSectionContainer>
      <figure>
        <Image src={coverImage.url} alt={title} width={500} height={500} />
        <figcaption>{title}</figcaption>
      </figure>

      <header>
        <span className="category">
          {categories?.map((cat) => cat.name + " ")}
        </span>
        <h1>{title}</h1>
        <Avatar author={author} createdAt={createdAt} />
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content.html }}
      ></div>
    </SinglePostSectionContainer>
  );
};

export default SinglePostSection;
