// import React from "react";

// const STATUS_COLOR = {
//   "online": "bg-green-100 text-green-800",
//   "offline": "bg-red-100 text-red-800",
//   "maintenance": "bg-yellow-100 text-yellow-800",
//   "new": "bg-blue-100 text-blue-800",
//   "acknowledged": "bg-purple-100 text-purple-800",
// };

// const SystemInfo = ({ hostname, timestamp, status }) => {

//   const getStatusColor = (status) => {
//     return STATUS_COLOR[status] || "bg-gray-100 text-gray-800"
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-5 mb-6 flex justify-between">
//       <div>
//         <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Hostname</h3>
//         <span className="text-gray-900 dark:text-white">{hostname}</span>
//       </div>
//       <div>
//         <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Status</h3>
//         <span
//           className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
//             status
//           )}`}
//         >
//           {status}
//         </span>
//       </div>
//       <div>
//         <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Last Updated</h3>
//         <span className="text-gray-900 dark:text-white">{new Date(timestamp).toLocaleString()}</span>
//       </div>
//     </div>
//   );
// };

// export default SystemInfo;



import React from 'react'

const SystemInfo = () => {
  return (
    <div>SystemInfo</div>
  )
}

export default SystemInfo