/**
 * Fetches GA4 analytics data for SEO analysis.
 *
 * Usage:
 *   node scripts/ga-report.mjs
 *
 * Requires either:
 *   - GOOGLE_ANALYTICS_CREDENTIALS env var (base64-encoded JSON)
 *   - Or local credentials file at ./google analytics/lawwg-analytics-14abef2514b5.json
 */
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { readFileSync } from "fs";
import { resolve } from "path";

const PROPERTY_ID = "533223006";

function getCredentials() {
  if (process.env.GOOGLE_ANALYTICS_CREDENTIALS) {
    return JSON.parse(
      Buffer.from(process.env.GOOGLE_ANALYTICS_CREDENTIALS, "base64").toString()
    );
  }
  const localPath = resolve("google analytics/lawwg-analytics-14abef2514b5.json");
  return JSON.parse(readFileSync(localPath, "utf-8"));
}

const credentials = getCredentials();
const client = new BetaAnalyticsDataClient({ credentials });

async function runReport(config) {
  const [response] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    ...config,
  });
  return response;
}

// --- Top pages by views (last 28 days) ---
const topPages = await runReport({
  dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
  dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
  metrics: [
    { name: "screenPageViews" },
    { name: "averageSessionDuration" },
    { name: "bounceRate" },
    { name: "activeUsers" },
  ],
  orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
  limit: 30,
});

// --- Traffic sources ---
const trafficSources = await runReport({
  dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
  dimensions: [{ name: "sessionDefaultChannelGroup" }],
  metrics: [
    { name: "sessions" },
    { name: "activeUsers" },
    { name: "bounceRate" },
  ],
  orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  limit: 10,
});

// --- Top landing pages ---
const landingPages = await runReport({
  dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
  dimensions: [{ name: "landingPage" }],
  metrics: [
    { name: "sessions" },
    { name: "bounceRate" },
    { name: "averageSessionDuration" },
    { name: "conversions" },
  ],
  orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
  limit: 20,
});

// --- Daily trend (last 14 days) ---
const dailyTrend = await runReport({
  dateRanges: [{ startDate: "14daysAgo", endDate: "yesterday" }],
  dimensions: [{ name: "date" }],
  metrics: [
    { name: "activeUsers" },
    { name: "screenPageViews" },
    { name: "sessions" },
  ],
  orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
});

// --- Search queries (if available) ---
let searchQueries = null;
try {
  searchQueries = await runReport({
    dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
    dimensions: [{ name: "sessionGoogleAdsQuery" }],
    metrics: [{ name: "sessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 20,
  });
} catch {
  // Search query data may not be available
}

// --- Format and output ---
function formatRows(response) {
  if (!response?.rows?.length) return [];
  return response.rows.map((row) => ({
    dimensions: row.dimensionValues.map((d) => d.value),
    metrics: row.metricValues.map((m) => m.value),
  }));
}

const report = {
  generatedAt: new Date().toISOString(),
  propertyId: PROPERTY_ID,
  topPages: {
    headers: ["pagePath", "pageTitle", "views", "avgDuration", "bounceRate", "users"],
    rows: formatRows(topPages),
  },
  trafficSources: {
    headers: ["channel", "sessions", "users", "bounceRate"],
    rows: formatRows(trafficSources),
  },
  landingPages: {
    headers: ["landingPage", "sessions", "bounceRate", "avgDuration", "conversions"],
    rows: formatRows(landingPages),
  },
  dailyTrend: {
    headers: ["date", "users", "pageViews", "sessions"],
    rows: formatRows(dailyTrend),
  },
  searchQueries: searchQueries
    ? {
        headers: ["query", "sessions"],
        rows: formatRows(searchQueries),
      }
    : null,
};

console.log(JSON.stringify(report, null, 2));
