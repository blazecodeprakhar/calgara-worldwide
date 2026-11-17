import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logowithtext.webp"
        alt="Calgara Worldwide"
        className="h-9 sm:h-10 md:h-11 w-auto rounded-lg border border-white/20 shadow-md object-contain hover:opacity-95 transition-all duration-300"
      />
    </div>
  );
};
