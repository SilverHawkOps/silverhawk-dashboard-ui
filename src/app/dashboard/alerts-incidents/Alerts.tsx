"use client";

import React from "react";
import { EyeIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";

export interface Alert {
  _id: string;
  name: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  type: string; // e.g., "CPU", "Memory", "Disk", "Network"
  threshold: string; // e.g., "80%"
  currentValue: string // e.g., "80%"
  status: "Active" | "Resolved";
  lastTriggered: string; // ISO date string
}

interface AlertsTableProps {
  data: Alert[];
  onResolve: (id: string) => void;
  onViewDetails: (id: string) => void;
}


const AlertSeverityColorScheme = {
  low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  critical: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const AlertsTable: React.FC<AlertsTableProps> = ({ data, onResolve, onViewDetails }) => {

  // Calculate summary stats
  const now = new Date();
  const last30Min = data.filter(
    (alert) => new Date(alert.lastTriggered) >= new Date(now.getTime() - 30 * 60 * 1000)
  );
  const activeAlerts = data.filter((alert) => alert.status === "Active");
  const resolvedAlerts = data.filter((alert) => alert.status === "Resolved");

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl p-4 shadow">
          <p className="text-sm font-medium">Alerts Last 30 Min</p>
          <p className="text-2xl font-bold">{last30Min.length}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl p-4 shadow">
          <p className="text-sm font-medium">Active Alerts</p>
          <p className="text-2xl font-bold">{activeAlerts.length}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl p-4 shadow">
          <p className="text-sm font-medium">Resolved Alerts</p>
          <p className="text-2xl font-bold">{resolvedAlerts.length}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl p-4 shadow">
          <p className="text-sm font-medium">Total Alerts</p>
          <p className="text-2xl font-bold">{data.length}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Alert Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Type</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Severity</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Threshold</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Last Triggered</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((alert) => (
              <tr
                key={alert._id}
                className="text-sm border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{alert.name}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{alert.type}</td>
                <td className={`px-4 py-3`}>
                  <span className={`py-1 px-2 text-sm rounded-2xl ${AlertSeverityColorScheme[alert.severity.toLowerCase()]}`}>{alert.severity}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{alert.threshold}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{alert.status}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{new Date(alert.lastTriggered).toLocaleString()}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onViewDetails(alert._id)}
                  >
                    <EyeIcon className="h-4 w-4 mr-1" /> View
                  </Button>
                  {alert.status === "Active" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onResolve(alert._id)}
                    >
                      <CheckCircleIcon className="h-4 w-4 mr-1" /> Resolve
                    </Button>
                  )}
                  {alert.status === "Resolved" && (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => onResolve(alert._id)}
                    >
                      <XCircleIcon className="h-4 w-4" /> Remove
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertsTable;
