"use client";

import Link from "next/link";
import { BookOpen, Cpu, Settings, Zap, LifeBuoy } from "lucide-react";

export default function HelpSupport() {
    const sections = [
        {
            icon: <BookOpen className="w-6 h-6 text-blue-500" />,
            title: "Getting Started",
            description:
                "Learn how to set up your SilverHawk APM account, create an infrastructure, and connect your first agent.",
            links: [
                { label: "Create Infrastructure", href: "/docs/getting-started/create-infra" },
                { label: "Install Agent", href: "/docs/getting-started/install-agent" },
            ],
        },
        {
            icon: <Cpu className="w-6 h-6 text-green-500" />,
            title: "Agent & Metrics",
            description:
                "Understand how the SilverHawk Infra Agent collects system metrics, heartbeats, and performance data.",
            links: [
                { label: "Agent Configuration", href: "/docs/agent/configuration" },
                { label: "Supported Metrics", href: "/docs/agent/metrics" },
            ],
        },
        {
            icon: <Zap className="w-6 h-6 text-yellow-500" />,
            title: "Monitoring & Alerts",
            description:
                "Set up alerts, view live metrics, and configure uptime monitors for your services.",
            links: [
                { label: "Uptime Alerts", href: "/docs/monitoring/alerts" },
                { label: "Metrics Dashboard", href: "/docs/monitoring/dashboard" },
            ],
        },
        {
            icon: <Settings className="w-6 h-6 text-purple-500" />,
            title: "Integrations",
            description:
                "Connect SilverHawk APM with tools like Slack, Discord, and Webhooks for real-time notifications.",
            links: [
                { label: "Slack Integration", href: "/docs/integrations/slack" },
                { label: "Webhooks", href: "/docs/integrations/webhooks" },
            ],
        },
        {
            icon: <LifeBuoy className="w-6 h-6 text-emerald-500" />,
            title: "Support & Troubleshooting",
            description:
                "Find solutions to common issues, logs directory, and how to contact our support team.",
            links: [
                { label: "Common Issues", href: "/docs/support/common-issues" },
                { label: "Contact Support", href: "/docs/support/contact" },
            ],
        },
    ];

    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */ }
                <div className="text-center mb-14">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        SilverHawk APM Help Center
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Find everything you need to set up, monitor, and optimize your applications with SilverHawk.
                    </p>
                </div>

                {/* Sections */ }
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { sections.map( ( section, idx ) => (
                        <div
                            key={ idx }
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                { section.icon }
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    { section.title }
                                </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                { section.description }
                            </p>
                            <ul className="space-y-2">
                                { section.links.map( ( link, lIdx ) => (
                                    <li key={ lIdx }>
                                        <Link
                                            href={ link.href }
                                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                                        >
                                            → { link.label }
                                        </Link>
                                    </li>
                                ) ) }
                            </ul>
                        </div>
                    ) ) }
                </div>

                {/* Footer */ }
                <div className="text-center mt-20">
                    <p className="text-gray-500 dark:text-gray-400">
                        Still stuck?{ " " }
                        <Link
                            href="/docs/support/contact"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Contact our support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
