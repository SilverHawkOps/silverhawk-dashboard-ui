export interface AddInfraRequest {
  name: string;
  description: string;
  tags: string[];
  environment: 'production' | 'staging' | 'development' | 'testing';
}

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

export interface UpdateFlagStatusRequest {
  name: string;
  is_enabled: boolean;
}

export interface FeatureFlags {
  [key: string]: boolean;
}

export interface AddTrackSSLRequest {
  
}

export interface GetPageLoadPerformanceByUrlRequest {
  url: string;
}