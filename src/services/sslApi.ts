import { baseApi } from "./baseApi";
import { GetSSLMonitorsResponse, SSLMonitor, AddTrackSSLRequest } from "./types";

export const sslApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSSLMonitors: builder.query<SSLMonitor[], void>({
      query: () => "track-ssl",
      transformResponse: (response: GetSSLMonitorsResponse) => response.data.monitors,
      providesTags: ["Alerts"],
    }),
    addTrackSSL: builder.mutation<void, AddTrackSSLRequest>({
      query: (body) => ({
        url: "track-ssl",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Alerts"],
    }),
  }),
});

export const {
  useGetSSLMonitorsQuery,
  useAddTrackSSLMutation,
} = sslApi;
