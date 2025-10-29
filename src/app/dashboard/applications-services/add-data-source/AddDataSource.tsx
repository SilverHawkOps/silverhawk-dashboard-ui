"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import CodeBlock from "@/components/code-block/CodeBlock";
import Link from "next/link";

const AddDataSource: React.FC = () => {
    // const router = useRouter();
    const [appName, setAppName] = useState("");
    const [apiKey, setApiKey] = useState<string | null>(null);
    const [isWaiting, setIsWaiting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const handleGenerate = () => {
        if (!appName.trim()) {
            alert("Please enter an app name");
            return;
        }

        const key = Math.random().toString(36).slice(2, 10);
        setApiKey(key);
        setIsWaiting(false);
    };

    return (
        <div className="p-2 mx-auto space-y-8">

            {/* Step 1 – Create App */}
            <div className="space-y-4">
                <h3 className="font-medium text-lg">Step 1: Name your application</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. user-service"
                            value={appName}
                            onChange={(e) => setAppName(e.target.value)}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        onClick={handleGenerate}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Generate API Key
                    </button>
                </div>
            </div>

            {/* Step 2 – Integration Snippet */}
            {apiKey && (
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-medium text-lg mb-3">Step 2: Integrate with SDK</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Add the following snippet to your application entry file (e.g.{" "}
                        <code>server.js</code> or <code>index.js</code>).
                    </p>

                    <CodeBlock
                        language="javascript"
                        code={`import { initAPM } from "silverhawk-apm";

initAPM({
  apiKey: "${apiKey}",
  appName: "${appName}",
});`}
                    />
                </div>
            )}

            {/* Step 3 – Waiting for Connection */}
            {/* Step 3 – Test Connection */}
            {apiKey && (
                <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 text-center space-y-4">
                    <h3 className="text-lg font-semibold">Step 3: Test the Connection</h3>
                    <p className="text-gray-600 text-sm">
                        Restart your app after adding the snippet, then click below to test if the SilverHawk agent is reporting successfully.
                    </p>

                    {!isWaiting && !isConnected && (
                        <button
                            onClick={() => {
                                setIsWaiting(true);
                                // Simulate API call or heartbeat check
                                setTimeout(() => {
                                    // TODO: Replace with real API ping once backend is ready
                                    const success = Math.random() > 0.3; // Simulated pass rate
                                    setIsConnected(success);
                                    setIsWaiting(false);
                                }, 2000);
                            }}
                            className="bg-transparent text-black border  px-4 py-1 rounded-md hover:bg-indigo-200"
                        >
                            Test Connection
                        </button>
                    )}

                    {isWaiting && (
                        <div className="flex flex-col items-center justify-center mt-2">
                            <Loader2 className="h-6 w-6 animate-spin text-blue-600 mb-2" />
                            <p className="text-gray-600 text-sm">Testing connection...</p>
                        </div>
                    )}

                    {!isWaiting && isConnected && (
                        <div className="flex flex-col items-center justify-center mt-2">
                            <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
                            <p className="font-medium text-green-700">Connection successful!</p>
                            <p className="text-gray-500 text-sm mt-1">
                                Your application is now sending APM data to SilverHawk.
                            </p>

                            <Link href={'/dashboard/applications-services/apm/overview/hello'} className="mt-4 bg-transparent text-black border  px-4 py-1 rounded-md hover:bg-indigo-200">
                                See Your Data
                            </Link>
                        </div>
                    )}

                    {!isWaiting && apiKey && !isConnected && (
                        <table className="w-full mx-auto mt-4 text-sm border border-gray-300 rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs border-b border-gray-300">
                                <tr>
                                    <th className="px-4 py-2 text-left border-r border-gray-300">Parameter</th>
                                    <th className="px-4 py-2 text-left">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-300">
                                    <td className="px-4 py-2 font-medium text-gray-700 border-r border-gray-300">Status</td>
                                    <td className="px-4 py-2">
                                        <span className="text-red-500 font-semibold">Not Tested</span>
                                    </td>
                                </tr>
                                <tr className="border-t border-gray-300">
                                    <td className="px-4 py-2 font-medium text-gray-700 border-r border-gray-300">Agent</td>
                                    <td className="px-4 py-2 text-gray-500">N/A</td>
                                </tr>
                            </tbody>
                        </table>

                    )}
                </div>
            )}

        </div>
    );
};

export default AddDataSource;
