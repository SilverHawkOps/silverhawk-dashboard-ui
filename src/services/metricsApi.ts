import { baseApi } from "./baseApi";
import { Metric } from "./types";

export const metricsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<Metric[], void>({
      query: () => "metrics",
      providesTags: ["Metrics"],
    }),
  }),
});

export const { useGetMetricsQuery } = metricsApi;
