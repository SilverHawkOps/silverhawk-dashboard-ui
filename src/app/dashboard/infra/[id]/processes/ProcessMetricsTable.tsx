"use client";

import React, { useEffect, useState, useMemo } from "react";
import { RefreshCcw, Search } from "lucide-react";
import { dummyProcesses } from "./dummyProcesses";

interface ProcessMetric {
  process: string;
  pid: number;
  cpu: string;
  memory: string;
  uptime: string;
  cmd: string;
  hostname: string;
  lastUpdated: string;
}

interface Props {
  infraId: string;
}

const ProcessMetricsTable: React.FC<Props> = ({ infraId }) => {
  const [processes, setProcesses] = useState<ProcessMetric[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchProcesses = async () => {
    try {
      setLoading(true);
      // const res = await fetch(`/api/infra/${infraId}/processes/live`);
      // const data = await res.json();
      setProcesses(dummyProcesses);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error("Error fetching process metrics:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProcesses();
    const interval = setInterval(fetchProcesses, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, [infraId]);

  const filtered = useMemo(() => {
    return processes
      .filter((p) => p.process.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => Number(b.cpu) - Number(a.cpu));
  }, [processes, search]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <div className="flex items-center w-full sm:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search process..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none text-gray-700 dark:text-gray-200"
          />
        </div>

        <button
          onClick={fetchProcesses}
          disabled={loading}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          <RefreshCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-200">
          <thead className="border-b border-gray-200 dark:border-gray-700 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 text-left">Process</th>
              <th className="px-4 py-2 text-left">PID</th>
              <th className="px-4 py-2 text-left">CPU%</th>
              <th className="px-4 py-2 text-left">Memory</th>
              <th className="px-4 py-2 text-left">Uptime</th>
              <th className="px-4 py-2 text-left">Hostname</th>
              <th className="px-4 py-2 text-left">Command</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((proc, idx) => (
                <tr
                  key={`${proc.pid}-${idx}`}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition"
                >
                  <td className="px-4 py-2 font-medium">{proc.process}</td>
                  <td className="px-4 py-2">{proc.pid}</td>
                  <td
                    className={`px-4 py-2 ${Number(proc.cpu) > 80
                        ? "text-red-500 font-semibold"
                        : Number(proc.cpu) > 50
                          ? "text-yellow-500"
                          : ""
                      }`}
                  >
                    {proc.cpu}%
                  </td>
                  <td className="px-4 py-2">
                    {Number(proc.memory) > 1024
                      ? `${(Number(proc.memory) / 1024).toFixed(1)} MB`
                      : `${proc.memory} KB`}
                  </td>
                  <td className="px-4 py-2">{proc.uptime}</td>
                  <td className="px-4 py-2">{proc.hostname}</td>
                  <td
                    className="px-4 py-2 max-w-[200px] truncate text-gray-600 dark:text-gray-400"
                    title={proc.cmd}
                  >
                    {proc.cmd}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No processes found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 text-right mt-3">
        Last updated: {lastUpdated || "—"}
      </p>
    </div>
  );
};

export default ProcessMetricsTable;
