
import React from 'react';

export const ZeroVortexLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      <span className="text-zerovortex-neon font-bold text-2xl">Z</span>
      <span className="text-white font-bold text-2xl">V</span>
    </div>
  );
};
