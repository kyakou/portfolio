import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const ButtonGradient = ({ children, onClick, classes }) => {
  const { theme } = useTheme();

  // Determine additional class based on theme
  const themeClass = theme === "dark" ? "bg-white text-black" : "bg-white text-black";

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`button-85 text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 flex items-center justify-center transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${data.showCursor && "cursor-none"} ${themeClass} ${classes}`}
      >
        {children}
      </button>
      <style jsx global>{`
        .button-85 {
          padding: 0.6em 2em;
          border: none;
          outline: none;
          color: rgb(255, 255, 255);
          background: #111;
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 10px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .button-85:before {
          content: "";
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          z-index: -1;
          filter: blur(5px);
          -webkit-filter: blur(5px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          animation: glowing-button-85 20s linear infinite;
          transition: opacity 0.3s ease-in-out;
          border-radius: 10px;
        }

        @keyframes glowing-button-85 {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }

        .button-85:after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #222;
          left: 0;
          top: 0;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default ButtonGradient;
