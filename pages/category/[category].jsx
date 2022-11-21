import React from "react";
import {
  graphcms,
  singleCategoryQuery,
  categoryList,
} from "../../services/api";
import Head from "next/head";
import NewsSection from "../../components/newsSection";
import Aside from "../../components/aside";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const { categories } = await graphcms.request(categoryList);
  return {
    paths: categories.map((category) => ({
      params: { category: category.name },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { posts, categories } = await graphcms.request(singleCategoryQuery, {
    category: params.category,
  });
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 10,
  };
}

const PostPage = ({ posts, categories }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Head>
        <title>{"Categoria " + category}</title>
        <meta name="description" content={"Lista de categorias"} />
      </Head>
      <main className="container flex-container">
        <NewsSection posts={posts} category={category} />
        <Aside isInHomePage={false} posts={posts} categories={categories} />
      </main>
    </>
  );
};

export default PostPage;
