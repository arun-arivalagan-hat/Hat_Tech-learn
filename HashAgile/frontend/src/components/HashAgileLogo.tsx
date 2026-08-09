import React from 'react';

export const HashAgileLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      <img
        src="/hashagile_logo.jpeg"
        alt="HashAgile Icon"
        className="h-8 sm:h-10 lg:h-[44px] w-auto object-contain block shrink-0"
      />

      <div className="flex flex-col justify-center">
        <span className="font-bold text-base sm:text-xl lg:text-[22px] tracking-[0.03em] text-[#111836] leading-none font-sans whitespace-nowrap">
          HASH AGILE
        </span>

        <div className="flex items-center justify-between text-[6.5px] sm:text-[8px] lg:text-[8.5px] font-bold text-[#111836] uppercase mt-1 sm:mt-1.5 w-full">
          <span>T</span>
          <span>E</span>
          <span>C</span>
          <span>H</span>
          <span>N</span>
          <span>O</span>
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>I</span>
          <span>E</span>
          <span>S</span>
        </div>
      </div>
    </div>
  );
};
