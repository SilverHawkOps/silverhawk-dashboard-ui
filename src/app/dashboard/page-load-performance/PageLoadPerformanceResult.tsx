"use client";
import { CrossIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PageLoadPerformanceResult = ( { performanceData } ) => {
  console.log( performanceData.audits[ "screenshot-thumbnails" ] )
  const auditArray = Object.entries( performanceData.audits ).map( ( [ key, value ] ) => ( {
    key,
    ...value,
  } ) );

  // const [activeCategory, setActiveCategory] = useState("all");
  const activeCategory = "all";

  // Optional: Filter audits by category
  const filteredAudits =
    activeCategory === "all"
      ? auditArray
      : auditArray.filter( ( audit ) => audit.category === activeCategory );

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen space-y-10">
      {/* Sticky Header */ }
      <div className="flex flex-row justify-between gap-6 bg-white dark:bg-gray-800 rounded-md p-6 sticky top-0 z-50">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Requested URL</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white break-all">{ performanceData.requestedUrl }</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Fetch Time</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{ new Date( performanceData.fetchTime ).toString() }</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">Gather Mode</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{ performanceData.gatherMode.toUpperCase() }</p>
        </div>
      </div>

      {/* Page Load Thumbnails */ }
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Page Load Thumbnails</h2>
        <div className="italic">{ performanceData.audits[ "screenshot-thumbnails" ].description }</div>
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 py-2">
          { performanceData.audits[ "screenshot-thumbnails" ].details.items.map( ( imgItem, index ) => (
            <div
              key={ index }
            >
              <p>{ ( imgItem.timing / 1000 ).toFixed( 2 ) + "s" }</p>

              <div
                className="group flex-shrink-0 w-[180px] rounded-sm overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300"
              >
                <Image
                  src={ imgItem.data }
                  alt={ `Thumbnail ${index + 1}` }
                  width={ 180 }   // width of the card
                  height={ 320 }  // 16/9 ratio height
                  className="object-cover w-full h-full rounded-sm transform transition-transform duration-300"
                />
              </div>
            </div>
          ) ) }
        </div>
      </div>

      {/* Metrics Grid */ }
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Performance Metrics</h2>
        <div className="flex flex-col gap-4">
          { filteredAudits.map( ( audit, index ) => (
            <div
              key={ index }
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 dark:border-gray-700 py-4 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {/* Title + Description */ }
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{ audit.title }</h3>
                { audit.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{ audit.description }</p>
                ) }
              </div>

              {/* Display Value */ }
              { audit.displayValue && (
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 sm:mt-0 sm:ml-4 min-w-[120px] text-right">
                  { audit.displayValue }
                </div>
              ) }

              {/* Score Visualization */ }
              <div className="flex items-center justify-end sm:ml-6 mt-3 sm:mt-0 min-w-[120px]">
                <div className="w-14 h-14">
                  <CircularProgressbar
                    value={ audit.score !== null ? audit.score * 100 : 0 }
                    text={ `${audit.score !== null ? Math.round( audit.score * 100 ) : "--"}` }
                    styles={ buildStyles( {
                      pathColor:
                        audit.score >= 0.9
                          ? "#10B981"
                          : audit.score >= 0.5
                            ? "#F59E0B"
                            : "#EF4444",
                      textColor: "#111827",
                      trailColor: "#E5E7EB",
                    } ) }
                  />
                </div>
              </div>
            </div>

          ) ) }
        </div>
      </div>
    </div>
  );
};

export default PageLoadPerformanceResult;