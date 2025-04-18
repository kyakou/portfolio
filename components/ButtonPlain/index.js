import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const ButtonPlain = ({ children, onClick, classes }) => {
  const { theme } = useTheme();

  // Determine additional class based on theme
  const themeClass = theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center justify-center transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 ${themeClass} ${data.showCursor && "cursor-none"} ${classes}`}
    >
      {children}
    </button>
  );
};

export default ButtonPlain;
