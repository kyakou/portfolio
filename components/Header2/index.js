import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header2 = ({ handleWorkScroll, handleAboutScroll, isBlog, children }) => {
  const router = useRouter();
  const theme = "dark";
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.max(1 - (scrollTop / 100), 0);
      setHeaderOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
            <h1
              onClick={() => router.push("/")}
              className="font-medium p-2 laptop:p-0 link text-current cursor-pointer"
            >
              {children}
            </h1>
              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${!open ? theme === "dark" ? "menu-white.svg" : "menu.svg" : theme === "light" ? "cancel.svg" : "cancel-white.svg"}`}
                    alt="Menu"
                  ></img>
                </Popover.Button>
              </div>

            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-slate-800"} shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {data.showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {data.showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {data.showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {data.showResume && (
                    <Button onClick={() => router.push("/resume")}>Resume</Button>
                  )}
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky top-0 z-10 tablet:flex ${theme === "light" ? "bg-white" : "transparent"} dark:text-white`}
        style={{ opacity: headerOpacity }}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 text-s"
        >
          {/* Render children here */}
          {children}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {data.showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {data.showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {data.showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {data.showResume && (
              <Button onClick={() => router.push("/resume")}>Resume</Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header2;
