import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Activity, AlertTriangle, BarChart3, ChevronDown, Gauge, } from "lucide-react";

export const metadata: Metadata = {
    title:
        "SilverHawk – Advanced Application Performance Monitoring",
    description: "Monitor, optimize, and scale your applications with SilverHawk. Gain real-time insights into system performance, track metrics, detect anomalies, and ensure smooth application operations with our robust APM solution.",
};

export default function Home() {
    const features = [
        {
            icon: <Gauge size={ 28 } />,
            title: "Real-Time Application Monitoring",
            desc: "Track your app’s performance metrics in real-time with instant visibility into CPU, memory, and request latency.",
        },
        {
            icon: <AlertTriangle size={ 28 } />,
            title: "Proactive Alerting & Anomaly Detection",
            desc: "Stay ahead of incidents with intelligent alerts that notify you before performance issues impact your users.",
        },
        {
            icon: <BarChart3 size={ 28 } />,
            title: "Deep Performance Insights",
            desc: "Visualize API calls, trace bottlenecks, and understand system behavior through detailed analytics dashboards.",
        },
        {
            icon: <Activity size={ 28 } />,
            title: "Infrastructure & Service Health",
            desc: "Monitor server uptime, background workers, and external services — all in a unified APM dashboard.",
        },
    ];

    const faqs = [
        {
            question: "What is SilverHawk APM?",
            answer:
                "SilverHawk is an Application Performance Monitoring (APM) tool that provides real-time insights into your application's performance, uptime, and system metrics. It helps developers and DevOps teams detect issues early and optimize system efficiency.",
        },
        {
            question: "How does SilverHawk collect performance data?",
            answer:
                "SilverHawk uses lightweight agents that run in the background to collect system, API, and network metrics. The agents securely send data to the SilverHawk server, where it’s analyzed and visualized on your dashboard.",
        },
        {
            question: "Is the SilverHawk agent resource-intensive?",
            answer:
                "Not at all. The SilverHawk agent is designed to be lightweight, consuming minimal CPU and memory while running in the background. It operates in daemon mode and never interrupts your main application processes.",
        },
        {
            question: "Can I monitor multiple services with one account?",
            answer:
                "Yes. You can monitor multiple servers, microservices, and APIs under one SilverHawk account. Each service can be configured with a unique API key for tracking and reporting.",
        },
        {
            question: "Does SilverHawk support alerting and notifications?",
            answer:
                "Yes. SilverHawk provides customizable alerts via email, Slack, and webhook integrations. You can define thresholds for CPU, memory, uptime, or response times to get instant notifications when something goes wrong.",
        },
        {
            question: "Is my data secure with SilverHawk?",
            answer:
                "Absolutely. All data transmitted between agents and the SilverHawk servers is encrypted using TLS, and sensitive credentials are never stored in plain text.",
        },
        {
            question: "Can I self-host SilverHawk?",
            answer:
                "Yes. SilverHawk offers a self-hosted version for enterprises that need complete control over their infrastructure and data privacy.",
        },
        {
            question: "How do I get started?",
            answer:
                "You can get started by signing up on the SilverHawk dashboard, installing the agent using npm or Docker, and connecting it with your service name and API key. The setup takes less than 5 minutes.",
        },
    ];
    return (
        <>
            <main className="bg-[#181c20] min-h-screen text-white font-sans">
                {/* Navbar */ }
                <header className="container mx-auto flex justify-between items-center py-6 px-4 bg-[#181c20]">
                    <div className="flex items-center gap-2">
                        <span className="bg-white p-2 rounded-full text-blue-600 font-bold">SH</span>
                        <span className="text-xl font-bold">SilverHawk</span>
                    </div>

                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        <a href="#" className="hover:text-gray-200">Home</a>
                        <a href="#" className="hover:text-gray-200">Features</a>
                        <a href="#" className="hover:text-gray-200">Pricing</a>
                        <a href="#" className="hover:text-gray-200">Docs</a>
                        <a href="#" className="hover:text-gray-200">Integrations</a>
                        <a href="#" className="hover:text-gray-200">Blog</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href={'/signin'} className="text-sm hover:text-gray-200">Sign In</Link>
                        <Link href={'/signup'} className="text-white bg-blue-600 hover:bg-gray-100 px-4 py-2 text-sm font-medium">
                            Sign Up
                        </Link>
                    </div>
                </header>

                {/* Hero Section */ }
                <section className="text-center py-24 px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Monitor, Optimize, and Scale <br />
                        Your Applications with Confidence
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-100 mb-8">
                        SilverHawk is a modern APM tool that gives you real-time visibility into
                        your infrastructure, APIs, and services — helping you detect issues before
                        they impact users.
                    </p>

                    <div className="flex justify-center gap-4 mb-12">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md">
                            Start Free Trial
                        </button>
                        <Link href={ '/dashboard' } className="bg-blue-700 hover:bg-blue-800 font-medium px-6 py-3 rounded-md">
                            🚀 View Live Demo
                        </Link>
                    </div>

                    <div className="mt-16">
                        <Image
                            src="/images/banner.png"
                            alt="SilverHawk Dashboard Preview"
                            width={ 900 }
                            height={ 500 }
                            className="mx-auto rounded-2xl shadow-lg"
                        />
                    </div>
                </section>
            </main>

            <section className="py-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <p className="text-blue-600 font-semibold mb-2">Features</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Main Features of SilverHawk
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        SilverHawk helps developers and DevOps teams monitor, optimize, and scale
                        their systems effortlessly with real-time visibility and intelligent analytics.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        { features.map( ( feature, index ) => (
                            <div key={ index } className="flex flex-col items-center">
                                <div className="bg-blue-600 text-white rounded-2xl p-4 mb-6 shadow-md">
                                    { feature.icon }
                                </div>
                                <h3 className="font-bold text-lg mb-2">{ feature.title }</h3>
                                <p className="text-gray-600 text-sm mb-4 max-w-xs">{ feature.desc }</p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold text-sm hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>

            <section className="bg-[#181c20] text-white py-20 text-center relative overflow-hidden">
                <div className="relative container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Start Monitoring Your Apps with SilverHawk Today 🚀
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Gain real-time visibility into your systems, reduce downtime, and
                        optimize performance — all in one powerful APM platform.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md shadow-md transition">
                            Start Free Trial
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-3 rounded-md transition">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        { faqs.map( ( faq, index ) => (
                            <details
                                key={ index }
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition hover:shadow-md"
                            >
                                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800">
                                    { faq.question }
                                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" />
                                </summary>
                                <p className="mt-3 text-gray-600 leading-relaxed">{ faq.answer }</p>
                            </details>
                        ) ) }
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand Info */ }
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">SilverHawk</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Monitor, optimize, and scale your applications with ease. SilverHawk gives you real-time visibility and actionable insights to keep your systems running at peak performance.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="hover:text-white transition">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-white transition">
                                Linkedin
                            </a>
                            <a href="#" className="hover:text-white transition">
                                Github
                            </a>
                            <a href="#" className="hover:text-white transition">
                                Facebook
                            </a>
                        </div>
                    </div>

                    {/* Product */ }
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Changelog</a></li>
                        </ul>
                    </div>

                    {/* Resources */ }
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                            <li><a href="#" className="hover:text-white transition">Community</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Company */ }
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition">Legal</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Line */ }
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                    <p>
                        © { new Date().getFullYear() } <span className="text-white font-semibold">SilverHawk</span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
