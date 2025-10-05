'use client';

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { store } from "@/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export function Providers( { children }: { children: ReactNode } ) {
    return (
        <Provider store={ store }>
            <ThemeProvider>
                <SidebarProvider>{ children }</SidebarProvider>
            </ThemeProvider>
        </Provider>
    );
}