import React from "react";
import { Smile, Frown } from "lucide-react";

export default function DocsSidebar() {
  return (
    <aside className="w-64 p-5 border-l border-gray-200 sticky top-20 h-fit">
      {/* Section: On this page */}
      <h3 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
        On this page
      </h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>
          <a
            href="#step-by-step"
            className="hover:text-gray-900 transition-colors"
          >
            Step-by-step instructions
          </a>
        </li>
        <li>
          <a
            href="#update-agent"
            className="hover:text-gray-900 transition-colors"
          >
            Update the agent
          </a>
        </li>
        <li>
          <a
            href="#whats-next"
            className="hover:text-gray-900 transition-colors"
          >
            What’s next?
          </a>
        </li>
      </ul>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Feedback section */}
      <h4 className="text-sm font-semibold text-gray-800 mb-2">
        Was this doc helpful?
      </h4>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-100 hover:bg-green-200 rounded-full text-sm text-green-700 font-medium transition">
          <Smile size={16} />
          Yes
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 bg-red-100 hover:bg-red-200 rounded-full text-sm text-red-700 font-medium transition">
          <Frown size={16} />
          No
        </button>
      </div>
    </aside>
  );
}
