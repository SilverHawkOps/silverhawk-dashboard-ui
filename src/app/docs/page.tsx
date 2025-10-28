import React from "react";
import DocsHome from "./DocsHome";

export const metadata = {
  title: "Silverhawk APM Documentation | Setup, Guides & Developer Docs",
  description:
    "Official Silverhawk APM documentation — learn how to install agents, monitor infrastructure, track application performance, and integrate with your DevOps workflow. Get started quickly with setup guides, API references, and best practices.",
  keywords: [
    "Silverhawk APM",
    "application performance monitoring",
    "infrastructure monitoring",
    "DevOps observability",
    "APM agent setup",
    "server metrics",
    "Node.js monitoring",
    "MERN observability",
    "performance tracking",
    "DevOps tools",
  ],
  openGraph: {
    title: "Silverhawk APM Documentation | Setup & Integration Guides",
    description:
      "Explore Silverhawk APM docs — step-by-step guides to install, configure, and monitor your infrastructure and apps with real-time metrics and logs.",
    url: "https://app.silverhawk.io/docs",
    siteName: "Silverhawk APM Documentation",
    images: [
      {
        url: "https://silverhawk.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Silverhawk APM Docs Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverhawk APM Documentation | Developer & Setup Guides",
    description:
      "Get started with Silverhawk APM — install the agent, monitor servers, visualize metrics, and optimize performance with ease.",
    images: ["https://silverhawk.io/og-image.png"],
  },
};

const Page = () => {
  return <DocsHome />;
};

export default Page;
