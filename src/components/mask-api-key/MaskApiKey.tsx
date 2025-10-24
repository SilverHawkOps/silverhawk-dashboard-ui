"use client";

import { ClipboardCopyIcon } from "lucide-react";
import React from "react";

interface MaskedKeyProps {
  token: string;
}

const MaskedApiKey: React.FC<MaskedKeyProps> = ({ token }) => {

  // Mask all except first 6 characters (you can adjust)
  const masked = token ? token.slice(0, 6) + "*******" : "";

  const handleCopy = () => {
    if (!token) return;
    navigator.clipboard.writeText(token);
    alert("API key copied to clipboard!");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="font-mono">{masked}</span>
      <button
        onClick={handleCopy}
        className="text-gray-400 px-2 py-1 rounded hover:text-gray-700 text-sm"
        title="Copy API key"
      >
        <ClipboardCopyIcon />
      </button>
    </div>
  );
};

export default MaskedApiKey;
