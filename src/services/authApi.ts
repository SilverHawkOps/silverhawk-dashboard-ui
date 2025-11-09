import { baseApi } from "./baseApi";
import {
  LoginRequest,
  LoginResponse,
  InviteLinkRequest,
  InviteLinkResponse,
  AcceptUserInviteRequest,
  AcceptUserInviteResponse,
  VerifyMfaLoginResponse,
  VerifyMfaLoginRequest,
} from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    verifyMfaLogin: builder.mutation<VerifyMfaLoginResponse, VerifyMfaLoginRequest>({
      query: ({ code, tempToken }) => ({
        url: "auth/verify-mfa-login",
        method: "POST",
        headers: {
          Authorization: `Bearer ${tempToken}`,
        },
        body: { code },
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
  }),
});

export const {
  useLoginMutation,
  useSendInviteLinkMutation,
  useAcceptUserInviteMutation,
  useVerifyMfaLoginMutation
} = authApi;
