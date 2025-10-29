import CodeBlock from "@/components/code-block/CodeBlock";
import React from "react";

export default function GettingStartedPage() {
    return (
        <div className="w-full mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
                What is Silverhawk?
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Silverhawk APM</strong> is a modern observability platform
                designed to give engineers a unified view of their infrastructure
                health, system performance, and soon—application behavior. It enables
                DevOps and Site Reliability Engineering (SRE) teams to monitor,
                visualize, and react to performance issues in real-time without
                requiring complex configuration or manual setup.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                Built with scalability and simplicity in mind, Silverhawk begins at the
                infrastructure level—collecting and analyzing system metrics—and is
                evolving toward complete full-stack observability. The platform will
                soon support distributed tracing, log aggregation, and uptime
                monitoring across environments to provide a single pane of glass for
                operational insights.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
                The Silverhawk Infra Agent
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                At the heart of Silverhawk lies the <strong>Silverhawk Infra Agent</strong>, a
                lightweight Node.js-based daemon that runs directly on your servers. The
                agent continuously collects performance data such as CPU usage, memory
                consumption, disk activity, and network throughput. This data is then
                securely transmitted to the Silverhawk Cloud, where it is processed,
                analyzed, and made available in the real-time monitoring dashboard.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Platform Highlights</h2>

            <table className="w-full text-left border-collapse border border-gray-200 mb-8">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 font-semibold">
                            Category
                        </th>
                        <th className="border border-gray-200 p-3 font-semibold">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">
                            Infrastructure Monitoring
                        </td>
                        <td className="border border-gray-200 p-3">
                            Collect and visualize real-time metrics such as CPU utilization,
                            memory usage, disk I/O, and network traffic. The Infra Agent
                            ensures continuous visibility into host-level performance,
                            allowing teams to detect and resolve system bottlenecks quickly.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">
                            Application Performance (Upcoming)
                        </td>
                        <td className="border border-gray-200 p-3">
                            Future updates will include in-depth application monitoring,
                            enabling analysis of API latency, throughput, error rates, and
                            service dependencies. This will help engineers correlate system
                            behavior with application performance.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">Log Monitoring</td>
                        <td className="border border-gray-200 p-3">
                            Silverhawk will soon support integrated log collection and
                            correlation, allowing you to connect log events with performance
                            anomalies for better root cause analysis.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">
                            Alerting and Notifications
                        </td>
                        <td className="border border-gray-200 p-3">
                            Define thresholds for resource usage, set up intelligent alerts,
                            and receive notifications through email, Slack, or Discord when
                            anomalies are detected or systems deviate from normal performance.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">
                            Infrastructure Health View
                        </td>
                        <td className="border border-gray-200 p-3">
                            The dashboard provides a unified view of your infrastructure’s
                            health, using intuitive color indicators and utilization charts to
                            help you assess the stability and efficiency of your systems.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3 font-semibold">Uptime Monitoring</td>
                        <td className="border border-gray-200 p-3">
                            Track the availability of critical APIs, endpoints, and services.
                            Silverhawk’s uptime module helps ensure reliability and reduce
                            downtime through automated checks and timely alerts.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
                How Silverhawk Works
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                Silverhawk follows a three-layer architecture that connects server-side
                agents to the centralized cloud dashboard through secure data channels.
                The process begins with metric collection at the host level, followed by
                data transmission to the Silverhawk Cloud, and finally, visualization on
                the Silverhawk Dashboard.
            </p>

            <div className="border border-gray-200 bg-gray-50 p-6 rounded-lg mb-8">
                <p className="font-mono text-sm text-gray-800 whitespace-pre">
                    {/* TODO: add workflow image */ }
                </p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Components Overview</h3>

            <table className="w-full text-left border-collapse border border-gray-200 mb-8">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="border border-gray-200 p-3 font-semibold">
                            Component
                        </th>
                        <th className="border border-gray-200 p-3 font-semibold">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-200 p-3">Infra Agent</td>
                        <td className="border border-gray-200 p-3">
                            Installed globally via <code>npm i -g silverhawk-infra</code>, the
                            Infra Agent runs locally on servers and collects metrics every 15
                            seconds, including CPU, memory, disk, and network usage.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3">API Gateway</td>
                        <td className="border border-gray-200 p-3">
                            The API Gateway receives encrypted data from agents, validates
                            payloads, and optimizes data ingestion with caching mechanisms to
                            ensure efficient, high-throughput communication between hosts and
                            the cloud.
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-200 p-3">Dashboard</td>
                        <td className="border border-gray-200 p-3">
                            The Silverhawk Dashboard provides real-time visualization of
                            collected metrics, displaying system health, performance trends,
                            and infrastructure status. It also supports alert creation,
                            uptime tracking, and comparative analytics.
                        </td>
                    </tr>
                </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Security by Design</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                Security and reliability are foundational principles of the Silverhawk
                platform. All metric transmissions between the Infra Agent and Cloud are
                encrypted using HTTPS with AES-level data encryption. The agent includes
                automatic retry mechanisms, configurable heartbeat intervals, and
                built-in safeguards against data loss. Designed for minimal impact, the
                agent typically consumes less than 1% CPU and under 50MB of RAM,
                ensuring it remains lightweight and production-safe.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">
                Why Choose Silverhawk?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                Silverhawk emphasizes a developer-first experience by removing the
                friction of traditional monitoring setups. There are no complex
                configuration files to edit or agents to compile — installation and
                connection to the dashboard take only a few seconds. Silverhawk runs
                seamlessly across Linux, macOS, and Windows environments, offering
                instant visibility and reliable data streams from the moment it’s
                installed.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                With its roadmap expanding toward Application Performance Monitoring,
                logging, tracing, and uptime assurance, Silverhawk positions itself as a
                complete, scalable observability solution for modern DevOps teams.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Example Installation</h2>

            <CodeBlock code={ `npm i -g silverhawk-infra\n\nsilverhawk-infra start --api-key <YOUR_API_KEY>` } />

            <p className="text-gray-700 leading-relaxed">
                Once the agent connects successfully, your infrastructure will appear in
                the Silverhawk Dashboard with a status of <strong>“Acknowledged”</strong>.
                As metrics begin to stream in, the status updates to{ " " }
                <strong>“Online”</strong>, indicating active monitoring and data flow.
            </p>
        </div>
    );
}
