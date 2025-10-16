import {
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
} from "../types";

export const getMutations = (builder: any) => ({
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
    query: ({url}) => ({
      url: "page-load-performance",
      method: "POST",
      body: {
        url
      },
    }),
    invalidatesTags: ["FeatureFlags"],
  }),
});
