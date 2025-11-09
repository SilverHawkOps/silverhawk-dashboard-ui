import { baseApi } from "./baseApi";
import { AddInfraRequest, GetInfraListResponse, GetInfraMetricsResponse, Infra, InfraMetric } from "./types";

export const infraApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInfraList: builder.query<Infra[], void>({
      query: () => "infra",
      transformResponse: (response: GetInfraListResponse) => response.infra,
      providesTags: ["Infra"],
    }),
    getInfraMetrics: builder.query<{ infra: Infra; metrics: InfraMetric[] }, string>({
      query: (infraId) => `infra/${infraId}/metrics`,
      transformResponse: (response: GetInfraMetricsResponse) => ({
        infra: response.infra,
        metrics: response.metrics,
      }),
    }),
    addInfra: builder.mutation<Infra, AddInfraRequest>({
      query: (body) => ({
        url: "infra",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Infra"],
    }),
  }),
});

export const {
  useGetInfraListQuery,
  useGetInfraMetricsQuery,
  useAddInfraMutation,
} = infraApi;
