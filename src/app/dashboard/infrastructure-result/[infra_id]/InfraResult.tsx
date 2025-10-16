"use client";

import AutoRefresh from '@/components/auto-refresh/AutoRefresh';
import { useGetInfraMetricsQuery } from '@/services/api';
import React, { useState } from 'react'
import CPUChart from './CPU';
import MemoryChart from './MemoryChart';
import StorageChart from './StorageChart';
import NetworkTrafficChart from './NetworkTrafficChart';
import SystemInfo from './SystemInfo';

const InfraResult = ({ infraId }) => {
  console.log(infraId)

  const [refreshTrigger, setRefreshTrigger] = useState(0);
  console.log(refreshTrigger)

  const { data, isLoading, error, refetch } = useGetInfraMetricsQuery(
    infraId,
    {
      // optional: disable automatic polling
      refetchOnMountOrArgChange: false,
    }
  );

  const handleRefresh = () => {
    refetch();
    setRefreshTrigger((prev) => prev + 1); // trigger rerender to reset countdown
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const cpuData = data.metrics.map(item => ({
    timestamp: new Date(item.timestamp).toLocaleString(), // milliseconds
    cpu: { load: item.cpu.load }
  }));

  const networkData = data.metrics.map(item => ({
    timestamp: new Date(item.timestamp).toLocaleString(), // milliseconds
    rx_bytes: item.network[0].rx_bytes,
    tx_bytes: item.network[0].tx_bytes
  }));

  console.log(data, isLoading, error, refetch)
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">CPU Load Over Time</h1>
        {data.infra.status === "online" && <AutoRefresh intervalSeconds={30} onRefresh={handleRefresh} />}
      </div>
      <SystemInfo hostname={data.infra.hostname} timestamp={data.infra.lastHeartbeat} status={data.infra.status} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <CPUChart data={cpuData} />
        <MemoryChart data={data.metrics} />
        <StorageChart data={data.metrics} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Network Traffic Chart spans 2 columns */}
        <div className="md:col-span-2">
          <NetworkTrafficChart data={networkData} />
        </div>

        {/* Disk Usage spans 1 column */}
        <div className="md:col-span-1">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
              CPU Load Over Time
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 py-2 text-left">Mount Point</th>
                    <th className="px-4 py-2 text-left">Size (GB)</th>
                    <th className="px-4 py-2 text-left">Used (GB)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.metrics[data.metrics.length-1].disk.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}
                    >
                      <td className="px-4 py-2">{item.mount}</td>
                      <td className="px-4 py-2">{item.sizeGB}</td>
                      <td className="px-4 py-2">{item.usedGB}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InfraResult