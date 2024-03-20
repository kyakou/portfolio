import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const theme = "dark";
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {/* Name goes here */}
                <b>aliazhar</b>.
              </h1>

              <div className="flex items-center">
                {/* <Button onClick={() => window.open("https://www.github.com/kyakou", '_blank')}>
                  <div style={{ marginRight: '5px' }}>
                    <img className="h-5" src={`/images/github.svg`}></img>
                  </div>
                </Button>

                <Button onClick={() => window.open("https://www.linkedin.com/in/-ali-azhar/", '_blank')}>
                  <div style={{ marginRight: '10px' }}>
                    <img className="h-5" src={`/images/linkedin.png`}></img>
                  </div>
                </Button> */}


                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu"
                  ></img>
                </Popover.Button>
              </div>

            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-slate-800"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        router.push("/resume")
                      }
                    >
                      Resume
                    </Button>
                  )}

                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          <b>aliazhar.</b>
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {/* {mounted && theme && (
              <Button
                onClick={() => window.open("https://www.github.com/kyakou", '_blank')}
              >
                <img
                  className="h-6"
                  src={`/images/github.svg`}
                ></img>
              </Button>
            )}
            {mounted && theme && (
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/-ali-azhar/", '_blank')}
              >
                <img
                  className="h-6"
                  src={`/images/linkedin.png`}
                ></img>
              </Button>
            )} */}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            {/* {mounted && theme && (
              <Button
                onClick={() => window.open("https://www.github.com/kyakou", '_blank')}
              >
                <img
                  className="h-6"
                  src={`/images/github.svg`}
                ></img>
              </Button>
            )}
            {mounted && theme && (
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/-ali-azhar/", '_blank')}
              >
                <img
                  className="h-6"
                  src={`/images/linkedin.png`}
                ></img>
              </Button>
            )} */}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;