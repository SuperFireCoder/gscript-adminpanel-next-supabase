import { BetaAnalyticsDataClient } from "@google-analytics/data";
const propertyId = "411475154";
// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
export async function GET() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2020-03-31",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "city",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
    ],
  });

  console.log("Report result:");
  response.rows?.forEach((row: any) => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });
  return response.rows;
}
