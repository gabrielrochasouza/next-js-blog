import React from "react";
import {
  graphcms,
  querySinglePost,
  slugList,
  queryFirstThreePosts,
} from "../../services/api";
import SinglePostSection from "../../components/singlePostSection";
import Head from "next/head";
import Loading from "../../components/loading";

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
  const otherPosts = await graphcms.request(queryFirstThreePosts);
  return {
    props: {
      posts,
      otherPosts,
    },
    revalidate: 10,
  };
}

const PostPage = ({ posts, otherPosts }) => {
  const { title, excerpt } = posts[0];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Head>
      {!posts.length && <Loading />}
      <main className="container">
        <SinglePostSection posts={posts} otherPosts={otherPosts} />
        <div className="flex-container top-cards-news"></div>
      </main>
    </>
  );
};

export default PostPage;
