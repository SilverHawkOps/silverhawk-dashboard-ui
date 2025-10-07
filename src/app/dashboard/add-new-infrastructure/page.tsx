"use client";
import React, { useState } from "react";
import { ClipboardCopyIcon, CheckCircleIcon } from "lucide-react";
import Button from "@/components/ui/button/Button";

const osOptions = [
  { id: "linux", label: "Linux", icon: "🐧", note: "Recommended for most servers" },
  { id: "windows", label: "Windows", icon: "🪟", note: "For Windows-based servers" },
  { id: "mac", label: "MacOS", icon: "🍎", note: "Use only for Mac servers" },
];

const TerminalBlock: React.FC<{ command: string; }> = ({ command }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Command copied!");
  };

  return (
    <div className="relative bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-mono p-4 rounded-lg mb-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="break-all">{command}</div>
        <ClipboardCopyIcon className="h-5 w-5 cursor-pointer hover:text-white" onClick={() => copyToClipboard(command)} />
      </div>
    </div>
  );
};

const StepCard: React.FC<{
  step: number;
  title: string;
  description: string;
  isCompleted: boolean;
  children: React.ReactNode;
}> = ({ step, title, description, isCompleted, children }) => (
  <div className={`p-4 border rounded-lg shadow-sm ${isCompleted ? "bg-green-50 border-green-400" : "bg-gray-50 border-gray-300"} transition-all`}>
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-semibold text-gray-800 dark:text-white">
        Step {step}: {title} {isCompleted && <CheckCircleIcon className="inline-block h-5 w-5 text-green-600" />}
      </h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
    {children}
  </div>
);

const InfrastructureModal: React.FC = () => {
  const [infraName, setInfraName] = useState("");
  const [selectedOs, setSelectedOs] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [pingStatus, setPingStatus] = useState("Not checked");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleGenerateApiKey = () => {
    if (!infraName || !selectedOs) return alert("Enter infra name and select OS");
    const key = `API-${Math.random().toString(36).slice(2, 12)}`;
    setApiKey(key);
    setCompletedSteps([1]);
  };

  const markStepCompleted = (step: number) => {
    if (!completedSteps.includes(step)) setCompletedSteps([...completedSteps, step]);
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white/90 mb-2">Add New Infrastructure</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Monitor your servers in real-time. The SilverHawk agent collects CPU, memory, disk metrics, and sends them to your dashboard.
      </p>

      {/* Step 1 */}
      <StepCard
        step={1}
        title="Name & OS"
        description="Provide a name and select the operating system for your infrastructure."
        isCompleted={completedSteps.includes(1)}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Infrastructure Name"
            value={infraName}
            onChange={(e) => setInfraName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {osOptions.map((os) => (
              <div
                key={os.id}
                onClick={() => setSelectedOs(os.id)}
                className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center transition ${selectedOs === os.id ? "border-blue-500 bg-blue-50 dark:bg-gray-700" : "border-gray-300 hover:border-blue-400"}`}
              >
                <div className="text-4xl mb-1">{os.icon}</div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-200">{os.label}</div>
                <p className="text-xs text-gray-500 mt-1">{os.note}</p>
              </div>
            ))}
          </div>
          <Button size="sm" onClick={handleGenerateApiKey}>
            Generate API Key
          </Button>
        </div>
      </StepCard>

      {/* Step 2 */}
      <StepCard
        step={2}
        title="Install CLI"
        description="Open your terminal and run this command to install SilverHawk CLI."
        isCompleted={completedSteps.includes(2)}
      >
        <TerminalBlock command="npm i -g silverhawk-infra" />
        {!completedSteps.includes(2) && <Button size="sm" onClick={() => markStepCompleted(2)}>Mark as Done</Button>}
      </StepCard>

      {/* Step 3 */}
      <StepCard
        step={3}
        title="Check Agent Connection"
        description="Verify the agent is installed and can communicate with the dashboard."
        isCompleted={completedSteps.includes(3)}
      >
        <TerminalBlock command={`silverhawk-infra heartbeat --api-key ${apiKey || "API_KEY_HERE"}`} />
        {!completedSteps.includes(3) && (
          <div className="flex gap-2 mt-2">
            <Button size="sm" onClick={() => setPingStatus("pong ✅ Agent is ready")}>Ping Agent</Button>
            {pingStatus.includes("ready") && <Button size="sm" onClick={() => markStepCompleted(3)}>Mark as Done</Button>}
          </div>
        )}
      </StepCard>

      {/* Step 4 */}
      <StepCard
        step={4}
        title="Start Agent"
        description="Start the agent so it begins sending metrics to your dashboard."
        isCompleted={completedSteps.includes(4)}
      >
        <TerminalBlock command={`silverhawk-infra start --api-key ${apiKey || "API_KEY_HERE"}`}  />
        {!completedSteps.includes(4) && <Button size="sm" onClick={() => setCompletedSteps([1, 2, 3, 4])}>Finish Setup</Button>}
      </StepCard>
    </div>
  );
};

export default InfrastructureModal;
