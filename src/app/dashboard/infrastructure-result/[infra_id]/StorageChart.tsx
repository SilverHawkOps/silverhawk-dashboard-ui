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
      type: "line",
      height: 350,
      toolbar: { show: true },
      zoom: { enabled: true },
    },
    colors: ["#ffd670"],
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
