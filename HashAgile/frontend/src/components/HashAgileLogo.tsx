import React from 'react';
import hashagileLogo from '../assets/hashagile_logo.jpeg';

export const HashAgileLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      <img
        src={hashagileLogo}
        alt="HashAgile Icon"
        className="h-[44px] sm:h-[46px] lg:h-[48px] w-auto object-contain block shrink-0"
      />

      <div className="flex flex-col justify-center">
        <span className="font-bold text-[23px] sm:text-[25px] lg:text-[27px] tracking-[0.02em] text-[#111836] leading-none whitespace-nowrap">
          HASH AGILE
        </span>

        <div className="flex items-center justify-between text-[9.5px] sm:text-[10.5px] lg:text-[11.5px] font-normal text-[#111836] uppercase mt-1 sm:mt-1.5 w-full leading-none">
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

