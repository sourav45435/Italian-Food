import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (dark text), 'dark' is for dark backgrounds (white text)
  height?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  height = 48,
}) => {
  const textColor = variant === 'dark' ? '#ffffff' : '#15325b';
  const subTextColor = variant === 'dark' ? '#cbd5e1' : '#1e3a63';
  const calculatedWidth = Math.round((height * 540) / 280);

  return (
    <svg
      viewBox="0 0 540 280"
      width={calculatedWidth}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      style={{ aspectRatio: '540 / 280' }}
      className={`inline-block select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Noi, la qualità srl logo"
      textRendering="geometricPrecision"
      shapeRendering="geometricPrecision"
    >
      <defs>
        {/* 3D Sphere Radial Gradient */}
        <radialGradient
          id={`sphereGradient-${variant}`}
          cx="38%"
          cy="32%"
          r="65%"
          fx="32%"
          fy="28%"
        >
          <stop offset="0%" stopColor="#7ec6f8" />
          <stop offset="25%" stopColor="#3b8fe8" />
          <stop offset="65%" stopColor="#1e5cb8" />
          <stop offset="90%" stopColor="#113a7c" />
          <stop offset="100%" stopColor="#0b2959" />
        </radialGradient>

        {/* Soft shadow under the sphere */}
        <filter id={`softGlow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="4"
            floodOpacity={variant === 'dark' ? 0.35 : 0.18}
            floodColor={variant === 'dark' ? '#000000' : '#0b2959'}
          />
        </filter>
        <style>
          {`
            .logo-text-title {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 'Arial Black', Impact, 'Trebuchet MS', sans-serif;
              font-weight: 900;
              font-style: italic;
              letter-spacing: -1.5px;
            }
            .logo-text-sub {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
              font-weight: 800;
            }
          `}
        </style>
      </defs>

      <g transform="translate(0, 10)">
        {/* Top-Left Green Waves */}
        {/* Upper Green Wave */}
        <path
          d="M 100 88 C 130 88, 170 54, 218 52 C 248 51, 275 62, 286 67"
          stroke="#52baa2"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower Green Wave */}
        <path
          d="M 100 125 C 135 125, 172 90, 222 88"
          stroke="#52baa2"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central 3D Blue Sphere */}
        <circle
          cx="276"
          cy="110"
          r="52"
          fill={`url(#sphereGradient-${variant})`}
          filter={`url(#softGlow-${variant})`}
        />

        {/* Right Yellow/Orange Waves */}
        {/* Upper Yellow Wave */}
        <path
          d="M 334 118 C 352 108, 385 90, 448 90"
          stroke="#f2a632"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Lower Yellow Wave */}
        <path
          d="M 270 174 C 330 174, 380 128, 448 128"
          stroke="#f2a632"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Brand Text: "Noi," */}
        <text
          x="102"
          y="180"
          fill={textColor}
          className="logo-text-title"
          fontFamily="'Arial Black', Impact, 'Trebuchet MS', -apple-system, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="48"
          letterSpacing="-1"
        >
          Noi,
        </text>

        {/* Brand Text: "la qualità" */}
        <text
          x="190"
          y="235"
          fill={textColor}
          className="logo-text-title"
          fontFamily="'Arial Black', Impact, 'Trebuchet MS', -apple-system, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="50"
          letterSpacing="-1"
        >
          la qualità
        </text>

        {/* Registered symbol ® */}
        <text
          x="448"
          y="208"
          fill={textColor}
          className="logo-text-sub"
          fontFamily="Arial, -apple-system, sans-serif"
          fontWeight="bold"
          fontSize="17"
        >
          ®
        </text>

        {/* "srl" below ® */}
        <text
          x="447"
          y="228"
          fill={subTextColor}
          className="logo-text-sub"
          fontFamily="Arial, -apple-system, sans-serif"
          fontWeight="bold"
          fontStyle="italic"
          fontSize="14"
        >
          srl
        </text>
      </g>
    </svg>
  );
};
