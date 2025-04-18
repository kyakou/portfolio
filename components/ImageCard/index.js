import React, { useState } from "react";
import Button from "../Button";

const ImageCard = ({ img, name, description, onClick, url, buttonState, buttonLink, caption }) => {
  const cursorStyle = url ? 'pointer' : 'default';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-xl shadow-lg p-2 laptop:p-4 first:ml-0 link hover:scale-105 transition-all ease-out duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="pt-5 mob:mt-2 mb-2 text-3xl mob:text-2xl font-bold">
          {name}
      </h1>
      <div
        className={`relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto ${cursorStyle === 'pointer' ? 'cursor-pointer' : ''}`}
        style={{ height: "300px" }}
        onClick={url ? onClick : undefined}
      >
        <img
          alt={name}
          className="h-full w-full object-cover"
          src={img}
        />
      </div>
      <h3 className="text-s laptop:text-xs pt-2 text-stone-400">
        {caption}
      </h3>
      <h2 className="text-s laptop:text-m pt-1 mob:mt-2">
          {description}
      </h2>
      <h3 className="flex items-center justify-center">
        <Button type="primary">
                Test button
        </Button>
      </h3>
        <button onClick={url ? onClick : undefined} style={{ all: 'unset', cursor: cursorStyle }}>
      </button>
    </div>
  );
};

export default ImageCard;