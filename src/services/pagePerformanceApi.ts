import { baseApi } from "./baseApi";
import { GetPageLoadPerformanceByUrlRequest, PageLoadResponse } from "./types";

export const pagePerformanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPageLoadPerformanceByUrl: builder.mutation<PageLoadResponse, GetPageLoadPerformanceByUrlRequest>({
      query: ({ url }) => ({
        url: "page-load-performance",
        method: "POST",
        body: { url },
      }),
    }),
  }),
});

export const { useGetPageLoadPerformanceByUrlMutation } = pagePerformanceApi;
