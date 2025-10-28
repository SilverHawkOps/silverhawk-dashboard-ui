import React from 'react'
import PageLoadPerformancePageGuide from './PageLoadPerformancePageGuide'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "Page Load Performance (Synthetic Monitoring) | Silverhawk APM Docs",
  description:
    "Learn how to set up and analyze Synthetic Monitoring in Silverhawk APM to measure page load performance, visualize rendering progress, and optimize Core Web Vitals using Lighthouse metrics.",
  keywords: [
    "Synthetic Monitoring",
    "Page Load Performance",
    "Lighthouse Metrics",
    "Core Web Vitals",
    "Silverhawk APM",
    "Performance Optimization",
    "Web Vitals Monitoring",
  ],
  openGraph: {
    title: "Page Load Performance (Synthetic Monitoring) | Silverhawk APM Docs",
    description:
      "A complete guide to measuring and improving web page performance with Silverhawk Synthetic Monitoring and Lighthouse audits.",
    url: "https://app.silverhawk.io/docs/synthetic-monitoring/page-load-performance",
    siteName: "Silverhawk APM Docs",
    images: [
      {
        url: "https://silverhawk.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Silverhawk Synthetic Monitoring Docs",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Load Performance (Synthetic Monitoring) | Silverhawk APM Docs",
    description:
      "Understand and optimize page load performance with Silverhawk Synthetic Monitoring. Analyze FCP, LCP, CLS, and more.",
    images: ["https://silverhawk.io/og-image.png"],
  },
};

const PageLoadPerformancePage = () => {
  return (
    <PageLoadPerformancePageGuide />
  )
}

export default PageLoadPerformancePage;