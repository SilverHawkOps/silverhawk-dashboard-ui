// src/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getQueries } from "./endpoints/queries";
import { getMutations } from "./endpoints/mutations";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Metrics", "Alerts", "Infra", "FeatureFlags"],
  endpoints: (builder) => ({
    ...getQueries(builder),
    ...getMutations(builder),
  }),
});

export const {
  useGetMetricsQuery,
  useGetSSLMonitorsQuery,
  useLoginMutation,
  useSendInviteLinkMutation,
  useAcceptUserInviteMutation,
  useGetInfraListQuery,
  useAddInfraMutation,
  useGetInfraMetricsQuery,
  useGetFeatureFlagsQuery,
  useUpdateFeatureFlagStatusMutation,
  useGetApplicationFeatureFlagsQuery,
  useGetPageLoadPerformanceByUrlMutation,
} = api;
