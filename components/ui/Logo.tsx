import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = "h-10 w-auto", variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? '#064e3b' : '#ffffff';

  return (
    <svg
      className={className}
      viewBox="0 0 260 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Logo Icon */}
      <g transform="translate(5, 5)">
        {/* Sun/Circle */}
        <circle cx="25" cy="25" r="20" fill="#ecfdf5" />
        {/* Leaf Right */}
        <path
          d="M25 45C25 45 25 20 45 15C45 15 38 30 38 45"
          fill="#10b981"
        />
        {/* Leaf Left */}
        <path
          d="M25 45C25 45 25 25 10 20C10 20 15 35 15 45"
          fill="#34d399"
        />
        {/* Stem */}
        <path
          d="M25 45V15"
          stroke="#047857"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      
      {/* Company Name */}
      <text
        x="65"
        y="38"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="800"
        fill={textColor}
        letterSpacing="-0.02em"
      >
        Тим Промет-ЕМ
      </text>
    </svg>
  );
}
