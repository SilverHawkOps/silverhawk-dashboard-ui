// lib/analytics.ts
type EventProperties = Record<string, string|object>;

class Analytics {
  private baseUrl: string;
  private endpoint: string;
  private queue: EventProperties[] = [];
  private flushInterval: number;

  constructor(endpoint: string, flushInterval = 5000) {
    this.baseUrl = "http://localhost:4000/v1/";
    this.endpoint = `${this.baseUrl}${endpoint}`;
    this.flushInterval = flushInterval;
    setInterval(() => this.flush(), this.flushInterval);
  }

  track(event: string, properties: EventProperties = {}) {
    const page = window.location.pathname; // current page
    const userId = localStorage.getItem("user_id") || "anonymous"; // if logged in
    const timestamp = new Date().toISOString();

    this.queue.push({
      event,
      properties,
      context: {
        page,
        userId,
        timestamp,
      },
    });
  }

  async flush() {
    if (this.queue.length === 0) return;
    const payload = [...this.queue];
    this.queue = [];
    try {
      await fetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Analytics flush failed", err);
      this.queue.unshift(...payload); // retry next flush
    }
  }
}

export const analytics = new Analytics("analytics");
