"use client";
import React from "react";
import { TrashIcon, PlayIcon, PauseIcon, PlusIcon, BarChart3Icon, CpuIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useGetInfraListQuery } from "@/services/infraApi";
import MaskedApiKey from "@/components/mask-api-key/MaskApiKey";
import DataNotFound from "@/components/data-not-found/DataNotFound";


const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const colorScheme: Record<string, string> = {
        online: "bg-green-500 text-white",
        offline: "bg-red-500 text-white",
        maintenance: "bg-yellow-500 text-white",
        new: "bg-blue-500 text-white",
        acknowledged: "bg-green-100 text-black"
    };
    const color = colorScheme[status];
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>;
};

const Infrastructures = () => {

    const { data, error, isLoading } = useGetInfraListQuery();

    const handleStart = (id: string) => alert(`Starting infra ${id}`);
    const handleStop = (id: string) => alert(`Stopping infra ${id}`);
    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this infrastructure?")) {
            console.log("Deleted: ", id)
        }
    };


    if (isLoading) return <p>Loading metrics...</p>;
    if (error || !data) return <p>Error fetching metrics</p>;
    if (!data) return <p> Error</p>

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-lg font-bold text-gray-800 dark:text-white">Your Infrastructures</h1>
                <Link href={"/dashboard/add-new-infrastructure"} className="flex items-center gap-2">
                    <Button className="w-full" size="xs" startIcon={<PlusIcon />}>
                        Add New
                    </Button>
                </Link>

            </div>

            {data && data.length > 0 ? (<div className="w-full overflow-x-auto">
                <table className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <thead className="bg-gray-100 dark:bg-gray-700 w-full">
                        <tr className="w-full text-sm">
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Name</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Environment</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Api Key</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Status</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">OS</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Hostname</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">CPU Cores</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Disk</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Memory</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Last Heartbeat</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">IP Address</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Agent Version</th>
                            <th className="text-left w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Tags</th>
                            <th className="text-center w-full px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map((infra) => (
                            <tr key={infra._id} className="text-sm border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{infra.name}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.environment}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                    <MaskedApiKey token={infra.apiKey} />
                                </td>
                                <td className="px-4 py-3"><StatusBadge status={infra.status} /></td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.os || "N/A"}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.hostname || 'N/A'}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.cpuCores}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.diskGB}GB</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.memoryGB}GB</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.lastHeartbeat ? new Date(infra.lastHeartbeat).toLocaleString() : '—'}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra?.ipAddress || '—'}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                    {infra?.agentVersion ? (<Link target="_blank" href={`https://www.npmjs.com/package/silverhawk-infra/v/${infra.agentVersion}`} className="text-blue-600 underline" title={``} >
                                        {infra.agentVersion}
                                    </Link>) : (<>-</>)}
                                </td>
                                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                                    <div className="flex flex-wrap gap-2">
                                        {infra.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-4 py-3 flex justify-center items-center space-x-4">
                                    {infra.status === "Running" ? (
                                        <button
                                            className="text-red-500 hover:text-red-600 transition"
                                            onClick={() => handleStop(infra._id)}
                                        >
                                            <PauseIcon className="h-4 w-4" />
                                        </button>
                                    ) : (
                                        <button
                                            className="text-green-500 hover:text-green-600 transition"
                                            onClick={() => handleStart(infra._id)}
                                        >
                                            <PlayIcon className="h-4 w-4" />
                                        </button>
                                    )}

                                    <Link href={`/dashboard/infra/${infra._id}/metrics`}>
                                        <button className="text-blue-500 hover:text-blue-600 transition">
                                            <BarChart3Icon className="h-4 w-4" />
                                        </button>
                                    </Link>

                                    <Link href={`/dashboard/infra/${infra._id}/processes`}>
                                        <button className="text-yellow-500 hover:text-yellow-600 transition">
                                            <CpuIcon className="h-4 w-4" />
                                        </button>
                                    </Link>

                                    <button
                                        className="text-gray-500 hover:text-red-600 transition"
                                        onClick={() => handleDelete(infra._id)}
                                    >
                                        <TrashIcon className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>) : (
                <DataNotFound />
            )}



        </div>
    );
};

export default Infrastructures;