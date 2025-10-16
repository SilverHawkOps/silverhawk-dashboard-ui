"use client";
import { CrossIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PageLoadPerformanceResult = ({ performanceData }) => {
    console.log(performanceData.audits["screenshot-thumbnails"])
  const auditArray = Object.entries(performanceData.audits).map(([key, value]) => ({
    key,
    ...value,
  }));

  const [activeCategory, setActiveCategory] = useState("all");

  // Optional: Filter audits by category
  const filteredAudits =
    activeCategory === "all"
      ? auditArray
      : auditArray.filter((audit) => audit.category === activeCategory);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-10">
      {/* Sticky Header */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-0 z-50">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Requested URL</p>
          <p className="text-md font-semibold text-gray-900 dark:text-white break-all">{performanceData.requestedUrl}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Fetch Time</p>
          <p className="text-md font-semibold text-gray-900 dark:text-white">{performanceData.fetchTime}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Gather Mode</p>
          <p className="text-md font-semibold text-gray-900 dark:text-white">{performanceData.gatherMode.toUpperCase()}</p>
        </div>
      </div>

      {/* Page Load Thumbnails */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Page Load Thumbnails</h2>
        <div className="italic">{performanceData.audits["screenshot-thumbnails"].description}</div>
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 py-2">
          {performanceData.audits["screenshot-thumbnails"].details.items.map((imgItem, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[360px] h-[720px] snap-start rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <Image
                src={imgItem.data}
                width={360}
                height={720}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-full h-full rounded-3xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-lg backdrop-blur-sm">
                Step {index + 1} {imgItem.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAudits.map((audit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center gap-4 relative"
            >
              {/* Info Icon */}
              <div className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">
                <CrossIcon className="w-5 h-5" title={audit.description} />
              </div>

              {/* Circular Score */}
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={audit.score !== null ? audit.score * 100 : 0}
                  text={`${audit.score !== null ? Math.round(audit.score * 100) : "--"}`}
                  styles={buildStyles({
                    pathColor:
                      audit.score >= 0.9
                        ? "#10B981"
                        : audit.score >= 0.5
                        ? "#F59E0B"
                        : "#EF4444",
                    textColor: "#111827",
                    trailColor: "#D1D5DB",
                  })}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">{audit.title}</h3>

              {/* Display value */}
              {audit.displayValue && (
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{audit.displayValue}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoadPerformanceResult;
