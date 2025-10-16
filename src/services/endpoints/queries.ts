import { Metric, Alert, FeatureFlags } from "../types";

export const getQueries = (builder: any) => ({
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

  getInfraMetrics: builder.query<void, string>({
    query: (infraId) => `infra/${infraId}/metrics`,
  }),

  getFeatureFlags: builder.query<void, void>({
    query: () => "admin/feature-flags",
    providesTags: ["FeatureFlags"],
  }),

  getApplicationFeatureFlags: builder.query<FeatureFlags, void>({
    query: () => `feature-flags`,
    keepUnusedDataFor: 60,
  }),
});
