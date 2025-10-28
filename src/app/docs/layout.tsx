"use client";

import DocsHelp from "@/components/docs-help/DocsHelp";
import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/docsLayout/AppHeader";
import AppSidebar from "@/docsLayout/AppSidebar";
import Backdrop from "@/docsLayout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-4">
          {children}
          <DocsHelp />
        </div>

      </div>
    </div>
  );
}
