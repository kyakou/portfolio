import React from 'react';
import Router from 'next/router';
import Button from "../Button";
import ButtonGradient from "../ButtonGradient";
import { ISOToDate } from '../../utils'; // Make sure this path is correct
import ButtonPlain from '../ButtonPlain';

const RecentBlogs = ({ posts, showSeeMoreButton }) => {
  if (!posts) {
    console.error('RecentBlogs: `posts` is undefined.');
    return <p>Blog posts could not be found.</p>;
  }

  if (!Array.isArray(posts)) {
    console.error('RecentBlogs: `posts` is not an array.', posts);
    return <p>Incorrect data format for blog posts.</p>;
  }

  return (
    <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10 tablet:m-10">
      {posts.map((post) => (
        <div
          className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg transition-all ease-out duration-300 hover:scale-110"
          key={post.slug}
          onClick={() => Router.push(`/blog/${post.slug}`)}
        >
          <img
            className="w-full h-40 object-cover transition-all ease-out duration-300"
            src={post.image}
            alt={post.title}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 mb-2 opacity-50 text-m">
              {post.preview.length > 130 ? post.preview.substring(0, 130) + '...' : post.preview}
            </p>
            <span className="text-sm mt-5 opacity-25">
              {ISOToDate(post.date)}
            </span>
          </div>
        </div>
      ))}
      {showSeeMoreButton && (
        <div className="col-span-full flex justify-center mt-1">
          {/* <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-85"
            onClick={() => Router.push('/blog')}
          >
            See More Blogs
          </Button> */}
          <ButtonPlain onClick={() => Router.push('/blog')} >View all blogs</ButtonPlain>
        </div>
      )}
    </div>
  );
};

export default RecentBlogs;
