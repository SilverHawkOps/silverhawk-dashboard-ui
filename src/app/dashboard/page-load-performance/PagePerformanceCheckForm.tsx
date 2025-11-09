"use client";
import { useGetPageLoadPerformanceByUrlMutation } from "@/services/pagePerformanceApi";
import React, { useState } from "react";

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
interface WebsiteCheckFormProps {
  onSubmit: ( data: PerformanceData ) => void;
}

const WebsiteCheckForm: React.FC<WebsiteCheckFormProps> = ( { onSubmit } ) => {
  const [ url, setUrl ] = useState( "" );


  const [ getPageLoadPerformance, { isLoading, error } ] = useGetPageLoadPerformanceByUrlMutation();

  console.log( isLoading, error )
  const handleSubmit = async ( e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if ( !url ) return;

    const res = await getPageLoadPerformance( { url: url } );

    if(res?.data) {
      onSubmit( res.data );
    }

  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        Check Page Performance
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Enter a website URL to see page load metrics and insights.
      </p>

      <form onSubmit={ handleSubmit } className="flex gap-2">
        <input
          type="url"
          placeholder="https://example.com"
          value={ url }
          onChange={ ( e ) => setUrl( e.target.value ) }
          required
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm transition"
        >
          { isLoading ? "Checking..." : "Go" }
        </button>
      </form>

      { error && (
        <p className="text-red-500 text-sm mt-2">
          Failed to fetch data. Try again.
        </p>
      ) }
    </div>
  );
};

export default WebsiteCheckForm;