import React from "react";


const PageLoadPerformancePageGuide = () => {
  return (
    <section className="prose dark:prose-invert w-full mx-auto py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-4">
        Page Load Performance (Synthetic Monitoring)
      </h1>
      <p className="text-gray-600 dark:text-gray-300">
        The <strong>Silverhawk Synthetic Monitoring</strong> feature provides
        real-time performance insights by simulating user sessions using
        headless Chrome. It measures metrics like{" "}
        <strong>LCP, FID, CLS, TTI, and Speed Index</strong> to help you
        identify bottlenecks and improve your app’s performance.
      </p>

      <h2 className="text-2xl font-semibold mt-10">How It Works</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Launches a headless browser session for your provided URL.</li>
        <li>Captures key metrics using Google Lighthouse APIs.</li>
        <li>Generates performance scores and visual timelines.</li>
        <li>Displays detailed results in the Silverhawk dashboard.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-10">Setup Instructions</h2>
      <h3 className="font-semibold mt-4">Step 1: Create a New Test</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Navigate to <strong>Dashboard → Synthetic Monitoring → Page Load Performance</strong>.</li>
        <li>Provide your target <strong>URL</strong> (e.g. https://example.com).</li>
      </ul>

      <img src="https://res.cloudinary.com/dr9cunz0j/image/upload/v1761641753/b7cb91d6-964a-4642-9321-a11690119ef0.png" 
        className="my-5 w-4/5 mx-auto"
        alt="Caption"
      />

      <h3 className="font-semibold mt-4">Step 2: Trigger the Test</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Silverhawk will simulate a real browser visit, collect performance data,
        and display it on the dashboard under{" "}
        <strong>Page Load Performance</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-10">Dashboard Insights</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Header Information:</strong> Displays tested URL, fetch time,
          and test mode.
        </li>
        <li>
          <strong>Screenshot Timeline:</strong> Visual progression of page load
          from blank to fully rendered.
        </li>
        <li>
          <strong>Performance Metrics:</strong> Detailed scores for FCP, LCP,
          TTI, CLS, and TBT.
        </li>
      </ul>

      <h3 className="font-semibold mt-6">Example Metrics</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>FCP (First Contentful Paint):</strong> Time until first
          visible content appears.
        </li>
        <li>
          <strong>LCP (Largest Contentful Paint):</strong> Time to render main
          content.
        </li>
        <li>
          <strong>TBT (Total Blocking Time):</strong> Measures JS blocking time.
        </li>
        <li>
          <strong>CLS (Cumulative Layout Shift):</strong> Measures visual
          stability.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Interpreting Results</h2>
      <table className="w-full text-left border-collapse mt-4">
        <thead>
          <tr className="border-b">
            <th className="p-2">Score Range</th>
            <th className="p-2">Color</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">90–100</td>
            <td className="p-2">🟢 Green</td>
            <td className="p-2">Excellent performance</td>
          </tr>
          <tr>
            <td className="p-2">50–89</td>
            <td className="p-2">🟠 Yellow</td>
            <td className="p-2">Needs improvement</td>
          </tr>
          <tr>
            <td className="p-2">0–49</td>
            <td className="p-2">🔴 Red</td>
            <td className="p-2">Critical issues found</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-10">Troubleshooting</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>No screenshots?</strong> Ensure Chrome headless dependencies
          are installed.
        </li>
        <li>
          <strong>Score = 0?</strong> The page may be blocked or unreachable.
        </li>
        <li>
          <strong>High CLS?</strong> Fix layout shifts with fixed-size images.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Best Practices</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Run tests regularly across multiple regions.</li>
        <li>Compare desktop and mobile performance separately.</li>
        <li>Enable alerts for score degradation.</li>
        <li>Combine synthetic monitoring with real user data (RUM).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">Summary</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Simulates real browser page loads using Lighthouse.</li>
        <li>Captures render timeline and key metrics.</li>
        <li>Integrates with CI/CD and API endpoints.</li>
        <li>Provides full performance visibility in one dashboard.</li>
      </ul>

    </section>
  );
};

export default PageLoadPerformancePageGuide;
