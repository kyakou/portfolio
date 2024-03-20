import React from 'react';
import Router from 'next/router';
import { ISOToDate } from '../../utils'; // Make sure this path is correct

const RecentBlogs = ({ posts }) => {
  // If posts are undefined, return a message
  if (!posts) {
    console.error('RecentBlogs: `posts` is undefined.');
    return <p>Blog posts could not be found.</p>;
  }

  // If posts is not an array, return a message
  if (!Array.isArray(posts)) {
    console.error('RecentBlogs: `posts` is not an array.', posts);
    return <p>Incorrect data format for blog posts.</p>;
  }

  return (
    <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10 tablet:m-10">
      {posts.map((post) => (
        <div
          className="cursor-pointer relative"
          key={post.slug}
          onClick={() => Router.push(`/blog/${post.slug}`)}
        >
          <img
            className="w-full h-40 rounded-lg shadow-lg object-cover"
            src={post.image}
            alt={post.title}
          />
          <h2 className="mt-5 text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 opacity-50 text-m">
            {post.preview.length > 150 ? post.preview.substring(0, 150) + '...' : post.preview}
          </p>
          <span className="text-sm mt-5 opacity-25">
            {ISOToDate(post.date)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogs;
