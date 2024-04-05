import React from 'react';
import Router from 'next/router';
import { ISOToDate } from '../../utils';
import ButtonGradient from '../ButtonGradient';

const placeholderImages = [
  'https://images.unsplash.com/photo-1710525026358-cefacd2c228d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  'https://images.unsplash.com/photo-1653832920174-1f333e009b62?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1709895353959-5e170f933758?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const RecentBlogs = ({ posts, showSeeMoreButton }) => {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    console.error('RecentBlogs: `posts` is undefined or not an array or empty.');
    return null; // Returns nothing if no posts
  }

  const getRandomPlaceholderImage = () => {
    return placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  };

  const getPreviewText = (post) => {
    if (post.preview && post.preview.length >= 140) {
      return post.preview.substring(0, 140) + '...';
    } else if (post.preview && post.preview.length < 140) {
      return post.preview;
    } else {
      return post.content ? post.content.substring(0, 140) + '...' : 'No preview available...';
    }
  };

  return (
    <>
      <h1 className="tablet:m-10 mob:mt-10 tablet:mt-19 text-2xl font-bold mob:ml-6 mob:mr-6">Recent Blogs</h1>
      <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 justify-between gap-10 tablet:m-10">
        {posts.map((post) => (
          <div
            className="cursor-pointer relative overflow-hidden rounded-lg shadow-lg transition-all ease-out duration-300 hover:scale-110"
            key={post.slug}
            onClick={() => Router.push(`/blog/${post.slug}`)}
          >
            <img
              className="w-full h-40 object-cover transition-all ease-out duration-300"
              src={post.image || getRandomPlaceholderImage()}
              alt={post.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 mb-2 opacity-50 text-m">
                {getPreviewText(post)}
              </p>
              <span className="text-sm mt-5 opacity-25">
                {ISOToDate(post.date)}
              </span>
            </div>
          </div>
        ))}
        {showSeeMoreButton && (
          <div className="col-span-full flex justify-center mt-1">
            <ButtonGradient onClick={() => Router.push('/blog')}>View all blogs</ButtonGradient>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentBlogs;
