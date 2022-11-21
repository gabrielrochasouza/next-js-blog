import React from "react";
import { graphcms, querySinglePost, slugList } from "../../services/api";
import SinglePostSection from "../../components/singlePostSection";
import Head from "next/head";

export async function getStaticPaths() {
  const { posts } = await graphcms.request(slugList);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { posts } = await graphcms.request(querySinglePost, {
    slug: params.slug,
  });
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

const PostPage = ({ posts }) => {
  const { title, excerpt } = posts[0];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      <main className="container">
        <SinglePostSection posts={posts} />
      </main>
    </>
  );
};

export default PostPage;