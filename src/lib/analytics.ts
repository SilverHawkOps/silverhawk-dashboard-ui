// /lib/analytics.ts
export type AnalyticsEvent = {
  event: string;
  userId?: string;
  properties?: Record<string, any>;
  timestamp?: string;
};

const API_URL = process.env.NEXT_PUBLIC_ANALYTICS_URL || "/api/track";

export async function track(
  event: string,
  properties: Record<string, any> = {},
  userId?: string
) {
  try {
    const payload: AnalyticsEvent = {
      event,
      userId,
      properties,
      timestamp: new Date().toISOString(),
    };


    // Optionally log locally in dev
    if (process.env.NODE_ENV !== "production") {
      console.info("🔍 Tracking event:", payload);
    }

    // Fire and forget
    navigator?.sendBeacon(
      API_URL,
      JSON.stringify(payload)
    ) ||
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
  } catch (err) {
    console.error("❌ Analytics tracking failed:", err);
  }
}
