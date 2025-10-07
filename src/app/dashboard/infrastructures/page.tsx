"use client";
import React, { useState } from "react";
import { TrashIcon, PlayIcon, PauseIcon, EyeIcon, PlusIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

// Mock data
const infraList = [
    { id: 1, name: "Web Server 1", os: "Linux", status: "Running", cpu: 45, memory: 12, disks: [{ mount: "/", used: 50, size: 100 }] },
    { id: 2, name: "Database Server", os: "Windows", status: "Stopped", cpu: 0, memory: 0, disks: [{ mount: "C:", used: 120, size: 250 }] },
    { id: 3, name: "Analytics Node", os: "Linux", status: "Running", cpu: 75, memory: 32, disks: [{ mount: "/", used: 500, size: 1000 }] },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const color = status === "Running" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>;
};

const Infrastructures = () => {
    const [infras, setInfras] = useState(infraList);

    const handleStart = (id: number) => alert(`Starting infra ${id}`);
    const handleStop = (id: number) => alert(`Stopping infra ${id}`);
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this infrastructure?")) {
            setInfras(infras.filter(i => i.id !== id));
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Infrastructures</h1>
                <Link href={"/dashboard/add-new-infrastructure"} className="flex items-center gap-2">
                    <PlusIcon className="h-4 w-4" /> Add New
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Name</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">OS</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Status</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">CPU</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Memory</th>
                            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Disks</th>
                            <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {infras.map((infra) => (
                            <tr key={infra.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{infra.name}</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.os}</td>
                                <td className="px-4 py-3"><StatusBadge status={infra.status} /></td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.cpu}%</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{infra.memory}GB</td>
                                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                                    {infra.disks.map((d, idx) => (
                                        <div key={idx}>{d.mount}: {d.used}/{d.size}GB</div>
                                    ))}
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
                                    <Link href={`/dashboard/infrastructure-result`}>
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
