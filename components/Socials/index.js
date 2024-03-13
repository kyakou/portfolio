import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => {
            // Check if social.title contains '@'
            if (!social.title.includes("@")) {
              // If it doesn't contain '@', open the link
              window.open(social.link);
            }
          }}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
