"use client";

import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";

// ✅ Define a proper interface for your error data
interface ErrorProject {
  id: string;
  name: string;
  slug: string;
  platform: string;
}

interface ErrorActivity {
  id: string;
  type: string;
  dateCreated: string;
  data?: Record<string, undefined>;
}

interface ErrorStats {
  "24h": [number, number][];
  "30d": [number, number][];
}

interface ErrorEvent {
  _id: number;
  id: string;
  title: string;
  culprit: string;
  level: string;
  status: string;
  project?: ErrorProject;
  lastSeen: string;
  firstSeen?: string;
  metadata?: {
    type?: string;
    value?: string;
    filename?: string;
    function?: string;
  };
  stats?: ErrorStats;
  activity?: ErrorActivity[];
  [key: string]: unknown; // for any extra fields not explicitly typed
}

// ✅ Dummy data (copied from your example)
const hello: ErrorEvent = {
  _id: 6886801021,
  id: "6886801021",
  title: "ReferenceError: span is not defined",
  culprit: "GET /products-join",
  level: "error",
  status: "unresolved",
  project: {
    id: "4508918747824128",
    name: "express",
    slug: "express",
    platform: "node-express",
  },
  lastSeen: "2025-11-01T02:44:26Z",
  metadata: {
    value: "span is not defined",
    type: "ReferenceError",
    filename: "/workspace/db.js",
    function: "Object.getJoinedProducts",
  },
  stats: {
    "24h": [
      [1761876000, 101],
      [1761879600, 99],
    ],
    "30d": [
      [1759363200, 2282],
      [1759449600, 2136],
    ],
  },
  activity: [],
};

export default function ErrorGroups() {
  const [errors, setErrors] = useState<ErrorEvent[]>([]);

  useEffect(() => {
    // generate dummy errors
    const generatedErrors: ErrorEvent[] = Array(10)
      .fill(0)
      .map((_, index) => ({
        ...hello,
        _id: index + 1,
        id: hello.id + "-" + (index + 1),
      }));

    setErrors(generatedErrors);
  }, []);

  // const toggleAccordion = (id: string) => {
  //   window.location.href = `/dashboard/applications-services/logs-error/${id}`;
  // };

  return (
    <div className="text-gray-900">

      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Error Logs</h2>
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Project Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Team
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Budget
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {errors.map((error) => (
              <TableRow key={error.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  {error.title}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {error.culprit}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {error.project?.name}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {error.status}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {new Date(error.lastSeen).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
