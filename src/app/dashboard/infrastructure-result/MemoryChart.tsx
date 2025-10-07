"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MemoryChart = ({ data }) => {
  const labels = data.map((d) => d.timestamp);
  const usedMemoryPercent = data.map(
    (d) => ((Number(d.memory.usedGB) / Number(d.memory.totalGB)) * 100).toFixed(2)
  );

  const series = [
    {
      name: "Memory Usage (%)",
      data: usedMemoryPercent,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: true },
    },
    colors: ["#3b82f6"], // blue tone
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 4,
      padding: { left: 10, right: 10 },
    },
    xaxis: {
      categories: labels,
      labels: {
        rotate: -45,
        formatter: (val, index) => (index % 5 === 0 ? val : ""),
        style: { colors: "#6b7280" },
      },
      title: { text: "Time", style: { color: "#374151" } },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      title: {
        text: "Memory Usage (%)",
        style: { color: "#374151", fontWeight: 600 },
      },
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    tooltip: {
      x: { formatter: (val) => `Time: ${val}` },
      y: { formatter: (val) => `${val.toFixed(2)}% used` },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: { height: 250 },
          xaxis: { labels: { show: false } },
        },
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-2">
        Memory Usage Over Time
      </h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default MemoryChart;
