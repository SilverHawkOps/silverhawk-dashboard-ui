// src/context/ToastContext.js
import React, { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "../components/toaster/ToastContainer";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message, type = "info", duration = 5000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        // setTimeout(() => {
        //     setToasts((prev) => prev.filter((toast) => toast.id !== id));
        // }, duration);
    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <ToastContainer toasts={toasts} />
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
