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
  name: string
}

export interface GetPageLoadPerformanceByUrlRequest {
  url: string;
}

export interface Flag {
  _id: string;
  name: string;
  description: string;
  is_enabled: boolean;
  key: string;
  type: string;
}


export interface CPUInfo {
  load: number;
}

export interface NetworkInfo {
  rx_bytes: number;
  tx_bytes: number;
}

export interface DiskInfo {
  mount: string;
  sizeGB: number;
  usedGB: number;
}

export interface Metric {
  timestamp: string;
  cpu: number;
  memory: number; // adjust as needed for MemoryChart
  storage?: string; // adjust as needed for StorageChart
  network: NetworkInfo[];
  disk: DiskInfo[];
};

interface MemoryMetric {
  timestamp: string | number;
  memory: {
    usedGB: number | string;
    totalGB: number | string;
  };
}

export interface InfraData {
  infra: {
    hostname: string;
    lastHeartbeat: string;
    status: "online" | "offline" | string;
  };
  metrics: MemoryMetric[];
};