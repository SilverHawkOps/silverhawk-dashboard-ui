import React from "react";
import InfraAgentInstallationGuidePage from "./InfraAgentInstallationGuidePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SilverHawk Infra Agent Installation & Troubleshooting Guide | APM Docs",
  description:
    "Step-by-step guide to install, configure, and troubleshoot the SilverHawk Infra Agent for real-time infrastructure monitoring. Supports Linux, macOS, and Windows.",
  keywords: [
    "SilverHawk Infra Agent",
    "APM monitoring",
    "infrastructure metrics",
    "server monitoring",
    "process monitoring",
    "agent installation guide",
    "DevOps tools",
    "system performance tracking",
    "infra monitoring",
    "troubleshooting guide",
  ],
  alternates: {
    canonical: "https://docs.silverhawk.dev/infra-agent-installation",
  },
  openGraph: {
    title: "SilverHawk Infra Agent Installation & Troubleshooting Guide",
    description:
      "Learn how to install, configure, and troubleshoot the SilverHawk Infra Agent for CPU, memory, disk, and process monitoring.",
    url: "https://docs.silverhawk.dev/infra-agent-installation",
    siteName: "SilverHawk APM",
    type: "article",
    images: [
      {
        url: "https://docs.silverhawk.dev/images/infra-agent-cover.png",
        width: 1200,
        height: 630,
        alt: "SilverHawk Infra Agent Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SilverHawk Infra Agent Installation & Troubleshooting Guide",
    description:
      "Full installation, configuration, and troubleshooting guide for the SilverHawk Infra Agent.",
    creator: "@silverhawk_apm",
    images: ["https://docs.silverhawk.dev/images/infra-agent-cover.png"],
  },
};

const InfraAgentInstallationPage = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      <article
        itemScope
        itemType="https://schema.org/TechArticle"
        className="w-full mx-auto"
      >
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline:
                "SilverHawk Infra Agent Installation & Troubleshooting Guide",
              description:
                "A complete guide to installing, configuring, and troubleshooting the SilverHawk Infra Agent for infrastructure monitoring.",
              author: {
                "@type": "Organization",
                name: "SilverHawk APM",
                url: "https://silverhawk.dev",
              },
              publisher: {
                "@type": "Organization",
                name: "SilverHawk APM",
                logo: {
                  "@type": "ImageObject",
                  url: "https://silverhawk.dev/logo.png",
                },
              },
              mainEntityOfPage:
                "https://docs.silverhawk.dev/infra-agent-installation",
              datePublished: "2025-10-27",
              dateModified: "2025-10-27",
            }),
          }}
        />
        <InfraAgentInstallationGuidePage />
      </article>
    </main>
  );
};

export default InfraAgentInstallationPage;
