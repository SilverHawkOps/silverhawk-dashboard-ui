"use client";
import React from "react";
import Link from "next/link";
import { Info, Lightbulb } from "lucide-react";
import CodeBlock from "@/components/code-block/CodeBlock";

export default function InfraSetupGuide() {
  return (
    <div className="w-full mx-auto px-6 py-6 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div
      >
        <h1 className="text-4xl font-bold mb-3">Silverhawk APM — Infrastructure Setup</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Learn how to connect your server or VM to Silverhawk APM using the{" "}
          <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm text-indigo-400"><Link href={'https://www.npmjs.com/package/silverhawk-infra'} target="_blank" className="underline" title="NPMJS Org - SilverHawk Infra CLI (silverhawk-infra)">silverhawk-infra</Link></code>{" "}
          agent to start collecting real-time CPU, memory, disk, and network metrics.
        </p>
      </div>

      {/* Section 1 */}
      <Section
        title="1. Prerequisites"
        description="Ensure your environment meets the requirements before proceeding."
      >
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Active Silverhawk APM account —{" "}
            <Link href="/signup" target="_blank" className="underline text-blue-500">
              Sign up here
            </Link>
          </li>
          <li>SSH access to your server or VM</li>
          <li>Node.js v16 or higher</li>
          <li>Outbound HTTPS access to <code>https://api.silverhawk.io</code></li>
        </ul>
        <CodeBlock code={`node -v && npm -v`} />
      </Section>

      {/* Section 2 */}
      <Section
        title="2. Create a New Infrastructure"
        description="Define your server in the Silverhawk APM dashboard."
      >
        <ol className="list-decimal ml-6 space-y-3">
          <li>
            Log in to your dashboard →{" "}
            <strong>Infrastructures → Add New Infrastructure</strong>.
          </li>
          <li>
            Fill in the following details:
            <table className="w-full text-left border border-gray-700 mt-3 mb-4 text-sm">
              <thead className="bg-gray-800 text-gray-200">
                <tr>
                  <th className="px-3 py-2">Field</th>
                  <th className="px-3 py-2">Description</th>
                  <th className="px-3 py-2">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-3 py-2">Name</td>
                  <td className="px-3 py-2">Identifier for your host</td>
                  <td className="px-3 py-2">Production Contabo Server</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Description</td>
                  <td className="px-3 py-2">Purpose of this server</td>
                  <td className="px-3 py-2">Runs main MERN backend</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Tags</td>
                  <td className="px-3 py-2">For filtering & grouping</td>
                  <td className="px-3 py-2">production, backend, contabo</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Environment</td>
                  <td className="px-3 py-2">Choose infra type</td>
                  <td className="px-3 py-2">Production</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Operating System</td>
                  <td className="px-3 py-2">Select your host OS</td>
                  <td className="px-3 py-2">Ubuntu 22.04 LTS</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </Section>

      {/* Section 3 */}
      <Section
        title="3. Install the Infra Agent"
        description="Install the Silverhawk Infra agent globally on your target server."
      >
        <CodeBlock
          code={`ssh root@<your-server-ip>\n\nnpm install -g silverhawk-infra\n\nsilverhawk-infra --version`}
        />
        <p className="text-gray-500 mt-2 text-sm">
          The agent will automatically create a background service for metric collection.
        </p>
      </Section>

      {/* Section 4 */}
      <Section
        title="4. Verify Agent Connectivity"
        description="Use a heartbeat check to validate your API key and network connection."
      >
        <CodeBlock code={`silverhawk-infra heartbeat --api-key <YOUR_API_KEY>`} />
        <p className="mt-3 text-sm text-gray-400">
          ✅ If successful, you’ll see: <code>Heartbeat OK</code>
        </p>
      </Section>

      {/* Section 5 */}
      <Section
        title="5. Start the Infra Agent"
        description="Start the Silverhawk Infra Agent to begin sending metrics."
      >
        <CodeBlock code={`silverhawk-infra start --api-key <YOUR_API_KEY>`} />
        <CodeBlock
          code={`silverhawk-infra status`}
        />
        <p className="text-sm text-gray-400 mt-2">
          Agent logs are available at <code>/var/log/silverhawk-infra/agent.log</code>.
        </p>
      </Section>

      {/* Section 6 */}
      <Section
        title="6. Monitor Your Server"
        description="Once the agent is running, data appears automatically in the dashboard."
      >
        <p>Navigate to your dashboard → Infrastructures → Select your server.</p>
        <ul className="list-disc ml-6 mt-3">
          <li>CPU Load (%)</li>
          <li>Memory Usage (MB / %)</li>
          <li>Disk Utilization</li>
          <li>Network Throughput (In/Out)</li>
        </ul>

        <TipBox>
          Metrics can take up to <strong>30 seconds</strong> to appear after the
          first data push.
        </TipBox>
      </Section>

      {/* Section 7 */}
      <Section
        title="7. Troubleshooting"
        description="Common setup issues and their resolutions."
      >
        <table className="w-full text-left border border-gray-700 mt-4 text-sm">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="px-3 py-2">Issue</th>
              <th className="px-3 py-2">Possible Cause</th>
              <th className="px-3 py-2">Solution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr>
              <td className="px-3 py-2">Invalid API Key</td>
              <td className="px-3 py-2">Key expired or typo</td>
              <td className="px-3 py-2">Regenerate from Dashboard → Settings → API Keys</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Connection Timeout</td>
              <td className="px-3 py-2">Firewall or proxy blocking 443</td>
              <td className="px-3 py-2">Allowlist <code>api.silverhawk.io</code></td>
            </tr>
            <tr>
              <td className="px-3 py-2">Metrics Not Visible</td>
              <td className="px-3 py-2">Agent stopped or host clock mismatch</td>
              <td className="px-3 py-2">Restart agent, ensure NTP sync</td>
            </tr>
          </tbody>
        </table>
      </Section>

      {/* Section 8 */}
      <Section
        title="Next Steps"
        description="Enhance your observability setup."
      >
        <ul className="list-disc ml-6 space-y-2">
          <li>Set up alert rules for CPU, memory, and disk thresholds.</li>
          <li>Install <code>silverhawk-logs</code> to centralize application logs.</li>
          <li>Deploy Infra Agents across multiple servers for full coverage.</li>
        </ul>
      </Section>

      <Section title="9. Next Steps" >
        <ul className="list-disc ml-6 space-y-2">
          <li>Enable <strong>alert policies</strong> for CPU/memory thresholds.</li>
          <li>Integrate <strong>Silverhawk Logs</strong> for unified observability.</li>
          <li>Deploy agents using Docker or Kubernetes DaemonSets.</li>
          <li>Use the <strong>Silverhawk SDK</strong> to emit custom app metrics.</li>
        </ul>

        <InfoBox>
          Need automation? Use our <strong>Terraform Provider</strong> to
          register infrastructures programmatically.
        </InfoBox>
      </Section>
    </div>
  );
}

// Helper Components
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mb-12"
    >
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}



function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-3 rounded">
      <div className="flex items-start gap-2">
        <Info className="w-5 h-5 mt-1" />
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}

function TipBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 p-3 rounded">
      <div className="flex items-start gap-2">
        <Lightbulb className="w-5 h-5 mt-1" />
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}