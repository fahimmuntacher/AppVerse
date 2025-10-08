import React from 'react';
import brandLog from '../../assets/logo (1).png';

const Loading = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-white/80 backdrop-blur-sm z-50">
  <div className="relative w-32 h-32">
    {/* Outer spinning ring */}
    <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-b-blue-300 animate-spin"></div>

    {/* Inner glowing ring for effect */}
    <div className="absolute inset-3 rounded-full border-2 border-blue-200 blur-[1px] animate-pulse"></div>

    {/* Your brand logo */}
    <img 
      src={brandLog} 
      alt="Brand Logo" 
      className="absolute inset-1/4 w-1/2 h-1/2 object-contain animate-spin rounded-full"
    />
  </div>
</div>

    );
};

export default Loading;
