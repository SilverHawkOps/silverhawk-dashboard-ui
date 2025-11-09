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
    mfaRequired: boolean;
    tempToken?: string;
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

// types.ts or inside your api.ts file

export interface Audit {
  id?: string;
  title: string;
  description?: string;
  displayValue?: string;
  score: number | null;
  category?: string;
  details?: {
    items?: Array<{
      timing: number;
      data: string; // base64 image
    }>;
  };
}

export interface ScreenshotThumbnailsAudit extends Audit {
  details: {
    items: {
      timing: number;
      data: string;
    }[];
  };
}

export interface PageLoadResponse {
  requestedUrl: string;
  fetchTime: string;
  gatherMode: string;
  audits: {
    [key: string]: Audit | ScreenshotThumbnailsAudit;
    "screenshot-thumbnails": ScreenshotThumbnailsAudit;
  };
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

export interface InfraMetrics {
  cpuLoad: number;
  memoryUsage: number;
  diskUsage: number;
  networkIn: number;
  networkOut: number;
}

export interface Infra {
  _id: string;
  name: string;
  description: string;
  userId: string;
  tags: string[];
  environment: "production" | "staging" | "testing" | "development" | string;
  os: string | null;
  cpuCores: number;
  memoryGB: number;
  diskGB: number;
  status: "online" | "offline" | "new" | string;
  lastHeartbeat: string | null;
  apiKey: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  hostname?: string;
  agentVersion?: string;
  ipAddress?: string;
  metrics: InfraMetrics;
}


export interface GetInfraListResponse {
  message: string;
  infra: Infra[];
}

export interface NetworkMetric {
  iface: string;
  rx_bytes: number;
  tx_bytes: number;
  _id: string
}

export interface DiskMetric {
  mount: string;
  sizeGB: number;
  usedGB: number;
  _id: string;
}



export interface InfraMetric {
  _id: string;
  __v: number;
  infraId: string;
  timestamp: string;
  hostname: string;
  network: NetworkMetric[];
  disk: DiskMetric[];
  memory: {
    totalGB: number;
    usedGB: number;
    _id: string;
  };
  cpu: {
    cores: number;
    speed: number;
    load: number;
    _id: string;
    perCore: {
      load: number;
      loadUser: number;
      loadSystem: number;
      loadIdle: number;
      _id: string
    }[];
  }
}

export interface GetInfraMetricsResponse {
  success: boolean;
  message: string;
  infra: Infra;
  metrics: InfraMetric[];
}

export interface SSLMonitor {
  createdAt: string;
  daysRemaining: number;
  domain: string;
  issuer: string;
  repeatJobKey: string;
  sslStatus: string;
  status: string;
  updatedAt: string;
  userId: string;
  validFrom: string;
  validTo: string;
  __v: number;
  _id: string;
}


export interface GetSSLMonitorsResponse {
  success: boolean;
  message: string;
  data: {
    monitors: SSLMonitor[];
  }
}

export interface VerifyMfaLoginRequest {
  code: string;
  tempToken: string;
}

export interface VerifyMfaLoginResponse {
  data: {
    token: string;
    user: Record<string, unknown>;
  };
}