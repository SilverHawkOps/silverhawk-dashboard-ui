import type { Metadata } from "next";
import { ApmMetrics } from "@/components/ecommerce/ApmMetrics";
import React from "react";
import SystemHealthChart from "@/components/ecommerce/SystemHealthChart";
import RecentAlerts from "@/components/ecommerce/RecentAlerts";
import ServiceLatencyTable from "@/components/ecommerce/ServiceLatencyTable";

export const metadata: Metadata = {
  title: "SilverHawk APM Dashboard | Monitor & Optimize Your Systems",
  description: "User dashboard for SilverHawk APM - monitor uptime, system health, and optimize your applications in real-time.",
};

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12 space-y-6 xl:col-span-12">
        <ApmMetrics />
      </div>

      {/* Charts & Alerts Section */ }
      <div className="col-span-12 xl:col-span-8 space-y-6">
        {/* System Health Chart */ }
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
            System Health Overview
          </h3>
          <SystemHealthChart />
        </div>

        {/* Service Latency Table */ }
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
            Service Latency
          </h3>
          <ServiceLatencyTable />
        </div>
      </div>

      {/* Alerts Sidebar */ }
      <div className="col-span-12 xl:col-span-4 space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
            Active Alerts
          </h3>
          <RecentAlerts />
        </div>
      </div>
    </div>
  );
}
