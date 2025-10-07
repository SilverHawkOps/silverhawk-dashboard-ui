"use client";
import React from 'react';
import SystemInfo from './SystemInfo';
import CPUChart from './CPUCharts';
import DiskChart from './StorageChart';
import MemoryChart from './MemoryChart';

const OverviewCard = ({ title, value, percentage, color }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-5 flex flex-col">
            <h3 className="text-gray-700 dark:text-gray-300 font-semibold mb-2">{title}</h3>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
                <span className={`text-sm font-medium ${color}`}>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-3">
                <div className={`h-2 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

const Infrastructure = () => {
    const metrics = [
        { title: "CPU Usage", value: "5.45%", percentage: 5, color: "bg-green-500" },
        { title: "Memory Usage", value: "15.10 GB / 15.41 GB", percentage: 98, color: "bg-red-500" },
    ];

    // Placeholder data
    const metrics2 = {
        timestamp: "2025-10-06T07:29:29.364Z",
        hostname: "developer",
        cpu: { totalLoad: 5.45, perCoreLoad: [5.2, 4.56, 5.25, 4.6, 5.02, 6.84, 5.42, 6.7] },
        memory: { usedGB: 15.1, totalGB: 15.41 },
        disk: [
            { mount: "/", sizeGB: 467.89, usedGB: 39.82 },
            { mount: "/boot/efi", sizeGB: 0.5, usedGB: 0.02 }
        ],
        networkHistory: [
            { timestamp: "07:29:00", rx_bytes: 100000, tx_bytes: 50000 },
            { timestamp: "07:29:30", rx_bytes: 200000, tx_bytes: 100000 },
            { timestamp: "07:30:00", rx_bytes: 300000, tx_bytes: 150000 }
        ]
    };
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900 p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Server Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {metrics.map((metric, idx) => (
                        <OverviewCard
                            key={idx}
                            title={metric.title}
                            value={metric.value}
                            percentage={metric.percentage}
                            color={metric.color}
                        />
                    ))}
                </div>

                <SystemInfo hostname={metrics2.hostname} timestamp={metrics2.timestamp} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <CPUChart totalLoad={metrics2.cpu.totalLoad} perCoreLoad={metrics2.cpu.perCoreLoad} />
                    <MemoryChart usedGB={metrics2.memory.usedGB} totalGB={metrics2.memory.totalGB} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <DiskChart disks={metrics2.disk} />
                </div>
            </div>
        </div>
    )
}

export default Infrastructure