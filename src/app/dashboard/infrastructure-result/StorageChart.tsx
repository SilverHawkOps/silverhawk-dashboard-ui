"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StorageChart = ({ data }) => {
  const labels = data.map((d) => d.timestamp);

  // Compute storage metrics
  const totalStorage = Number(data[0]?.disk?.[0]?.sizeGB || 0);
  const usedStorage = data.map((d) => Number(d.disk?.[0]?.usedGB || 0));
  const usedStoragePercent = data.map((d) =>
    ((Number(d.disk?.[0]?.usedGB || 0) / totalStorage) * 100).toFixed(2)
  );

  const series = [
    {
      name: "Used Storage (%)",
      data: usedStoragePercent,
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: true },
    },
    colors: ["#f59e0b"], // amber tone for storage
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
        text: "Storage Usage (%)",
        style: { color: "#374151", fontWeight: 600 },
      },
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    tooltip: {
      theme: "light",
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const percent = series[seriesIndex][dataPointIndex];
        const used = usedStorage[dataPointIndex].toFixed(2);
        const total = totalStorage.toFixed(2);
        const time = labels[dataPointIndex];

        return `
          <div style="padding:8px">
            <strong>Time:</strong> ${time}<br/>
            <strong>Used:</strong> ${used} GB / ${total} GB<br/>
            <strong>Usage:</strong> ${percent}% 
          </div>
        `;
      },
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
        Storage Usage Over Time
      </h2>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default StorageChart;
