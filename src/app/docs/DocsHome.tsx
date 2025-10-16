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
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Get Started in Four Easy Steps
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-12">
                    Follow these simple steps to set up SilverHawk and start monitoring your applications quickly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-100">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const DocsHome = () => {
    const tutorials = [
        { title: "Quick Start Guide", href: "/docs/tutorials/quick-start" },
        { title: "Monitoring Node.js Apps", href: "/docs/tutorials/nodejs" },
        { title: "Setting Up Alerts", href: "/docs/tutorials/alerts" },
        { title: "Custom Dashboards", href: "/docs/tutorials/dashboards" },
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
                        Welcome to SilverHawk Documentation
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-100 mb-8">
                        Explore guides, tutorials, and API references to help you build, monitor, and optimize your applications with SilverHawk.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="/docs/getting-started/intro"
                            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition"
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

            {/* Get Started Section */}
            <GetStarted />

            {/* Tutorials Section */}
            <section className="py-20 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Tutorials
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-12">
                        Follow these step-by-step guides to get the most out of SilverHawk.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {tutorials.map((tutorial) => (
                            <a
                                key={tutorial.title}
                                href={tutorial.href}
                                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 block text-left"
                            >
                                <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                    {tutorial.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-200">
                                    Click to learn more
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DocsHome;
