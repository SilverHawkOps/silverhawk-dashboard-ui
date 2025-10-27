"use client";

import React, { useState } from "react";
import WebsiteCheckForm from "./PagePerformanceCheckForm";
import PageLoadPerformanceResult from "./PageLoadPerformanceResult";

// Define the shape of performance data (you can adjust fields as per your actual API)
interface Audit {
  id?: string;
  title: string;
  description?: string;
  displayValue?: string;
  score: number | null;
  category?: string;
  details?: {
    items?: Array<{
      timing: number;
      data: string; // base64 image
    }>;
  };
}

// Type for screenshot thumbnails audit
interface ScreenshotThumbnailsAudit extends Audit {
  details: {
    items: {
      timing: number;
      data: string;
    }[];
  };
}
// Main performance data type
interface PerformanceData {
  requestedUrl: string;
  fetchTime: string;
  gatherMode: string;
  audits: {
    [key: string]: Audit | ScreenshotThumbnailsAudit;
    "screenshot-thumbnails": ScreenshotThumbnailsAudit;
  };
}

const PagePerformance: React.FC = () => {
  const [ performanceData, setPerformanceData ] = useState<PerformanceData | null>( null );

  const onSubmit = ( data: PerformanceData ) => {
    setPerformanceData( data );
  };

  return (
    <div>
      { !performanceData ? (
        <WebsiteCheckForm onSubmit={ onSubmit } />
      ) : (
        <PageLoadPerformanceResult performanceData={ performanceData } />
      ) }
    </div>
  );
};

export default PagePerformance;
