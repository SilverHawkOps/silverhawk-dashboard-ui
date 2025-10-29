import { ArrowRight } from 'lucide-react';
import React from 'react';

const GetStarted = () => {
    const steps = [
        {
            title: "1. Sign Up",
            description: "Create your SilverHawk account and verify your email to get started.",
        },
        {
            title: "2. Install Agent",
            description: "Install the SilverHawk agent in your application or infrastructure to start monitoring.",
        },
        {
            title: "3. Configure Monitoring",
            description: "Set up your application, infrastructure, and alerts according to your needs.",
        },
        {
            title: "4. Analyze & Optimize",
            description: "Explore dashboards, metrics, and traces to optimize performance and reliability.",
        },
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Get Started in Four Easy Steps
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12">
                    Follow these simple steps to set up SilverHawk and start monitoring your applications quickly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    { steps.map( ( step ) => (
                        <div
                            key={ step.title }
                            className="bg-gradient-to-r bg-transparent text-black dark:text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-2">{ step.title }</h3>
                            <p className="text-black dark:text-gray-100">{ step.description }</p>
                        </div>
                    ) ) }
                </div>
            </div>
        </section>
    );
}

const DocsHome = () => {
    const tutorials = [
        { title: "Quick Start Guide", href: "/docs/tutorials/quick-start" },
        { title: "Infrastructure Setup & Metrics Collection", href: "/docs/tutorials/infrastructure-setup" },
        { title: "Setting Up Alerts", href: "/docs/tutorials/alerts" },
        { title: "Custom Dashboards", href: "/docs/tutorials/dashboards" },
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Hero Section */ }
            <section className="bg-gradient-to-r bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
                        Welcome to SilverHawk Docs!
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-100 mb-8">
                        Explore guides, tutorials, and API references to help you build, monitor, and optimize your applications with SilverHawk.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/docs/getting-started"
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
                        >
                            Get Started
                        </a>
                        <a
                            href="/docs/tutorials"
                            className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition"
                        >
                            Tutorials
                        </a>
                    </div>
                </div>
            </section>

            {/* Get Started Section */ }
            <GetStarted />

            {/* Tutorials Section */ }
            <section className="py-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
                    {/* Header */ }
                    <h2 className="text-4xl font-bold text-black bg-clip-text mb-4">
                        Tutorials
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-16 text-lg">
                        Step-by-step guides to help you master SilverHawk.
                    </p>

                    {/* Tutorials Grid */ }
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        { tutorials.map( ( tutorial ) => (
                            <a
                                key={ tutorial.title }
                                href={ tutorial.href }
                                className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                            >

                                {/* Content */ }
                                <div className="flex flex-col items-start space-y-3">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition">
                                        { tutorial.title }
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Learn how to set up and optimize your SilverHawk environment.
                                    </p>
                                    <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium mt-3 group-hover:translate-x-1 transition">
                                        Read Guide <ArrowRight size={ 16 } className="ml-1" />
                                    </span>
                                </div>
                            </a>
                        ) ) }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DocsHome;
