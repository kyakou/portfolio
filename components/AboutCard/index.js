import React from 'react';

const AboutCard = ({ title, onClick, children }) => {
  const isClickable = typeof onClick === 'function';

  return (
    <div
      className={`overflow-hidden rounded-xl shadow-lg p-2 laptop:p-4 transition-all ease-out duration-300 hover:scale-105  ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={isClickable ? onClick : undefined}
      onMouseEnter={() => {/* idk */}}
      onMouseLeave={() => {/* hi */}}
    >
      <div className="p-4">
        {title && (
          <h1 className="text-3xl mob:text-2xl font-bold">
            {title}
          </h1>
        )}
        <div className="text-s laptop:text-m pt-5 mob:mt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
