// services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Example Metric type
export interface Metric {
    service: string;
    cpu: number;
    memory: number;
    timestamp: string;
}

export const api = createApi( {
    reducerPath: "api",
    baseQuery: fetchBaseQuery( { baseUrl: "/api" } ), // your backend API
    tagTypes: [ "Metrics" ], // for cache invalidation
    endpoints: ( builder ) => ( {
        getMetrics: builder.query<Metric[], void>( {
            query: () => "metrics",
            providesTags: [ "Metrics" ],
        } ),
        getAlerts: builder.query<any[], void>( {
            query: () => "alerts",
        } ),
    } ),
} );

export const { useGetMetricsQuery, useGetAlertsQuery } = api;
