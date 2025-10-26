"use client";
import { useGetPageLoadPerformanceByUrlMutation } from "@/services/api";
import React, { useState } from "react";

interface PerformanceData {
  url: string;
  score: number;
  metrics: Record<string, number>;
  [ key: string ]: any;
}

interface WebsiteCheckFormProps {
  onSubmit: ( data: PerformanceData ) => void;
}

const WebsiteCheckForm: React.FC<WebsiteCheckFormProps> = ( { onSubmit } ) => {
  const [ url, setUrl ] = useState( "" );


  const [ getPageLoadPerformance, { isLoading, error } ] = useGetPageLoadPerformanceByUrlMutation();

  console.log( isLoading, error )
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    if ( !url ) return;

    const res = await getPageLoadPerformance( { url: url } );

    onSubmit( res.data );
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