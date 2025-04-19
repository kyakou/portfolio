import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import ImageCard from "../components/ImageCard";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import ButtonGradientBG from "../components/ButtonGradientBG";
import AboutCard from "../components/AboutCard";
import { Container, Row, Column } from 'react-bootstrap';


// Local Data
import data from "../data/portfolio.json";
import { getAllPosts } from '../utils/api'
import RecentBlogs from '../components/RecentBlogs'; // Adjust the import path as necessary'

export async function getStaticProps() {
  // Fetch all posts and sort them
  const allPosts = getAllPosts(['slug', 'title', 'image', 'preview', 'date'])
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Calculate the total number of posts
  const totalPostsCount = allPosts.length;

  // Now slice the array to get only the most recent three posts
  const posts = allPosts.slice(0, 3);

  return {
    props: {
      posts,
      totalPostsCount,
    },
  };
}

export default function Home({ posts, totalPostsCount }) {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const showSeeMoreButton = totalPostsCount > 3;

  const showBlog = data.showBlog;

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor}
      <Head>
        <title>Ali | Home</title>
      </Head>

      {data.showGradient && <div className="gradient-circle"></div>}
      {data.showGradient && <div className="gradient-circle-bottom"></div>}

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-10 mt-10">
          <div className="mt-5 mob:ml-3">
            <h1
              ref={textOne}
              className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 font-semibold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-semibold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-semibold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-semibold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <div className="mob:ml-3">
          <Socials className="mt-2 mob:mt-8 laptop:mt-5" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 mob:ml-1 mob:mr-1" ref={workRef}>
          <h1 className="text-2xl font-bold"><strong>Work</strong></h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 justify-center">
            {data.projects.map((project, index, projects) => {
              const isLastItem = index === projects.length - 1;
              const isOddNumberOfProjects = projects.length % 2 !== 0;
              
              // Conditional wrapper for the last item if the number of projects is odd
              const projectContent = (
                <WorkCard
                  key={project.id}
                  img={project.imageSrc}
                  name={project.title}
                  description={project.description}
                  url={project.url}
                  onClick={() => {
                    if (!project.url) return;
                    project.url.includes('.') ? window.open(project.url, '_blank') : (window.location.href = project.url);
                  }}
                />
              );

              if (isLastItem && isOddNumberOfProjects) {
                // Wrap the last item to center it
                return (
                  <div key={project.id} className="tablet:col-span-2 flex justify-center">
                    {projectContent}
                  </div>
                );
              } else {
                return projectContent;
              }
            })}
          </div>



        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl font-bold">Services</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

    {/* justify-center items-center */}

    <div className="flex flex-col laptop:flex-row laptop:items-start mx-auto">
      <div className="laptop:w-3/5 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <AboutCard title={"About"}>
              👋 <strong>I&rsquo;m Ali Azhar,</strong> an aspiring developer and a passionate engineering student at <strong>Langara College</strong>. Whether it&rsquo;s through the tech that I create or the volunteer work that I do, every project and initiative I undertake is driven by my desire to make the world a better place. 
              I&rsquo;m always looking for opportunities for learning and growth, be it through formal education, hands-on projects, or collaborative experiences with peers and mentors in the field.
              <br></br>
              <br></br>🚀 I am one of the Founders of <strong>Inspired 2 Uplift</strong>, a nonprofit dedicated to empowering youth with disabilities and fighting the battle against societal stigmas around disability. In my spare time, I enjoy learning about robotics, AI, and the technology of the future.
              <br></br>
              <br></br>✉️ Feel free to reach out if you have any questions, opportunities, or just want to talk! I&rsquo;m always open to exploring collaborations, sharing insights, or lending a helping hand in projects that aim to make a meaningful impact!
              {/*  <strong>Let&rsquo;s create something amazing together!</strong> */}
          </AboutCard>
      </div>
      {/* <div className="laptop:w-2/5 laptop:mt-30 pl-6 laptop:pr-4 z-20 relative">
        <ImageCard
                    img={"https://static.wixstatic.com/media/004224_6b41701cc84b4ef7ac7411c9a4fb7caa~mv2.jpg/v1/fill/w_670,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/004224_6b41701cc84b4ef7ac7411c9a4fb7caa~mv2.jpg"}
                    name={"Test button"}
                    description={"Check out my work here!"}
                    url={"https://i2u.li"}
          />
        <div className="flex justify-center z-10 relative -mt-6">
        </div>
      </div> */}
    </div>
      {showBlog && (
      <div className="mob:ml-6 mob:mr-6"><RecentBlogs posts={posts} showSeeMoreButton={showSeeMoreButton} /></div>
            )}
          <Footer />
  
      </div>
    </div>
  );
}
