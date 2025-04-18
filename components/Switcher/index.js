import React, { useState, useEffect } from 'react';

const Switcher = ({ center = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const texts = [
    { textOne: "Settings", textTwo: "Remember to save." },
    { textOne: "您不应该在这里", textTwo: "You shouldn't be here" },
    { textOne: "وَٱلْعَصْرِ إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ", textTwo: "By time-- surely humanity is in grave loss" },
    { textOne: "落花流水", textTwo: "Fallen flowers and flowing water" },
    { textOne: "حَتَّىٰ زُرْتُمُ ٱلْمَقَابِرَ", textTwo: "Until you end up in your grave" },
    { textOne: "饮泣吞声", textTwo: "To drink tears and swallow sobs" },
    { textOne: "وَرَحْمَتِى وَسِعَتْ كُلَّ شَىْءٍ", textTwo: "My mercy encompasses all things" },
    { textOne: "白发苍苍", textTwo: "White hair, vast and boundless" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey(prevKey => prevKey + 1);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  // Apply the centering class conditionally
  const textClass = `${center ? 'center-text' : ''}`;

  return (
    <div className="text-container">
      <div key={key} className={`text-3xl ${textClass}`}>
        {texts[currentIndex].textOne}
      </div>
      <div key={key + 1} className={`text-xl ${textClass}`} style={{ marginTop: '20px' }}>
        {texts[currentIndex].textTwo}
      </div>
    </div>
  );
};

export default Switcher;
