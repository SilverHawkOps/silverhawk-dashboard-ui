"use client";
import React from "react";

const alerts = [
    {
        id: 1,
        title: "Service latency spike detected on /api/v1/users",
        severity: "critical",
        time: "1 min ago",
        description: "Average response time increased from 210ms to 2.4s in the last 5 minutes."
    },
    {
        id: 2,
        title: "Error rate threshold breached on Authentication Service",
        severity: "critical",
        time: "5 mins ago",
        description: "Error rate is at 6.7%, exceeding the 2% SLA threshold."
    },
    {
        id: 3,
        title: "Memory utilization crossed 85% on app-server-02",
        severity: "warning",
        time: "9 mins ago",
        description: "Node process using 1.8GB of 2GB allocated memory."
    },
    {
        id: 4,
        title: "High CPU usage detected on background-worker-01",
        severity: "warning",
        time: "15 mins ago",
        description: "CPU utilization sustained above 90% for the past 10 minutes."
    },
    {
        id: 5,
        title: "New deployment detected — version 2.3.4",
        severity: "info",
        time: "22 mins ago",
        description: "Deployment completed successfully via Jenkins CI pipeline."
    },
    {
        id: 6,
        title: "Redis cache miss ratio increasing",
        severity: "info",
        time: "30 mins ago",
        description: "Cache hit rate dropped from 98% to 81% — potential configuration issue."
    }
];


export default function RecentAlerts() {
    return (
        <ul className="space-y-3">
            { alerts.map( ( a ) => (
                <li
                    key={ a.id }
                    className={ `flex items-center justify-between p-3 rounded-xl border ${a.severity === "critical"
                            ? "border-red-300 bg-red-50"
                            : a.severity === "warning"
                                ? "border-yellow-300 bg-yellow-50"
                                : "border-blue-300 bg-blue-50"
                        }` }
                >
                    <div>
                        <p className="font-medium text-gray-800">{ a.title }</p>
                        <p className="text-xs text-gray-500">{ a.time }</p>
                    </div>
                    <span
                        className={ `px-3 py-1 text-xs rounded-full font-semibold ${a.severity === "critical"
                                ? "bg-red-100 text-red-700"
                                : a.severity === "warning"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-blue-100 text-blue-700"
                            }` }
                    >
                        { a.severity.toUpperCase() }
                    </span>
                </li>
            ) ) }
        </ul>
    );
}
