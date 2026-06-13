import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <div className="relative w-9 h-9 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#2563eb" />
            </linearGradient>
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Animated/Glowing outer hexagon */}
          <polygon 
            points="50,8 88,30 88,70 50,92 12,70 12,30" 
            stroke="url(#logoGrad)" 
            strokeWidth="7" 
            strokeLinejoin="round"
            className="animate-pulse"
          />
          
          {/* Internal target reticle */}
          <circle cx="50" cy="50" r="20" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="10 5" />
          
          {/* Core tracking dot */}
          <circle cx="50" cy="50" r="9" fill="#3b82f6" />
        </svg>
      </div>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold text-lg tracking-wider text-white">
            CALGARA
          </span>
          <span className="font-sans font-medium text-[9px] tracking-[0.25em] text-blue-400">
            WORLDWIDE
          </span>
        </div>
      )}
    </div>
  );
};
