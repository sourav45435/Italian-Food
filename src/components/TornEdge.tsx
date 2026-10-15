import React from 'react';

interface TornEdgeProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
  flip?: boolean;
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  color = '#ffffff',
  position = 'bottom',
  className = '',
  flip = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none z-10 ${
        position === 'bottom' ? 'relative -bottom-0.5' : 'relative -top-0.5'
      } ${flip ? 'scale-y-[-1]' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        className="w-full h-5 md:h-7 block"
        style={{ fill: color }}
      >
        <path d="M0,0 L0,18 Q30,28 60,16 T120,24 T180,12 T240,26 T300,14 T360,25 T420,10 T480,27 T540,15 T600,28 T660,12 T720,26 T780,14 T840,28 T900,10 T960,25 T1020,14 T1080,27 T1140,12 T1200,22 L1200,0 Z" />
      </svg>
    </div>
  );
};

export const BlackTornDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-8 md:h-12 block"
        style={{ fill: '#0c0a09' }} // Dark charcoal matching the menu section
      >
        <path d="M0,0 L0,35 Q40,60 80,32 T160,50 T240,24 T320,54 T400,28 T480,56 T560,20 T640,52 T720,30 T800,58 T880,22 T960,54 T1040,28 T1120,58 T1200,24 T1280,52 T1360,26 T1440,48 L1440,60 L0,60 Z" />
      </svg>
    </div>
  );
};
