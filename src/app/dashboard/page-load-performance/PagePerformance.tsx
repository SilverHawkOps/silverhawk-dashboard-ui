"use client";
import React, { useState } from 'react'
import WebsiteCheckForm from './PagePerformanceCheckForm';
import PageLoadPerformanceResult from './PageLoadPerformanceResult';

const PagePerformance = () => {

    const [performanceData, setPerformanceData] = useState(null);

    const onSubmit = (data) => {
        setPerformanceData(data);
    }
    return (
        <div>
            {!performanceData && <WebsiteCheckForm onSubmit={onSubmit} />}
            {performanceData && <PageLoadPerformanceResult performanceData={performanceData} />}
        </div>
    )
}

export default PagePerformance