"use client";

import React, { useState } from "react";
import WebsiteCheckForm from "./PagePerformanceCheckForm";
import PageLoadPerformanceResult from "./PageLoadPerformanceResult";

// Define the shape of performance data (you can adjust fields as per your actual API)
interface PerformanceData {
  url: string;
  score: number;
  metrics: Record<string, number>;
  [ key: string ]: any;
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
