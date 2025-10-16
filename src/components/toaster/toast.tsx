// src/components/Toast.js
import React from "react";

const Toast = ({ message, type }) => {
    console.log(message, type)
  const bgColors = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={`flex items-center justify-between ${bgColors[type]} text-white px-4 py-2 rounded shadow-md animate-slide-in`}
    >
      <span>{message}</span>
      {/* Optional close icon */}
      {/* <XMarkIcon className="h-5 w-5 cursor-pointer" /> */}
    </div>
  );
};

export default Toast;
