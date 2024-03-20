import React, { useRef, useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import Header from "../../components/Header";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import BlogEditor from "../../components/BlogEditor";
import { useRouter } from "next/router";
import Cursor from "../../components/Cursor";
import data from "../../data/portfolio.json";
import { ISOToDate } from "../../utils";

const BlogPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current, textThree.current, textFour.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.preview} />
      </Head>
      {data.showCursor && <Cursor />}

      <div
        className={`container mx-auto mt-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog={true} />
        <div className="mt-10 flex flex-col">
          <img
            className="w-full h-96 rounded-lg shadow-lg object-cover"
            src={post.image}
            alt={post.title}
          ></img>
          <h1
            ref={textOne}
            className="mt-10 mb-2 text-4xl mob:text-xl laptop:text-6xl font-bold"
          >
            {post.title}
          </h1>
          <h2
            ref={textTwo}
            className="mt-2 mb-2 text-l max-w-4xl text-darkgray opacity-50"
          >
            {post.tagline}
          </h2>
          <h3 ref={textThree} className="mt-2 tablet:text-l max-w-4xl mob:text-s text-darkgray opacity-30" style={{ fontSize: "smaller",color: "rgba(255, 255, 255, 0.5)" }}>
            {ISOToDate(post.date)}
          </h3>
        </div>
        <div ref={textFour}>
        <ContentSection content={post.content}></ContentSection>
        </div>
      </div>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => setShowEditor(true)} type={"primary"}>
            Edit this blog
          </Button>
        </div>
      )}

      {showEditor && (
        <BlogEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )}
    </>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default BlogPost;
