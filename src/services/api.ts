// src/services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { } from "./types";
import {
  Metric, Alert, FeatureFlags, Flag, InfraData,
  LoginRequest,
  LoginResponse,
  InviteLinkRequest,
  InviteLinkResponse,
  AcceptUserInviteRequest,
  AcceptUserInviteResponse,
  AddInfraRequest,
  UpdateFlagStatusRequest,
  AddTrackSSLRequest,
  GetPageLoadPerformanceByUrlRequest,
} from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Metrics", "Alerts", "Infra", "FeatureFlags"],
  endpoints: (builder) => ({

    getMetrics: builder.query<Metric[], void>({
      query: () => "metrics",
      providesTags: ["Metrics"],
    }),

    getSSLMonitors: builder.query<Alert[], void>({
      query: () => "track-ssl",
      providesTags: ["Alerts"],
    }),

    getInfraList: builder.query<void, void>({
      query: () => "infra",
      providesTags: ["Infra"],
    }),

    getInfraMetrics: builder.query<InfraData, string>({
      query: (infraId) => `infra/${infraId}/metrics`,
    }),

    getFeatureFlags: builder.query<Flag[], void>({
      query: () => "admin/feature-flags",
      providesTags: ["FeatureFlags"],
    }),

    getApplicationFeatureFlags: builder.query<FeatureFlags, void>({
      query: () => `feature-flags`,
      keepUnusedDataFor: 60,
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),

    sendInviteLink: builder.mutation<InviteLinkResponse, InviteLinkRequest>({
      query: (body) => ({
        url: "auth/user-invite",
        method: "POST",
        body,
      }),
    }),

    acceptUserInvite: builder.mutation<AcceptUserInviteResponse, AcceptUserInviteRequest>({
      query: (body) => ({
        url: "auth/accept-invite",
        method: "POST",
        body,
      }),
    }),

    addInfra: builder.mutation<void, AddInfraRequest>({
      query: (body) => ({
        url: "infra",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Infra"],
    }),

    updateFeatureFlagStatus: builder.mutation<void, UpdateFlagStatusRequest>({
      query: ({ name, is_enabled }) => ({
        url: `admin/feature-flags/${name}/status`,
        method: "PATCH",
        body: { is_enabled },
      }),
      invalidatesTags: ["FeatureFlags"],
    }),

    addTrackSSL: builder.mutation<void, AddTrackSSLRequest>({
      query: () => ({
        url: "track-ssl",
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["FeatureFlags"],
    }),

    getPageLoadPerformanceByUrl: builder.mutation<void, GetPageLoadPerformanceByUrlRequest>({
      query: ({ url }) => ({
        url: "page-load-performance",
        method: "POST",
        body: {
          url
        },
      }),
      invalidatesTags: ["FeatureFlags"],
    }),
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
