// src/components/ToastContainer.js
import React from "react";
import Toast from "./toast";

const ToastContainer = ({ toasts }) => {
  console.log(toasts)
  return (
    <div className="fixed top-5 right-5 flex flex-col gap-3 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
