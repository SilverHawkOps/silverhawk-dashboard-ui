// services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Example Metric type
export interface Metric {
  service: string;
  cpu: number;
  memory: number;
  timestamp: string;
}

export interface Alert {
  service: string;
  cpu: number;
  memory: number;
  timestamp: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface InviteLinkRequest {
  email: string;
}

export interface InviteLinkResponse {
  success: boolean;
  message: string;
}

export interface AcceptUserInviteRequest {
  name: string;
  password: string;
  token: string | null;
}

export interface AcceptUserInviteResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/v1/",
    prepareHeaders: (headers, {}) => {
      // Get token from Redux store or localStorage
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Metrics", "Alerts"],

  endpoints: (builder) => ({
    getMetrics: builder.query<Metric[], void>({
      query: () => "metrics",
      providesTags: ["Metrics"],
    }),
    getSSLMonitors: builder.query<Alert[], void>({
      query: () => "track-ssl",
      providesTags: ["Alerts"],
    }),


    // Mutations
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
        method: "PUT",
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
  }),
});

export const { useGetMetricsQuery, useGetSSLMonitorsQuery, useLoginMutation, useSendInviteLinkMutation, useAcceptUserInviteMutation } = api;
