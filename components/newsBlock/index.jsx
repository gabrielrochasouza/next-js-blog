import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "../avatar";
import { NewsBlockContainer } from "./style";

const NewsBlock = ({ post }) => {
  const {
    id,
    slug,
    createdAt,
    excerpt,
    title,
    coverImage,
    author,
    categories,
  } = post;
  return (
    <NewsBlockContainer>
      <Link href={"/posts/" + slug}>
        <figure>
          <Image src={coverImage?.url} alt={title} width={800} height={800} />
          <figcaption>{title}</figcaption>
        </figure>
        <div>
          <span className="category">
            {categories?.map((cat) => cat.name).join(', ')}
          </span>
          <h2>{title}</h2>
          <span>{excerpt}</span>
          <Avatar author={author} createdAt={createdAt} />
        </div>
      </Link>
    </NewsBlockContainer>
  );
};

export default NewsBlock;
