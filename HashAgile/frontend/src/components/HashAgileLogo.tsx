import React from 'react';
import hashagileLogo from '../assets/hashagile_logo.jpeg';

interface HashAgileLogoProps {
  className?: string;
  isDarkBg?: boolean;
}

export const HashAgileLogo: React.FC<HashAgileLogoProps> = ({
  className = "",
  isDarkBg = false,
}) => {
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 ${className}`}>
      {isDarkBg ? (
        <svg
          viewBox="0 0 100 100"
          className="h-[44px] sm:h-[46px] lg:h-[48px] w-auto shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="white" strokeWidth="9" strokeLinecap="round">
            <line x1="20" y1="36" x2="80" y2="36" />
            <line x1="16" y1="64" x2="76" y2="64" />
            <line x1="42" y1="16" x2="32" y2="84" />
            <line x1="68" y1="16" x2="58" y2="84" />
          </g>
          <circle cx="50" cy="50" r="16" stroke="white" strokeWidth="8" fill="none" />
          <path d="M41 33 L49 31 L46 40 Z" fill="white" />
          <path d="M59 67 L51 69 L54 60 Z" fill="white" />
        </svg>
      ) : (
        <img
          src={hashagileLogo}
          alt="HashAgile Icon"
          className="h-[44px] sm:h-[46px] lg:h-[48px] w-auto object-contain block shrink-0"
        />
      )}

      <div className="flex flex-col justify-center">
        <span
          className={`font-bold text-[23px] sm:text-[25px] lg:text-[27px] tracking-[0.02em] leading-none whitespace-nowrap ${
            isDarkBg ? 'text-white' : 'text-[#111836]'
          }`}
        >
          HASH AGILE
        </span>

        <div
          className={`flex items-center justify-between text-[9.5px] sm:text-[10.5px] lg:text-[11.5px] font-normal uppercase mt-1 sm:mt-1.5 w-full leading-none ${
            isDarkBg ? 'text-white' : 'text-[#111836]'
          }`}
        >
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


