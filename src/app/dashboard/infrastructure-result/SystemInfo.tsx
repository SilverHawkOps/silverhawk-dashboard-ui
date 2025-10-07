import React from "react";

const SystemInfo = ({ hostname, timestamp }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-5 mb-6 flex justify-between">
      <div>
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Hostname</h3>
        <span className="text-gray-900 dark:text-white">{hostname}</span>
      </div>
      <div>
        <h3 className="text-gray-700 dark:text-gray-300 font-semibold">Last Updated</h3>
        <span className="text-gray-900 dark:text-white">{new Date(timestamp).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default SystemInfo;
