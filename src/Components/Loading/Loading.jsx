import React from "react";
import brandLogo from "../../assets/logo (1).png"

const Loading = ({ message = "Loading Apps..." }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <img
          src={brandLogo}
          alt="Loading..."
          className="w-16 h-16 animate-spin"
        />
        <p className="mt-4 text-blue-600 font-semibold text-lg">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
