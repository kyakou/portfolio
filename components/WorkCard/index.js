import React, { useState } from "react";

const WorkCard = ({ img, name, description, onClick, url }) => {
  const cursorStyle = url ? 'pointer' : 'default';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-xl shadow-lg p-2 laptop:p-4 first:ml-0 link hover:scale-105 transition-all ease-out duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <button onClick={url ? onClick : undefined} style={{ all: 'unset', cursor: cursorStyle }}>
        <h1 className={`mt-5 text-3xl mob:text-2xl font-bold`}>
            {name ? name : "Project Name"}
        </h1>
      </button>
      <h2 className="mob:text-l mob:mt-2 tablet:text- opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
