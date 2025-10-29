"use client";
import CodeBlock from "@/components/code-block/CodeBlock";
import React from "react";

const InfraAgentInstallationGuidePage = () => {
  return (
    <div className="w-full mx-auto px-6 py-12 text-gray-800 dark:text-gray-200">
      {/* Header */ }
      <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-6">
        <h1 className="text-3xl font-bold mb-2">
          SilverHawk Infra Agent — Installation & Troubleshooting Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn how to install, configure, and troubleshoot the SilverHawk Infra Agent for system monitoring.
        </p>
        <div className="mt-3 text-sm text-gray-500">
          <span className="mr-2">27 Oct 2025</span>
          <span>infra, agent, monitoring, installation, troubleshooting</span>
        </div>
      </header>

      {/* Overview */ }
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <h3 className="text-lg font-semibold">About the Agent</h3>
        <p>
          The <strong>SilverHawk Infra Agent</strong> is a lightweight, cross-platform daemon that continuously collects
          host-level performance data and streams it securely to your <strong>SilverHawk APM Dashboard</strong>.
          It provides visibility into your infrastructure — including CPU, memory, disk, and network utilization —
          helping teams detect anomalies and optimize performance.
        </p>

        <h3 className="text-lg font-semibold">Agent Overhead</h3>
        <p>
          The agent is optimized for efficiency. It runs as a background service and consumes less than:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>CPU:</strong> Under 1%</li>
          <li><strong>Memory:</strong> 50–80 MB on average</li>
          <li><strong>Disk:</strong> {"<"}100 MB total footprint</li>
        </ul>
        <p>
          The agent batches and compresses metrics before transmission to ensure minimal network overhead.
        </p>
      </section>

      {/* Data Collected */ }
      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Data Collected</h2>

        <h3 className="text-lg font-semibold">Agent Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Metric</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              { [
                [ "CPU Usage (%)", "Tracks CPU utilization across all cores" ],
                [ "Memory Usage (MB, %)", "Reports used vs available memory" ],
                [ "Disk I/O & Space", "Monitors disk throughput and available space" ],
                [ "Network I/O", "Captures bytes sent/received per interface" ],
                [ "Process Stats", "Monitors top processes by CPU and memory usage" ],
                [ "System Load", "Calculates system load averages over 1, 5, and 15 minutes" ],
              ].map( ( [ metric, desc ], i ) => (
                <tr
                  key={ i }
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="px-4 py-2 font-medium">{ metric }</td>
                  <td className="px-4 py-2">{ desc }</td>
                </tr>
              ) ) }
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold">Why Should I Install the Agent?</h3>
        <p>
          Installing the Infra Agent allows SilverHawk to provide <strong>deep infrastructure insights</strong>
          beyond what basic uptime checks offer. With the agent, you can:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Track real-time CPU, memory, and disk usage per instance.</li>
          <li>Visualize system health across all nodes in a unified dashboard.</li>
          <li>Detect spikes or resource bottlenecks early using metric trends.</li>
          <li>Correlate infrastructure-level metrics with APM traces and logs.</li>
          <li>Enable anomaly detection and alerting for proactive issue resolution.</li>
        </ul>
      </section>

      {/* Prerequisites */ }
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <p>Before installing, ensure the following:</p>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Requirement</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              { [
                [ "Node.js", "v18 or later" ],
                [ "NPM or Yarn", "Required to install the agent" ],
                [ "API Key", "Found under your SilverHawk Dashboard → Infra → API Keys" ],
                [ "Network Access", "Outbound HTTPS to api.silverhawk.dev" ],
                [ "Privileges", "Root/sudo privileges for system-level metrics" ],
              ].map( ( [ req, desc ], i ) => (
                <tr
                  key={ i }
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="px-4 py-2 font-medium">{ req }</td>
                  <td className="px-4 py-2">{ desc }</td>
                </tr>
              ) ) }
            </tbody>
          </table>
        </div>
      </section>

      {/* Installation */ }
      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">Installation</h2>

        <div>
          <h3 className="text-lg font-semibold">Download the Agent</h3>
          <CodeBlock code={ `npm install -g silverhawk-infra\n\nsilverhawk-infra --version` } />
        </div>

        <div>
          <h3 className="text-lg font-semibold">Start the Agent</h3>
          <CodeBlock code={ `silverhawk-infra start --api-key YOUR_API_KEY` } />
          <p className="text-sm mt-2 italic">
            Response: SilverHawk Agent started successfully
          </p>
        </div>
      </section>

      {/* Troubleshooting */ }
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <h3 className="font-semibold mt-4">Agent Not Showing as Online</h3>
        <CodeBlock code={ `silverhawk-agent logs` } />
        <ul className="list-disc list-inside space-y-1">
          <li>Ensure outbound access to <code>api.silverhawk.dev</code></li>
          <li>Validate <code>API_KEY</code> in <code>/etc/silverhawk/config.json</code></li>
        </ul>

        <h3 className="font-semibold mt-6">NPM Installation Error (ps1 or Permission Issue)</h3>
        <p className="text-gray-600 dark:text-gray-300">
          On Windows, you may encounter an error similar to:
        </p>
        <CodeBlock
          code={ `File C:\\Users\\YourUser\\AppData\\Roaming\\npm\\silverhawk-agent.ps1 cannot be loaded because running scripts is disabled on this system.` }
        />
        <p>
          To fix it, open PowerShell as <strong>Administrator</strong> and run:
        </p>
        <CodeBlock code={ `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` } />
        <p>Then retry installation:</p>
        <CodeBlock code={ `npm install -g silverhawk-agent` } />
      </section>

      {/* Summary */ }
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 dark:border-gray-700 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Feature</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              { [
                [ "Real-time metrics", "CPU, Memory, Disk, Network" ],
                [ "Process tracking", "PID, CPU%, Memory%, Uptime" ],
                [ "Secure transmission", "AES + HTTPS encrypted" ],
                [ "Auto recovery", "Resumes after crash" ],
                [ "Cross-platform", "Linux, macOS, Windows" ],
              ].map( ( [ f, d ], i ) => (
                <tr
                  key={ i }
                  className={
                    i % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }
                >
                  <td className="px-4 py-2 font-medium">{ f }</td>
                  <td className="px-4 py-2">{ d }</td>
                </tr>
              ) ) }
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default InfraAgentInstallationGuidePage;
