import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import Head from 'next/head';
import {Document, Page} from 'react-pdf';

// Data
import portfolio from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = "dark"
  const [mount, setMount] = useState(false);
  const {name, showResume} = portfolio;

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor}
      <Head>
      <title>{data.name} | Resume</title>
      </Head>
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
          
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
