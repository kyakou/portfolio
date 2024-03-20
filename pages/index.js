import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  

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
      {data.showCursor && <Cursor />}
      <Head>
        <title>Ali | Home</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-10 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <div>
          <Socials className="mt-2 mob:mt-8 laptop:mt-5" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold"><strong>Work</strong></h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => {
                  // Check if project.url is not defined or empty
                  if (!project.url) {
                    // Do nothing
                    return;
                  }

                  // Check if the URL contains a dot, open in a new tab
                  if (project.url.includes('.')) {
                    window.open(project.url, '_blank');
                  } else {
                    // If the URL does not contain a dot, navigate in the same tab
                    window.location.href = project.url;
                  }
                }}
              />
            ))}

          </div>
        </div>

        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services</h1>
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
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold"><strong>About</strong></h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5">
            {/* {data.aboutpara} */}
            👋 <strong>I&rsquo;m Ali Azhar,</strong> an aspiring developer and a passionate engineering student at Langara College. Whether it&rsquo;s through the tech that I create or the volunteer work that I do, every project and initiative I undertake is driven by my desire to make the world a better place. I&rsquo;m always looking for opportunities for learning and growth, be it through formal education, hands-on projects, or collaborative experiences with peers and mentors in the field.
            <br></br>
            <br></br>🚀 I&rsquo;m one of the Founders of <strong>Inspired 2 Uplift</strong>, a nonprofit dedicated to empowering youth with disabilities and fighting the battle against societal stigmas around disability. I am the Logistics Chair of the <strong>Richmond Youth Foundation</strong>, where I lead a team of volunteers and spearhead projects designed to get Richmond youth more involved with community initiatives and nonprofit work. And finally, I&rsquo;m passionate about robotics, AI, engineering, and the technology of the future.
            <br></br>
            <br></br>✉️ Feel free to reach out if you have any questions, opportunities, or just want to talk! I&rsquo;m always open to exploring collaborations, sharing insights, or lending a helping hand in projects that aim to make a meaningful impact! Let&rsquo;s create something amazing together!
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
