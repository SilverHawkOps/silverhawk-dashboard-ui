"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Activity, AlertCircle, BarChart3, Bell, ChevronDown, Cpu, FileText, Plug, Server, Settings, ShieldCheck, User, Users, Zap, } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";

import { motion } from "framer-motion";
import { analytics } from "@/lib/analytics";
import { Modal } from "@/components/ui/modal";
import ComparisonTable from "./ComparisonTable";

export default function HomePage() {
    const features = [
        {
            title: "Real-Time Metrics",
            desc: "Track CPU, memory, and request throughput in real-time to spot issues before they escalate.",
            icon: <Cpu className="w-8 h-8" />,
        },
        {
            title: "Service Monitoring",
            desc: "Monitor all your applications and services in one place, with detailed health metrics.",
            icon: <Server className="w-8 h-8" />,
        },
        {
            title: "Alerts & Notifications",
            desc: "Get instant alerts via Slack, email, or webhooks whenever thresholds are breached.",
            icon: <Bell className="w-8 h-8" />,
        },
        {
            title: "Transaction Tracing",
            desc: "Understand slow requests and bottlenecks with detailed traces across your stack.",
            icon: <Activity className="w-8 h-8" />,
        },
        {
            title: "Error Tracking",
            desc: "Catch exceptions with full stack traces and context to debug faster.",
            icon: <AlertCircle className="w-8 h-8" />,
        },
        {
            title: "Logs Management",
            desc: "Centralized log collection with retention policies for easy analysis.",
            icon: <FileText className="w-8 h-8" />,
        },
        {
            title: "Deployment Tracking",
            desc: "See how new releases impact performance and quickly identify regressions.",
            icon: <Zap className="w-8 h-8" />,
        },
        {
            title: "User Monitoring",
            desc: "Track real user interactions and performance to improve UX and reliability.",
            icon: <Users className="w-8 h-8" />,
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

    // const plans = [
    //     {
    //         name: "Starter",
    //         price: "$0",
    //         features: [
    //             { name: "Alerts", included: true, value: "Up to 5 / month" },
    //             { name: "Monitored Services", included: true, value: "1 service" },
    //             { name: "Integrations", included: true, value: "Basic (Slack/Webhook)" },
    //             { name: "Real-time Metrics", included: true, value: "Limited" },
    //             { name: "Error Tracking", included: true, value: "Basic" },
    //             { name: "Transaction Tracing", included: false, value: "-" },
    //             { name: "Logs", included: false, value: "-" },
    //             { name: "Deployment Tracking", included: false, value: "-" },
    //             { name: "User Monitoring", included: false, value: "-" },
    //             { name: "Support", included: true, value: "Community" },
    //         ],
    //         recommended: false,
    //         cta: "Start Free Trial",
    //     },
    //     {
    //         name: "Pro",
    //         price: "$49",
    //         features: [
    //             { name: "Alerts", included: true, value: "Up to 50 / month" },
    //             { name: "Monitored Services", included: true, value: "5 services" },
    //             { name: "Integrations", included: true, value: "All major (Slack, PagerDuty, Webhook)" },
    //             { name: "Real-time Metrics", included: true, value: "Full" },
    //             { name: "Error Tracking", included: true, value: "Detailed" },
    //             { name: "Transaction Tracing", included: true, value: "Full traces" },
    //             { name: "Logs", included: true, value: "7-day retention" },
    //             { name: "Deployment Tracking", included: true, value: "Yes" },
    //             { name: "User Monitoring", included: true, value: "Basic RUM" },
    //             { name: "Support", included: true, value: "Email / Chat" },
    //         ],
    //         recommended: true,
    //         cta: "Start Free Trial",
    //     },
    //     {
    //         name: "Enterprise",
    //         price: "Custom",
    //         features: [
    //             { name: "Alerts", included: true, value: "Unlimited" },
    //             { name: "Monitored Services", included: true, value: "Unlimited" },
    //             { name: "Integrations", included: true, value: "All + Custom" },
    //             { name: "Real-time Metrics", included: true, value: "Full + SLA" },
    //             { name: "Error Tracking", included: true, value: "Advanced + Notifications" },
    //             { name: "Transaction Tracing", included: true, value: "Full + Retention" },
    //             { name: "Logs", included: true, value: "Custom retention" },
    //             { name: "Deployment Tracking", included: true, value: "Yes, Advanced" },
    //             { name: "User Monitoring", included: true, value: "Advanced RUM" },
    //             { name: "Support", included: true, value: "Priority / Dedicated" },
    //         ],
    //         recommended: false,
    //         cta: "Contact Sales",
    //     },
    // ];

    const steps = [
        {
            title: "Connect Your Services",
            desc: "Add servers, apps, or APIs in minutes.",
            icon: <Plug className="w-10 h-10" />,
        },
        {
            title: "Configure Monitors & Alerts",
            desc: "Set thresholds, choose notification channels.",
            icon: <Settings className="w-10 h-10" />,
        },
        {
            title: "Analyze & Optimize",
            desc: "Get actionable insights and improve performance.",
            icon: <Activity className="w-10 h-10" />,
        },
    ];

    const testimonials = [
        {
            name: "Alice Johnson",
            role: "DevOps Engineer at TechCorp",
            quote:
                "SilverHawk has transformed our monitoring workflow. Real-time alerts and detailed metrics save us hours every week.",
            avatar: null, // Can be replaced with image URL
        },
        {
            name: "Michael Lee",
            role: "Backend Developer at Cloudify",
            quote:
                "With SilverHawk, we can catch performance issues before users notice. The dashboards are intuitive and actionable.",
            avatar: null,
        },
        {
            name: "Sofia Ramirez",
            role: "CTO at Nexa Systems",
            quote:
                "SilverHawk’s transaction tracing and alerting system is a game-changer for our deployment cycles.",
            avatar: null,
        },
    ];

    const [isDemoModalOpen, setDemoModalOpen] = useState(false);

    return (
        <>
            <main className="bg-[#0f1620] min-h-screen text-white font-sans">
                <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#0f1620]/70 border-b border-white/10">
                    <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        <div className="flex items-center gap-2">
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-full font-bold">SH</span>
                            <span className="text-lg font-semibold tracking-wide text-white">SilverHawk</span>
                        </div>
                        <nav className="hidden md:flex gap-8 text-sm font-medium">
                            <Link href="#features" className="hover:text-blue-400 transition">Features</Link>
                            <Link href="#pricing" className="hover:text-blue-400 transition">Pricing</Link>
                            <Link href="/docs" className="hover:text-blue-400 transition">Docs</Link>
                            <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Link href="/signin" className="text-sm hover:text-blue-400">Sign In</Link>
                            <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-md font-medium hover:scale-105 transition">
                                Get Started
                            </Link>
                            <button onClick={() => setDemoModalOpen(true)} className="bg-transparent border border-white text-white px-5 py-2 rounded-md font-medium hover:scale-105 transition">
                                See Demo
                            </button>
                        </div>
                    </div>
                </header>

                <HeroSection />
            </main>


            <section className="py-20 bg-gray-50 text-center relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <p className="text-blue-600 font-semibold mb-2">Features</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Main Features of SilverHawk
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        SilverHawk empowers developers and DevOps teams to monitor, optimize, and scale their
                        systems effortlessly with real-time visibility, intelligent analytics, and actionable alerts.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        { features.map( ( feature, index ) => (
                            <motion.div key={ index }
                                whileHover={ { scale: 1.05 } }
                                className="relative bg-gray-200 items-center border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition"
                            >
                                <div className="bg-gradient-to-tr from-blue-500 to-cyan-400 text-white p-3 rounded-xl w-fit mb-4">
                                    { feature.icon }
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-2">{ feature.title }</h3>
                                <p className="text-black text-sm">
                                    { feature.desc }
                                </p>
                            </motion.div>
                        ) ) }
                    </div>
                </div>

                {/* Optional abstract shapes */ }
                <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
            </section>

            <ComparisonTable />

            <section className="py-20 bg-gray-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <p className="text-blue-400 font-semibold mb-2">Workflow</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                        How SilverHawk Works
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
                        Follow three simple steps to monitor, analyze, and optimize your applications.
                    </p>

                    {/* Horizontal timeline for desktop, stacked for mobile */ }
                    <div className="flex flex-col md:flex-row justify-center items-start gap-12 relative">
                        { steps.map( ( step, index ) => (
                            <div
                                key={ index }
                                className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-blue-500/40 transition"
                            >
                                <div className="bg-blue-600 text-white rounded-2xl p-4 mb-6 inline-block">
                                    { step.icon }
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-white">{ step.title }</h3>
                                <p className="text-gray-300">{ step.desc }</p>
                            </div>
                        ) ) }
                    </div>

                    {/* Decorative shapes */ }
                    <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-600 opacity-20 rounded-full mix-blend-multiply animate-pulse" ></div>
                    <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-600 opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
                </div>
            </section>

            <section className="bg-gray-900 text-white py-20 text-center relative overflow-hidden">
                <div className="relative container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Start Monitoring Your Apps with SilverHawk Today 🚀
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Gain real-time visibility into your systems, reduce downtime, and
                        optimize performance — all in one powerful APM platform.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button onClick={ () => analytics.track( "home_start_free_trial_btn", { type: "button", environment: "production" } ) } className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md shadow-md transition">
                            Start Free Trial
                        </button>
                        <button onClick={() => analytics.track("home_schedule_a_demo_btn", { type: "button", environment: "production" })} className="border border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-3 rounded-md transition">
                            See Demo
                        </button>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-b from-white to-slate-50 py-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Side - Circles */ }
                    <div className="flex md:flex-row items-center justify-center gap-10 mx-auto">
                        <div className="flex flex-col items-center space-y-8">
                            <div className="relative w-44 h-44 flex items-center justify-center rounded-full border-3 border-emerald-400 bg-emerald-50 shadow-md">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-emerald-600">99.99%</p>
                                    <p className="text-sm text-gray-700">Platform Uptime</p>
                                </div>
                            </div>

                            <div className="relative w-44 h-44 flex items-center justify-center rounded-full border-2 border-blue-400 bg-blue-50 shadow-md">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-blue-600">Zero</p>
                                    <p className="text-sm text-gray-700">Hidden Charges</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-44 h-44 flex items-center justify-center rounded-full border-2 border-violet-400 bg-violet-50 shadow-md">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-violet-600">Up to 70%</p>
                                <p className="text-sm text-gray-700">Lower Cost than Legacy APMs</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - SaaS Content */ }
                    <div className="max-w-xl text-center md:text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
                            Observability that scales <span className="text-violet-600">with your business</span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed">
                            <strong>SilverHawk APM</strong> is a modern, cloud-native performance monitoring
                            platform designed for fast-growing teams. Get instant visibility into application
                            health, API latency, and infrastructure metrics — all in one intuitive dashboard.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Built to handle millions of traces per second with zero egress fees, SilverHawk ensures
                            your systems stay reliable, predictable, and affordable — from startup scale to enterprise workloads.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <div className="flex items-center gap-2 text-gray-700">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                <span>Enterprise-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <BarChart3 className="w-5 h-5 text-violet-500" />
                                <span>Unified Metrics, Traces & Logs</span>
                            </div>
                            {/* <div className="flex items-center gap-2 text-gray-700">
                                <Gauge className="w-5 h-5 text-blue-500" />
                                <span>AI-based Anomaly Detection</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Zap className="w-5 h-5 text-amber-500" />
                                <span>Zero Downtime Deployments</span>
                            </div> */}
                        </div>

                        <p className="font-semibold text-slate-700 pt-2">
                            Faster insights. Lower cost. Built for modern engineering teams.
                        </p>
                    </div>
                </div>
            </section>

            {/* <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-blue-600 font-semibold mb-2">Pricing</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Pick the Perfect Plan for Your Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Transparent pricing with everything you need to monitor and optimize your applications.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`flex-1 p-8 rounded-2xl border transition-transform duration-300 ${plan.recommended
                                    ? "bg-white shadow-2xl border-blue-500 md:scale-105 relative"
                                    : "bg-white border-gray-200"
                                    }`}
                            >
                                {plan.recommended && (
                                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                        Most Popular
                                    </span>
                                )}

                                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                                <p className="text-4xl font-bold mb-6">{plan.price}/mo</p>

                                <ul className="mb-6 space-y-3 text-left">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {feature.included ? (
                                                <CheckIcon className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <CrossIcon className="w-5 h-5 text-red-400" />
                                            )}
                                            <span className="text-gray-700">
                                                {feature.name}: <strong>{feature.value}</strong>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full font-semibold py-3 px-6 rounded-lg transition ${plan.recommended
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-blue-400 font-semibold mb-2">Trusted By</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-16">
                        See why developers and DevOps teams rely on SilverHawk to monitor and optimize their systems.
                    </p>

                    {/* Testimonials Carousel / Grid */ }
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        { testimonials.map( ( t, index ) => (
                            <div
                                key={ index }
                                className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                            >
                                <div className="flex items-center mb-4">
                                    { t.avatar ? (
                                        <Image
                                            src={ t.avatar }
                                            alt={ t.name }
                                            width={ 12 } height={ 12 }
                                            className="w-12 h-12 rounded-full mr-4"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                                            <User className="w-6 h-6 text-white" />
                                        </div>
                                    ) }
                                    <div className="text-left">
                                        <p className="font-bold">{ t.name }</p>
                                        <p className="text-gray-400 text-sm">{ `"` }{ t.role }{ `"` }</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">{ `"` }{ t.quote }{ `"` }</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative shapes */ }
                <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-600 opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-600 opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
            </section>

            <section className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        { faqs.map( ( faq, index ) => (
                            <details
                                key={ index }
                                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 transition hover:shadow-md"
                            >
                                <summary className="flex justify-between items-center cursor-pointer text-lg font-medium">
                                    { faq.question }
                                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                                </summary>
                                <p className="mt-3 text-gray-600 leading-relaxed">{ faq.answer }</p>
                            </details>
                        ) ) }
                    </div>
                </div>

                {/* Optional abstract shapes */ }
                <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
            </section>

            <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
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

            <Modal isOpen={isDemoModalOpen} onClose={() => setDemoModalOpen(false)}>
                <div className="w-full bg-gray-800 flex items-center justify-center rounded-lg">
                    <video
                        src="https://res.cloudinary.com/deljpdbts/video/upload/v1761587642/silverhawk-apm-demo-setup_z0v9ko.mp4"
                        controls
                        className="w-full h-full object-contain rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Modal>
        </>
    );
}
