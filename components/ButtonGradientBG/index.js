import React from "react";
import data from "../../data/portfolio.json";

const ButtonGradientBG= ({
  children,
  type,
  onClick,
  classes,
  gradientFrom,
  gradientTo,
}) => {
  // Define the gradient string based on props
  const gradient = gradientFrom && gradientTo 
    ? `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` 
    : "bg-black"; // Default background if no gradient is provided

  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg text-white transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${data.showCursor && "cursor-none"} ${classes}`}
        style={{ backgroundImage: gradient }}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-600 text-white hover:scale-105 active:scale-100 tablet:first:ml-0 ${data.showCursor && "cursor-none"} ${classes} link`}
      style={{ backgroundImage: gradient }}
    >
      {children}
    </button>
  );
};

export default ButtonGradientBG;
