import Image from "next/image";
import React, { useState } from "react";
import Avatar from "../avatar";
import { SinglePostSectionContainer, CommentsContainer } from "./style";
import { BsThreeDotsVertical } from "react-icons/bs";
import { submitComment, getPost } from "../../services/api";
import { toast } from "react-hot-toast";
import NewsCard from "../newsCard";

const SinglePostSection = ({ posts, otherPosts }) => {
  const [post, setPost] = useState(posts[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [maxComments, setMaxComments] = useState(5);
  const {
    id,
    slug,
    content,
    createdAt,
    title,
    coverImage,
    author,
    categories,
    comments,
  } = post;

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
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            try {
              await submitComment({
                name,
                email,
                comment,
                slug,
              })
                .then((res) => {
                  toast.success("Comentário criado com sucesso!");
                })
                .catch((err) => {
                  toast.error("Ocorreu um erro!");
                });
              const result = await getPost(slug);
              setPost(result.posts[0]);
            } catch (err) {
              console.log(err);
            }
            setLoading(false);
          }}
        >
          <h2>Deixe seu comentário</h2>

          <input
            required
            className="name"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="email"
            className="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            type="text"
            placeholder="Deixe o comentário"
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <div class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <>Comentar</>
            )}
          </button>
        </form>
      </CommentsContainer>
      <CommentsContainer>
        <h2>Comentários</h2>
        {comments.length === 0 ? (
          <p>Ainda Não há nenhum comentário. Seja o primeiro a comentar!!</p>
        ) : (
          <>
            {comments.slice(0, maxComments).map((comment) => (
              <div className="comment" key={comment.id}>
                <div className="comment-initials-name">
                  {comment.name
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0].toUpperCase())
                    .join("")}
                </div>
                <div className="comment-content">
                  <h4>
                    {comment.name} •{" "}
                    <span className="datetime">
                      {new Date(comment.createdAt).toLocaleDateString() +
                        " - " +
                        new Date(comment.createdAt)
                          .toLocaleTimeString()
                          .slice(0, -3)}
                    </span>
                  </h4>
                  <p>{comment.comment}</p>
                </div>
                <div className="config">
                  <BsThreeDotsVertical />
                </div>
              </div>
            ))}
            {maxComments < comments.length && (
              <button
                className="showMore"
                onClick={() => setMaxComments(maxComments + 5)}
              >
                Ver Mais Comentários
              </button>
            )}
          </>
        )}
      </CommentsContainer>
      <h3 className="container otherPosts">Outros posts</h3>
      <div className="flex-container top-cards-news otherPosts">
        {otherPosts.posts.map((otherPost) => (
          <NewsCard key={otherPost.id} post={otherPost} />
        ))}
      </div>
    </>
  );
};

export default SinglePostSection;
