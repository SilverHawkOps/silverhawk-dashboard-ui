
type SubItem = {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean;
  featureKey?: string;
  description: string;
};

type NavItem = {
  name: string;
  path?: string;
  description: string; // ✅ made optional so items with only subItems are valid
  subItems?: SubItem[];
};

export const navItems: NavItem[] = [
  {
    name: "Getting Started",
    path: "/docs",
    description:
      "Learn what Silverhawk APM is, its purpose, core features, and how to set it up quickly. Covers installation, dashboard overview, and account onboarding.",
  },
  {
    name: "Infrastructure Monitoring",
    description:
      "Monitor and manage infrastructure health across servers and hosts. Includes setup, agent installation, metrics, and troubleshooting.",
    subItems: [
      {
        name: "Setup Infrastructure",
        path: "/docs/tutorials/infrastructure-setup",
        description:
          "Guide to connecting your servers or cloud instances to Silverhawk. Learn how to create infrastructure entities, link agents, and start collecting metrics from hosts.",
      },
      {
        name: "Agent Installation",
        path: "/docs/tutorials/infra/agent-installation",
        description:
          "Install and configure the Silverhawk Infra Agent using npm. Covers authentication, environment setup, supported OS, and common installation issues.",
      },
      {
        name: "Metrics Overview",
        path: "/docs/infrastructure/metrics",
        description:
          "Understand collected metrics such as CPU usage, memory consumption, disk IO, and network performance. Explains metric intervals and visualization on the dashboard.",
      },
      {
        name: "Troubleshooting",
        path: "/docs/infrastructure/troubleshooting",
        description:
          "Fix issues with agent connectivity, API keys, or missing metrics. Learn how to restart agents, verify logs, and resolve network or permission errors.",
      },
    ],
  },
  {
    name: "Synthetic Monitoring",

    description:
      "Monitor application uptime, response time, and SSL validity using synthetic checks. Simulate user journeys and analyze performance trends.",
    subItems: [
      {
        name: "Availability",
        path: "/docs/synthetic-monitoring/availability",
        description:
          "Monitor the uptime and availability of your web services, endpoints, and APIs. Set response time thresholds and check failure conditions.",
      },
      {
        name: "SSL Certificate Monitoring",
        path: "/docs/synthetic-monitoring/ssl",
        description:
          "Automatically track SSL expiry dates and certificate health. Receive alerts before certificates expire or become invalid.",
      },
      {
        name: "Page Load Performance",
        path: "/docs/tutorials/synthetic-monitoring/page-load-performance",
        description:
          "Measure frontend page speed and rendering performance. Analyze time to first byte (TTFB), total load time, and core web vitals for your web apps.",
      },
      {
        name: "Endpoint Monitoring",
        path: "/docs/synthetic-monitoring/endpoint",
        description:
          "Continuously test API or HTTP endpoints for uptime, latency, and error responses. Learn how to add, configure, and view synthetic checks.",
      },
    ],
  },
  {
    name: "Alerts & Incidents",

    description:
      "Create intelligent alerts and manage performance incidents. Learn best practices for threshold configuration and incident workflows.",
    subItems: [
      {
        name: "Create Alerts",
        path: "/docs/alerts/create",
        description:
          "Learn to set up alerts for CPU, memory, and uptime thresholds. Configure alert channels such as email, Slack, or Discord to stay informed in real-time.",
      },
      {
        name: "Incident Management",
        path: "/docs/alerts/incidents",
        description:
          "Manage performance incidents, acknowledge alerts, and track resolution history. Understand incident lifecycle and recovery patterns.",
      },
      {
        name: "Best Practices",
        path: "/docs/alerts/best-practices",
        description:
          "Recommended alert configurations and thresholds. Avoid alert fatigue, optimize notification frequency, and maintain effective monitoring strategies.",
      },
    ],
  },
  {
    name: "Integrations",

    description:
      "Integrate Silverhawk with popular platforms and tools like Docker, AWS, Node.js, and CI/CD pipelines for full observability coverage.",
    subItems: [
      {
        name: "Docker Integration",
        path: "/docs/integrations/docker",
        description:
          "Monitor Docker containers and system stats directly. Learn how to deploy the Infra Agent inside Docker and view container-level metrics.",
      },
      {
        name: "AWS CloudWatch",
        path: "/docs/integrations/aws",
        description:
          "Integrate AWS CloudWatch with Silverhawk for unified visibility. Import metrics, logs, and alerts from your AWS environment.",
      },
      {
        name: "Node.js SDK",
        path: "/docs/integrations/nodejs",
        description:
          "Instrument Node.js applications to collect performance data. Includes setup, API usage, and tracking latency, throughput, and errors.",
      },
      {
        name: "CI/CD Pipeline",
        path: "/docs/integrations/cicd",
        description:
          "Integrate Silverhawk into your CI/CD workflow to track build performance and deployment metrics. Works with Jenkins, GitHub Actions, and more.",
      },
    ],
  },
  {
    name: "API Reference",

    path: "/docs/api",
    description:
      "Comprehensive API documentation for developers to access Silverhawk data programmatically. Covers authentication, endpoints, and response examples.",
  },
  {
    name: "Performance Metrics",

    path: "/docs/metrics",
    description:
      "Explore detailed definitions of CPU, memory, disk, and network metrics. Learn how Silverhawk calculates averages, trends, and usage patterns.",
  },
  {
    name: "CLI Reference",

    path: "/docs/cli",
    description:
      "Full list of CLI commands for Silverhawk Infra Agent. Includes examples for starting, stopping, viewing status, and debugging the agent.",
  },
  {
    name: "Change Log",

    path: "/docs/changelog",
    description:
      "View version history, new features, improvements, and bug fixes. Stay updated with every Silverhawk platform release.",
  },
  {
    name: "Help & Support",

    path: "/docs/help-and-support",
    description:
      "Get troubleshooting help, report issues, or contact support. Access FAQs, community forums, and contact details for Silverhawk’s technical team.",
  },
];
