import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AsideContainer } from "./style";

const Aside = ({ posts, categories, isInHomePage = true }) => {
  return (
    <AsideContainer>
      {posts.length && (
        <div className="box">
          <h3>Posts Recentes</h3>
          {posts.slice(0, 3).map((post) => (
            <Link key={"Recent" + post.id} href={"/posts/" + post.slug}>
              <div className="avatar">
                <Image
                  width={"50"}
                  height={"50"}
                  src={post.coverImage.url}
                  alt={post.title}
                />
                <div>
                  <span>{post.categories.map((cat) => cat.name)}</span>
                  <p>{post.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {categories.length && (
        <div className="box">
          <h3>Categorias</h3>
          {categories?.map((cat, index) => (
            <p key={index}>
              <Link href={"/category/" + cat.name}>{cat.name}</Link>
            </p>
          ))}
          {!isInHomePage && (
            <button className="go-back">
              <Link href={"/"}>Voltar para página principal</Link>
            </button>
          )}
        </div>
      )}
    </AsideContainer>
  );
};

export default Aside;
