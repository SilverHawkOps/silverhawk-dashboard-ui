import { Metadata } from "next";
import React from "react";
import HomePage from "./Home";

export const metadata: Metadata = {
    title:
        "SilverHawk – Advanced Application Performance Monitoring",
    description: "Monitor, optimize, and scale your applications with SilverHawk. Gain real-time insights into system performance, track metrics, detect anomalies, and ensure smooth application operations with our robust APM solution.",
};

export default function Home() {
    return (
        <>
            <HomePage/>
        </>
    );
}
