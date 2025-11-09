"use client";

import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  Clock,
  TrendingUp,
  Gauge,
  Server,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Select from "@/components/form/Select";


// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Transaction {
  method: string;
  route: string;
  path: string;
  status: number;
  latencyMs: number;
  error: boolean;
  timestamp: string;
}

interface MetricData {
  apdex: number;
  avgResponseTime: number;
  throughput: number;
  errorRate: number;
}

interface ChartPoint {
  x: Date;
  y: number;
}

const transactions: Transaction[] = [
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 200,
    latencyMs: 50.23,
    error: false,
    timestamp: '2025-10-29T10:51:58.097Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 304,
    latencyMs: 5.74,
    error: false,
    timestamp: '2025-10-29T10:51:58.538Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 304,
    latencyMs: 0.55,
    error: false,
    timestamp: '2025-10-29T10:51:58.916Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.78,
    error: true,
    timestamp: '2025-10-29T10:51:59.288Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 200,
    latencyMs: 0.35,
    error: false,
    timestamp: '2025-10-29T10:51:59.648Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 304,
    latencyMs: 0.36,
    error: false,
    timestamp: '2025-10-29T10:52:00.005Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 304,
    latencyMs: 0.34,
    error: false,
    timestamp: '2025-10-29T10:52:00.311Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.58,
    error: true,
    timestamp: '2025-10-29T10:52:00.685Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 200,
    latencyMs: 0.43,
    error: false,
    timestamp: '2025-10-29T10:52:01.260Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 304,
    latencyMs: 0.34,
    error: false,
    timestamp: '2025-10-29T10:52:01.569Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.5,
    error: true,
    timestamp: '2025-10-29T10:52:01.826Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 200,
    latencyMs: 0.33,
    error: false,
    timestamp: '2025-10-29T10:52:02.049Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.47,
    error: true,
    timestamp: '2025-10-29T10:52:02.260Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.47,
    error: true,
    timestamp: '2025-10-29T10:52:02.440Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 200,
    latencyMs: 0.26,
    error: false,
    timestamp: '2025-10-29T10:52:02.623Z'
  },
  {
    method: 'GET',
    route: '/error',
    path: '/error',
    status: 500,
    latencyMs: 0.46,
    error: true,
    timestamp: '2025-10-29T10:52:02.786Z'
  }
];


function calculateAPMMetrics(transactions: Transaction[], T = 0.5): MetricData | null {
  if (!transactions?.length) return null;

  const total = transactions.length;
  const start = new Date(transactions[0].timestamp);
  const end = new Date(transactions[transactions.length - 1].timestamp);

  let satisfied = 0;
  let tolerating = 0;
  let totalLatency = 0;
  let errorCount = 0;

  for (const tx of transactions) {
    const latencySec = tx.latencyMs / 1000;
    totalLatency += tx.latencyMs;

    if (tx.error || tx.status >= 500) {
      errorCount++;
      continue; // errors = frustrated
    }

    if (latencySec <= T) satisfied++;
    else if (latencySec <= 4 * T) tolerating++;
  }

  // Apdex formula
  const apdex = ((satisfied + 0.5 * tolerating) / total).toFixed(2);

  // Average response time
  const avgResponseTime = +(totalLatency / total).toFixed(2);

  // Duration in minutes (for throughput)
  const durationMin = Math.max((end.getTime() - start.getTime()) / 1000 / 60, 1 / 60);
  const throughput = +(total / durationMin).toFixed(1); // requests per minute

  // Error rate
  const errorRate = +((errorCount / total) * 100).toFixed(1);

  return {
    apdex: parseFloat(apdex),
    avgResponseTime,
    throughput,
    errorRate,
  };
}


function prepareChartData(transactions: Transaction[]): { responseTime: ChartPoint[]; errorRate: ChartPoint[] } {
  return {
    responseTime: transactions.map((t) => ({
      x: new Date(t.timestamp),
      y: t.latencyMs,
    })),
    errorRate: transactions.map((t) => ({
      x: new Date(t.timestamp),
      y: t.error ? 1 : 0,
    })),
  };
}


const Overview: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState("user-service");

  const apps = ["user-service", "billing-service", "inventory-api"];

  const [metricsData, setMetricsData] = useState(calculateAPMMetrics(transactions));
  const [chartData, setChartData] = useState(prepareChartData(transactions));

  useEffect(() => {
    const interval = setInterval(() => {
      setMetricsData(calculateAPMMetrics(transactions));
      setChartData(prepareChartData(transactions));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      title: "Response Time",
      value: `${metricsData?.avgResponseTime.toFixed(2)} ms`,
      change: "+4%",
      icon: Clock,
      color: "text-blue-500",
      bg: "from-blue-500/10 to-transparent",
    },
    {
      title: "Throughput",
      value: `${metricsData?.throughput.toFixed(1)} rpm`,
      change: "+6%",
      icon: TrendingUp,
      color: "text-emerald-500",
      bg: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Error Rate",
      value: `${metricsData?.errorRate.toFixed(2)}%`,
      change: "-0.2%",
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "from-red-500/10 to-transparent",
    },
    {
      title: "Apdex Score",
      value: `${metricsData?.apdex.toFixed(2)}`,
      change: "+0.01",
      icon: Gauge,
      color: "text-amber-500",
      bg: "from-amber-500/10 to-transparent",
    },
  ];


  const responseChart: { series: { name: string; data: number[] }[], options: ApexOptions } = {
    series: [{ name: "Response Time", data: chartData.responseTime.map((d) => d.y) }],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: true },
        zoom: { enabled: true },
      },
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
        categories: chartData.responseTime.map((d) => d.x.toLocaleTimeString()),
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
          text: "Response Time (ms)",
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
    },
  };

  const errorChart: { series: { name: string; data: number[] }[], options: ApexOptions } = {
    series: [{ name: "Errors", data: chartData.errorRate.map((d) => d.y) }],
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: { show: true },
        zoom: { enabled: true },
      },
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
        categories: chartData.errorRate.map((d) => d.x.toLocaleTimeString()),
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
          text: "Error Rate (%)",
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
    },
  };

  return (
    <div className=" text-neutral-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 border-b pb-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Application Performance
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Monitor key metrics for your connected services in real time.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Server className="h-5 w-5 text-neutral-500" />
          <select
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
            className="border border-neutral-300 bg-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {apps.map((app) => (
              <option key={app}>{app}</option>
            ))}
          </select>
        </div>
      </div>


      <div className="border p-2 w-fit max-w-lg mb-4">
        <Select options={[
          {
            label: "24H",
            value: "24"
          }
        ]}
          onChange={(value) => console.log(value)}
          className="w-fit max-w-lg"
          defaultValue="24"
        >

        </Select>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-10">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className={`relative overflow-hidden border border-neutral-200 rounded-md p-5`}
            >

              <div className="relative flex items-start justify-between">
                <div>
                  <p className="text-[1rem] text-neutral-500 truncate">{m.title}</p>
                  <h3 className="text-3xl font-semibold mt-1">{m.value}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="col-span-8" >
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-10">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-md border border-neutral-200 bg-white/80 p-6"
            >
              <h4 className="font-medium text-neutral-700 mb-4">
                Response Time (ms)
              </h4>
              <div className="">
                <Chart options={responseChart.options} series={responseChart.series} type="area" height={200} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-neutral-200 bg-white/80 shadow-sm p-6 backdrop-blur-sm"
        >
          <h4 className="font-medium text-neutral-700 mb-4">
            Response Time (ms)
          </h4>
          <div className="">
            <Chart options={responseChart.options} series={responseChart.series} type="area" height={200} />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-neutral-200 bg-white/80 shadow-sm p-6 backdrop-blur-sm"
        >
          <h4 className="font-medium text-neutral-700 mb-4">
            Error Rate (%)
          </h4>
          <div className="">
            <Chart options={errorChart.options} series={errorChart.series} type="area" height={200} />
          </div>
        </motion.div>
      </div>


      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-neutral-200 bg-white/80 shadow-sm p-6 backdrop-blur-sm"
        >
          <h4 className="font-medium text-neutral-700 mb-4">
            Throughput Time (ms)
          </h4>
          <div className="h-48 bg-gradient-to-tr from-blue-50 to-white rounded-lg border border-dashed border-blue-100 flex items-center justify-center text-neutral-400">
            [Chart Visualization]
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl border border-neutral-200 bg-white/80 shadow-sm p-6 backdrop-blur-sm"
        >
          <h4 className="font-medium text-neutral-700 mb-4">
            Apdex Rate (%)
          </h4>
          <div className="h-48 bg-gradient-to-tr from-red-50 to-white rounded-lg border border-dashed border-red-100 flex items-center justify-center text-neutral-400">
            [Chart Visualization]
          </div>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="rounded-2xl border border-neutral-200 bg-white/80 shadow-sm p-6 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-neutral-700">
            Recent Transactions
          </h4>
          <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <table className="w-full text-sm border-t border-neutral-200">
          <thead>
            <tr className="text-neutral-500 text-xs uppercase">
              <th className="py-2 text-left font-medium">Endpoint</th>
              <th className="py-2 text-left font-medium">Method</th>
              <th className="py-2 text-left font-medium">Response Time</th>
              <th className="py-2 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="border-t border-neutral-200 hover:bg-neutral-50/70 transition"
              >
                <td className="py-2">{t.route}</td>
                <td className="py-2 text-neutral-600">{t.method}</td>
                <td className="py-2">{t.latencyMs}</td>
                <td
                  className={`py-2 font-medium ${t.status >= 400 ? "text-red-600" : "text-emerald-600"
                    }`}
                >
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default Overview;
