"use client";

import React from "react";

const features = [
    {
        feature: "Setup & Onboarding",
        silverhawk: "One-click agent setup, auto-discovery of services.",
        others: "Complex setup requiring multiple agents and manual configs.",
    },
    {
        feature: "Target Audience",
        silverhawk: "Designed for startups and fast-growing SaaS teams.",
        others: "Built mainly for large enterprises with SRE teams.",
    },
    {
        feature: "Pricing",
        silverhawk: "Transparent, usage-based pricing — startup-friendly.",
        others: "Expensive, tiered pricing with hidden scaling costs.",
    },
    {
        feature: "Performance Insights",
        silverhawk: "Unified view of metrics, traces, and logs in one dashboard.",
        others: "Data scattered across modules; harder to correlate.",
    },
    {
        feature: "Alerting & Intelligence",
        silverhawk: "Adaptive alerts that learn system behavior — less noise.",
        others: "Static threshold-based alerts that create alert fatigue.",
    },
    {
        feature: "UX / Dashboard Design",
        silverhawk: "Minimal, modern, developer-centric design.",
        others: "Cluttered dashboards with too much data density.",
    },
    {
        feature: "Maintenance Overhead",
        silverhawk: "Lightweight; minimal ops effort required.",
        others: "High maintenance and configuration complexity.",
    },
    {
        feature: "Integration",
        silverhawk: "Plug-and-play with Node.js, Python, Go, etc.",
        others: "Manual setup or plugin installation required.",
    },
    {
        feature: "Customization",
        silverhawk: "Highly customizable alerts and dashboards.",
        others: "Limited flexibility and rigid layouts.",
    },
    {
        feature: "Support & Community",
        silverhawk: "Active community and early-adopter support.",
        others: "Generic enterprise support; slower iteration.",
    },
];

export default function ComparisonTable() {
    return (
        <section className="container  mx-auto py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className=" mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
                    SilverHawk vs Other Tools
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                    See how SilverHawk outperforms traditional APM tools in simplicity,
                    scalability, and startup-friendliness.
                </p>

                <div className="rounded-2xl shadow-sm border border-gray-200">
                    <table className="w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700">
                                    Feature
                                </th>
                                <th className="py-3 px-6 text-left font-semibold text-blue-600">
                                    SilverHawk
                                </th>
                                <th className="py-3 px-6 text-left font-semibold text-gray-700">
                                    Other Tools
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="py-4 px-6 font-medium text-gray-800 ">
                                        {row.feature}
                                    </td>
                                    <td className="py-4 px-6 text-gray-700 gap-2 ">
                                        <span>{row.silverhawk}</span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700 gap-2">
                                        <span>{row.others}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text-center mt-10">
                    <p className="text-lg text-gray-700">
                        🚀 <span className="font-semibold text-blue-600">SilverHawk</span>{" "}
                        gives startups clarity, speed, and cost-efficiency without the
                        enterprise baggage.
                    </p>
                </div>
            </div>
        </section>
    );
}
