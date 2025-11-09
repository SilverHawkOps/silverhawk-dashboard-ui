import { baseApi } from "./baseApi";
import { FeatureFlags, Flag, UpdateFlagStatusRequest } from "./types";

export const featureFlagsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeatureFlags: builder.query<Flag[], void>({
      query: () => "admin/feature-flags",
      providesTags: ["FeatureFlags"],
    }),
    getApplicationFeatureFlags: builder.query<FeatureFlags, void>({
      query: () => "feature-flags",
      keepUnusedDataFor: 60,
    }),
    updateFeatureFlagStatus: builder.mutation<void, UpdateFlagStatusRequest>({
      query: ({ name, is_enabled }) => ({
        url: `admin/feature-flags/${name}/status`,
        method: "PATCH",
        body: { is_enabled },
      }),
      invalidatesTags: ["FeatureFlags"],
    }),
  }),
});

export const {
  useGetFeatureFlagsQuery,
  useGetApplicationFeatureFlagsQuery,
  useUpdateFeatureFlagStatusMutation,
} = featureFlagsApi;
