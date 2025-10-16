"use client";
import { useGetPageLoadPerformanceByUrlMutation } from "@/services/api";
import React, { useState } from "react";

const WebsiteCheckForm = ({onSubmit}) => {
    const [url, setUrl] = useState("");


    const [getPageLoadPerformance, {isLoading, error}] = useGetPageLoadPerformanceByUrlMutation();

    console.log(isLoading, error)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) return;

        const res = await getPageLoadPerformance({url: url});

        console.log(res.data)
        onSubmit(res.data);
    };

    return (
        <div className="h-screen flex items-center justify-center dark:from-gray-900 dark:to-gray-800">
            <div className="bg-white dark:bg-gray-800 p-10 w-full max-w-lg">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Check Page Performance
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-8">
                    Enter a website URL to see detailed page load metrics and insights.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="url"
                        placeholder="https://example.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                       {isLoading ? "Generating Report..." : "Check Performance"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WebsiteCheckForm;
