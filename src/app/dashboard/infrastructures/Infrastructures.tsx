"use client";
import React from "react";
import { TrashIcon, PlayIcon, PauseIcon, EyeIcon, PlusIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { useGetInfraListQuery } from "@/services/api";
import MaskedApiKey from "@/components/mask-api-key/MaskApiKey";


const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const colorScheme: Record<string, string> = {
        online: "bg-green-500 text-white",
        offline: "bg-red-500 text-white",
        maintenance: "bg-yellow-500 text-white",
        new: "bg-blue-500 text-white",
    };
    const color = colorScheme[status];
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>;
};

const Infrastructures = () => {

    const { data, error, isLoading } = useGetInfraListQuery();

    console.log(data)

    const handleStart = (id: number) => alert(`Starting infra ${id}`);
    const handleStop = (id: number) => alert(`Stopping infra ${id}`);
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this infrastructure?")) {
            console.log("Deleted: ", id)
        }
    };


    if (isLoading) return <p>Loading metrics...</p>;
    if (error) return <p>Error fetching metrics</p>;
    if (!data || data.length === 0) return <p>No infrastructures found</p>;

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

            <div className="w-full overflow-x-auto">
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
                        {data.map((infra) => (
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
                                <td className="px-4 py-3 flex justify-center gap-2">
                                    {infra.status === "Running" ? (
                                        <Button size="sm" variant="destructive" onClick={() => handleStop(infra.id)}>
                                            <PauseIcon className="h-4 w-4 mr-1" /> Stop
                                        </Button>
                                    ) : (
                                        <Button size="sm" variant="destructive" onClick={() => handleStart(infra.id)}>
                                            <PlayIcon className="h-4 w-4 mr-1" /> Start
                                        </Button>
                                    )}
                                    <Link href={`/dashboard/infrastructure-result/${infra._id}`}>
                                        <Button size="sm" variant="outline">
                                            <EyeIcon className="h-4 w-4 mr-1" /> Logs
                                        </Button>
                                    </Link>
                                    <Button size="sm" variant="destructive" onClick={() => handleDelete(infra.id)}>
                                        <TrashIcon className="h-4 w-4 mr-1" /> Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Infrastructures;



// import React from 'react'

// const Infrastructures = () => {
//   return (
//     <div>Infrastructures</div>
//   )
// }

// export default Infrastructures