import Image from "next/image";
import React from "react";
import Avatar from "../avatar";
import { SinglePostSectionContainer, CommentsContainer } from "./style";

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
    <>
      <SinglePostSectionContainer>
        <figure>
          <Image src={coverImage.url} alt={title} width={1000} height={1000} />
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
      <CommentsContainer>
        <form>
          <h2>Deixe seu comentário</h2>

          <input
            required
            className="name"
            type="text"
            placeholder="Digite seu nome"
          />
          <input
            required
            type="email"
            className="email"
            placeholder="Digite seu email"
          />
          <textarea required type="text" placeholder="Deixe o comentário" />

          <button type="submit">Comentar</button>
        </form>
      </CommentsContainer>
      <CommentsContainer>
        <h2>Comentários</h2>
        <p>Ainda Não há nenhum comentário. Seja o primeiro a comentar!!</p>
      </CommentsContainer>
    </>
  );
};

export default SinglePostSection;
