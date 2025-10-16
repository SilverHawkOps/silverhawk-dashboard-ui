'use client';

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <ToastProvider>
                <ThemeProvider>
                    <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
            </ToastProvider>
        </Provider>
    );
}