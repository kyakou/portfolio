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

      <Button
        onClick={() => window.open("https://www.instagram.com/aliezazhar", '_blank')}
      >
        <div>
          <img className="h-5" src={`/images/ig.svg`} alt="Instagram"></img>
        </div>
      </Button>
      
      {yourData.socials.map((social, index) => (
        <Button
          key={social.id || index} // Preferred to use a unique id if available
        >
          {social.title}
        </Button>
      ))}

    </div>
  );
};

export default Socials;
