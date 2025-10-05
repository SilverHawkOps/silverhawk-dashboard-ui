"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Activity, AlertCircle, Bell, CheckIcon, ChevronDown, Cpu, CrossIcon, FileText, Plug, Server, Settings, User, Users, Zap, } from "lucide-react";

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

    const plans = [
        {
            name: "Starter",
            price: "$0",
            features: [
                { name: "Alerts", included: true, value: "Up to 5 / month" },
                { name: "Monitored Services", included: true, value: "1 service" },
                { name: "Integrations", included: true, value: "Basic (Slack/Webhook)" },
                { name: "Real-time Metrics", included: true, value: "Limited" },
                { name: "Error Tracking", included: true, value: "Basic" },
                { name: "Transaction Tracing", included: false, value: "-" },
                { name: "Logs", included: false, value: "-" },
                { name: "Deployment Tracking", included: false, value: "-" },
                { name: "User Monitoring", included: false, value: "-" },
                { name: "Support", included: true, value: "Community" },
            ],
            recommended: false,
            cta: "Start Free Trial",
        },
        {
            name: "Pro",
            price: "$49",
            features: [
                { name: "Alerts", included: true, value: "Up to 50 / month" },
                { name: "Monitored Services", included: true, value: "5 services" },
                { name: "Integrations", included: true, value: "All major (Slack, PagerDuty, Webhook)" },
                { name: "Real-time Metrics", included: true, value: "Full" },
                { name: "Error Tracking", included: true, value: "Detailed" },
                { name: "Transaction Tracing", included: true, value: "Full traces" },
                { name: "Logs", included: true, value: "7-day retention" },
                { name: "Deployment Tracking", included: true, value: "Yes" },
                { name: "User Monitoring", included: true, value: "Basic RUM" },
                { name: "Support", included: true, value: "Email / Chat" },
            ],
            recommended: true,
            cta: "Start Free Trial",
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                { name: "Alerts", included: true, value: "Unlimited" },
                { name: "Monitored Services", included: true, value: "Unlimited" },
                { name: "Integrations", included: true, value: "All + Custom" },
                { name: "Real-time Metrics", included: true, value: "Full + SLA" },
                { name: "Error Tracking", included: true, value: "Advanced + Notifications" },
                { name: "Transaction Tracing", included: true, value: "Full + Retention" },
                { name: "Logs", included: true, value: "Custom retention" },
                { name: "Deployment Tracking", included: true, value: "Yes, Advanced" },
                { name: "User Monitoring", included: true, value: "Advanced RUM" },
                { name: "Support", included: true, value: "Priority / Dedicated" },
            ],
            recommended: false,
            cta: "Contact Sales",
        },
    ];

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

    const companies = [
        "/logos/google.svg",
        "/logos/microsoft.svg",
        "/logos/aws.svg",
        "/logos/slack.svg",
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
                        <Link href={ '/signin' } className="text-sm hover:text-gray-200">Sign In</Link>
                        <Link href={ '/signup' } className="text-white bg-blue-600 hover:bg-gray-100 px-4 py-2 text-sm font-medium">
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
                            <div
                                key={ index }
                                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                            >
                                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-4 mb-6 flex items-center justify-center">
                                    { feature.icon }
                                </div>
                                <h3 className="font-bold text-lg mb-2">{ feature.title }</h3>
                                <p className="text-gray-600 text-sm mb-4 max-w-xs">{ feature.desc }</p>
                                <a
                                    href="#"
                                    className="text-blue-600 font-semibold text-sm hover:underline hover:text-blue-700 transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        ) ) }
                    </div>
                </div>

                {/* Optional abstract shapes */ }
                <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-200 opacity-10 rounded-full mix-blend-multiply animate-pulse"></div>
            </section>

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
                                className="flex-1 bg-gray-800 rounded-2xl p-8 shadow-md w-full hover:shadow-xl transition transform hover:-translate-y-2 relative"
                            >
                                {/* Step number circle */ }
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                                    { index + 1 }
                                </div>
                                {/* Icon */ }
                                <div className="bg-blue-600 text-white rounded-2xl p-4 mb-6 inline-block">
                                    { step.icon }
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-white">{ step.title }</h3>
                                <p className="text-gray-300">{ step.desc }</p>
                            </div>
                        ) ) }
                    </div>
                </div>

                {/* Decorative shapes */ }
                <div className="absolute top-0 -left-32 w-96 h-96 bg-blue-600 opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
                <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-600 opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
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
                        <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md shadow-md transition">
                            Start Free Trial
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-3 rounded-md transition">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-blue-600 font-semibold mb-2">Pricing</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Pick the Perfect Plan for Your Team
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Transparent pricing with everything you need to monitor and optimize your applications.
                    </p>

                    {/* Tiered Cards */ }
                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                        { plans.map( ( plan ) => (
                            <div
                                key={ plan.name }
                                className={ `flex-1 p-8 rounded-2xl border transition-transform duration-300 ${plan.recommended
                                    ? "bg-white shadow-2xl border-blue-500 md:scale-105 relative"
                                    : "bg-white border-gray-200"
                                    }` }
                            >
                                { plan.recommended && (
                                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                                        Most Popular
                                    </span>
                                ) }

                                <h3 className="text-xl font-semibold mb-4">{ plan.name }</h3>
                                <p className="text-4xl font-bold mb-6">{ plan.price }/mo</p>

                                <ul className="mb-6 space-y-3 text-left">
                                    { plan.features.map( ( feature, i ) => (
                                        <li key={ i } className="flex items-center gap-2">
                                            { feature.included ? (
                                                <CheckIcon className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <CrossIcon className="w-5 h-5 text-red-400" />
                                            ) }
                                            <span className="text-gray-700">
                                                { feature.name }: <strong>{ feature.value }</strong>
                                            </span>
                                        </li>
                                    ) ) }
                                </ul>

                                <button
                                    className={ `w-full font-semibold py-3 px-6 rounded-lg transition ${plan.recommended
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                        }` }
                                >
                                    { plan.cta }
                                </button>
                            </div>
                        ) ) }
                    </div>
                </div>
            </section>

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
                        ) ) }
                    </div>

                    {/* Optional Company Logos / Trust Signals */ }
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        { companies.map( ( logo, index ) => (
                            <Image
                                key={ index }
                                src={ logo }
                                alt={ `Company ${index + 1}` }
                                width={ 12 } height={ 12 }
                                className="h-12 filter brightness-150 opacity-70 hover:opacity-100 transition"
                            />
                        ) ) }
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
