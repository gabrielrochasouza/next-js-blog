import React from "react";
import Aside from "../aside";
import { NewsBlockContainer } from "../newsBlock/style";

const NewsPageSection = ({ post }) => {
  const { id, slug, createdAt, title, coverImage, author, categories } = post;
  return <NewsBlockContainer></NewsBlockContainer>;
};

export default NewsPageSection;
