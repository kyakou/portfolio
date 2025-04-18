import React, { useState, useEffect } from 'react';

const Switcher2 = ({ center = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const texts = [
    { textOne: "您不应该在这里"},
    { textOne: "youshouldnotbehere"}
   
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey(prevKey => prevKey + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  // Apply the centering class conditionally
  const textClass = `${center ? 'center-text' : ''}`;

  return (
    <div className="text-container">
      <div key={key} className={`text-xl ${textClass}`}>
        {texts[currentIndex].textOne}
      </div>
    </div>
  );
};

export default Switcher2;
