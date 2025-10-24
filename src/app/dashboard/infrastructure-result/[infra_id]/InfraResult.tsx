// "use client";

// import AutoRefresh from '@/components/auto-refresh/AutoRefresh';
// import { useGetInfraMetricsQuery } from '@/services/api';
// import React from 'react';
// import CPUChart from './CPU';
// import MemoryChart from './MemoryChart';
// import StorageChart from './StorageChart';
// import NetworkTrafficChart from './NetworkTrafficChart';
// import SystemInfo from './SystemInfo';
// import { DiskInfo, InfraData, Metric } from '@/services/types';

// interface InfraResultProps {
//   infraId: string;
// }

// const InfraResult: React.FC<InfraResultProps> = ({ infraId }) => {
//   const { metrics, infra, refetch } = useGetInfraMetricsQuery<InfraData>(
//     infraId,
//     { refetchOnMountOrArgChange: false }
//   );

//   const handleRefresh = (): void => {
//     refetch();
//   };

//   if (!metrics || !metrics.length) return <p>No data found</p>;

//   // ✅ Transform CPU data for chart
//   const cpuData = metrics.map((item: Metric) => ({
//     timestamp: new Date(item.timestamp).toLocaleString(),
//     cpu: { load: item.cpu },
//   }));

//   // ✅ Transform Network data for chart
//   const networkData = metrics.map((item: Metric) => ({
//     timestamp: new Date(item.timestamp).toLocaleString(),
//     rx_bytes: item.network?.[0]?.rx_bytes ?? 0,
//     tx_bytes: item.network?.[0]?.tx_bytes ?? 0,
//   }));

//   // ✅ Safely get last disk metric
//   const lastDisk: DiskInfo[] = metrics[metrics.length - 1]?.disk ?? [];

//   return (
//     <div>
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-bold mb-4">CPU Load Over Time</h1>
//         {infra.status === "online" && (
//           <AutoRefresh intervalSeconds={30} onRefresh={handleRefresh} />
//         )}
//       </div>

//       <SystemInfo
//         hostname={infra.hostname}
//         timestamp={infra.lastHeartbeat}
//         status={infra.status}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <CPUChart data={cpuData} />
//         <MemoryChart data={metrics} />
//         <StorageChart data={metrics} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="md:col-span-2">
//           <NetworkTrafficChart data={networkData} />
//         </div>

//         <div className="md:col-span-1">
//           <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
//             <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
//               Disk Usage
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full border border-gray-200 dark:border-gray-700">
//                 <thead>
//                   <tr className="bg-gray-100 dark:bg-gray-800">
//                     <th className="px-4 py-2 text-left">Mount Point</th>
//                     <th className="px-4 py-2 text-left">Size (GB)</th>
//                     <th className="px-4 py-2 text-left">Used (GB)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {lastDisk.map((item: DiskInfo, index: number) => (
//                     <tr
//                       key={index}
//                       className={index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"}
//                     >
//                       <td className="px-4 py-2">{item.mount}</td>
//                       <td className="px-4 py-2">{item.sizeGB}</td>
//                       <td className="px-4 py-2">{item.usedGB}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfraResult;



import React from 'react'

const InfraResult = () => {
  return (
    <div>InfraResult</div>
  )
}

export default InfraResult