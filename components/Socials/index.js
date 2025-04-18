import React from "react";
import Button from "../Button";

import data from "../../data/portfolio.json";

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
        onClick={() => window.open("https://www.linkedin.com/in/alieazhar", '_blank')}
      >
        <div>
          {/* style={{ marginRight: '5px' } */}
          <img className="h-5" src={`/images/linkedin.png`} alt="Linkedin"></img>
        </div>
      </Button>

      {data.showInstagram && (
        <Button
          onClick={() => window.open("https://www.instagram.com/aliezazhar", '_blank')}
        >
          <div>
            <img className="h-5" src={`/images/ig.svg`} alt="Instagram"></img>
          </div>
        </Button>
      )}
      
      {data.showYouTube && (
        <Button
          onClick={() => window.open("https://www.youtube.com/@alieazhar", '_blank')}
        >
          <div>
            <img className="h-7" src={`/images/yt.svg`} alt="YouTube"></img>
          </div>
        </Button>
      )}


      {data.socials.map((social, index) => (
        <Button
          key={social.id || index}
        >
          {social.title}
        </Button>
      ))}

    </div>
  );
};

export default Socials;
