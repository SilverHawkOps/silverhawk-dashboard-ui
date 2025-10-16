"use client";
import React, { useEffect, useState } from "react";
import { RefreshCwIcon } from "lucide-react"; // or any icon library

interface AutoRefreshProps {
  intervalSeconds: number;
  onRefresh: () => void;
}

const AutoRefresh: React.FC<AutoRefreshProps> = ({ intervalSeconds, onRefresh }) => {
  const [secondsLeft, setSecondsLeft] = useState(intervalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          onRefresh();
          return intervalSeconds; // reset countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [intervalSeconds, onRefresh]);

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-300 mb-4">
      <RefreshCwIcon className="h-4 w-4 animate-spin" />
      <span>Refreshing in {secondsLeft} seconds...</span>
    </div>
  );
};

export default AutoRefresh;
