"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// ✅ Define the shape of each data point
interface CPUDataPoint {
  timestamp: string; // or number if it's a UNIX timestamp
  cpu: {
    load: {load: number}
  };
}

interface CPUChartProps {
  data: CPUDataPoint[];
}

const CPUChart: React.FC<CPUChartProps> = ({ data }) => {
  const labels = data.map((d) => d.timestamp);
  const cpuLoad = data.map((d) => d.cpu.load.load);

  // ✅ Detect if any CPU load > 90
  const hasHighLoad = cpuLoad.some((val) => val > 90);

  // ✅ Choose color dynamically
  const chartColor = hasHighLoad ? "#ef4444" : "#10b981"; // red or green

  const series = [
    {
      name: "CPU Load (%)",
      data: cpuLoad,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: { show: true },
      zoom: { enabled: true },
    },
    colors: [chartColor],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      hover: { size: 0 },
    },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: { left: 10, right: 10 },
    },
    xaxis: {
      categories: labels,
      labels: {
        show: false,
        rotate: -45,
        style: { colors: "#6b7280" },
      },
      title: { text: "Time", style: { color: "#374151" } },
      axisBorder: { color: "#d1d5db" },
      axisTicks: { color: "#d1d5db" },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: { style: { colors: "#6b7280" } },
      title: {
        text: "CPU Load (%)",
        style: { color: "#374151", fontWeight: 600 },
      },
    },
    tooltip: {
      enabled: true,
      x: { show: true },
    },

    annotations: {
      yaxis: [
        {
          y: 80,
          borderColor: "#f59e0b", // amber-500
          strokeDashArray: 6,
          label: {
            borderColor: "#f59e0b",
            style: {
              color: "#fff",
              background: "#f59e0b",
              fontWeight: 600,
            },
            text: "80% Threshold",
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md transition-colors duration-300">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
        CPU Load Over Time
      </h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default CPUChart;
