
import React from 'react';

export const HeroImage: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 390 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0, 0)">
        <rect x="140" y="140" width="60" height="60" fill="#36f25e" opacity="0.3" />
        <rect x="140" y="80" width="60" height="60" fill="#36f25e" opacity="0.2" />
        <rect x="140" y="20" width="60" height="60" fill="#36f25e" opacity="0.1" />
        <rect x="200" y="140" width="60" height="60" fill="#36f25e" opacity="0.4" />
        <rect x="260" y="140" width="60" height="60" fill="#36f25e" opacity="0.2" />
        <rect x="200" y="200" width="60" height="60" fill="#36f25e" opacity="0.5" />
        <rect x="80" y="200" width="60" height="60" fill="#36f25e" opacity="0.2" />
        <rect x="20" y="200" width="60" height="60" fill="#36f25e" opacity="0.1" />
        <rect x="140" y="200" width="60" height="60" fill="#36f25e" opacity="0.6" />
        <rect x="140" y="260" width="60" height="60" fill="#36f25e" opacity="0.3" />
        <rect x="140" y="320" width="60" height="60" fill="#36f25e" opacity="0.2" />
        <rect x="200" y="80" width="60" height="60" fill="#36f25e" opacity="0.7" className="animate-pulse" />
        <rect x="200" y="260" width="60" height="60" fill="#36f25e" opacity="0.4" />
        <rect x="260" y="200" width="60" height="60" fill="#36f25e" opacity="0.3" />
        <rect x="320" y="200" width="60" height="60" fill="#36f25e" opacity="0.1" />
        <rect x="80" y="140" width="60" height="60" fill="#36f25e" opacity="0.3" />
        <rect x="20" y="140" width="60" height="60" fill="#36f25e" opacity="0.1" />
      </g>

      <g transform="translate(150, 150)" className="animate-pulse-glow">
        <rect x="30" y="30" width="30" height="60" fill="#36f25e" opacity="0.9" />
        <rect x="60" y="0" width="30" height="60" fill="#36f25e" opacity="0.8" />
        <rect x="0" y="0" width="30" height="60" fill="#36f25e" opacity="0.8" />
      </g>
    </svg>
  );
};
