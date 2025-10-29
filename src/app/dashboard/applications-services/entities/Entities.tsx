"use client";

import React, { useState } from "react";
import { Plus, Eye, Trash2, Copy, } from "lucide-react";
import Link from "next/link";

interface App {
    name: string;
    env: string;
    apiKey: string;
    status: string;
}

const Entities: React.FC = () => {
    const [apps, setApps] = useState<App[]>([
        { name: "user-service", env: "production", apiKey: "abc123xyz", status: "Active" },
        { name: "billing-service", env: "staging", apiKey: "def456uvw", status: "Active" },
    ]);

    const handleCopy = (key: string) => {
        navigator.clipboard.writeText(key);
        alert("API key copied to clipboard!");
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">Applications & Services – Entities</h2>
                <Link href={'/dashboard/applications-services/add-data-source'}
                    className="flex items-center gap-2 bg-blue-600 text-sm text-white px-3 py-1 hover:bg-blue-700"
                >
                    <Plus className="h-4 w-4" /> Register New App
                </Link>
            </div>

            {/* Apps Table */}
            <div>
                <h3 className="font-medium text-lg mb-2">Entities</h3>
                <div className="overflow-x-auto border border-gray-200">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="px-4 py-2">App Name</th>
                                <th className="px-4 py-2">Environment</th>
                                <th className="px-4 py-2">API Key</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apps.map((app, i) => (
                                <tr key={i} className="border-t hover:bg-gray-50">
                                    <td className="px-4 py-2">
                                        <Link href={`/dashboard/applications-services/apm/overview/${app.name}`} className="text-blue-600 hover:underline">{app.name}</Link>
                                    </td>
                                    <td className="px-4 py-2">{app.env}</td>
                                    <td className="px-4 py-2 flex items-center gap-2">
                                        ****{app.apiKey.slice(-4)}
                                        <button
                                            onClick={() => handleCopy(app.apiKey)}
                                            title="Copy API Key"
                                            className="p-1 hover:bg-gray-200 rounded"
                                        >
                                            <Copy className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${app.status === "Active"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-500"
                                                }`}
                                        >
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-right flex justify-end gap-2">
                                        <button
                                            className="p-1 border rounded hover:bg-gray-100"
                                        >
                                            <Eye className="h-4 w-4 text-gray-700" />
                                        </button>
                                        <button
                                            onClick={() => setApps(apps.filter((a) => a.name !== app.name))}
                                            className="p-1 border border-red-300 rounded hover:bg-red-100"
                                        >
                                            <Trash2 className="h-4 w-4 text-red-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Entities;