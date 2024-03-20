import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  };

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      <Button
        onClick={() => window.open("https://www.github.com/kyakou", '_blank')}
      >
        <div>
          <img className="h-5" src={`/images/github.svg`} alt="Github"></img>
        </div>
      </Button>

      <Button
        onClick={() => window.open("https://www.linkedin.com/in/-ali-azhar", '_blank')}
      >
        <div>
          {/* style={{ marginRight: '5px' } */}
          <img className="h-5" src={`/images/linkedin.png`} alt="Linkedin"></img>
        </div>
      </Button>
      
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          title={social.title.includes("@") ? "Click to copy to clipboard" : "Open link"}
          onClick={() => {
            if (social.title.includes("@")) {
              // Copy to clipboard
              copyToClipboard(social.title);
            } else {
              // Open the link
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
