"use client";

import { useSidebar } from "@/context/SidebarContext";
import { useAuth } from "@/hooks/useAuth";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import Image from "next/image";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const { loading, isUserLoggedIn } = useAuth();
  const { isFeatureEnabled } = useFeatureFlags();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isUserLoggedIn) {
    return null;
  }


  if (isFeatureEnabled("application_maintenance_mode")) {
    return (
      <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
        <div>
          <div className="mx-auto w-full max-w-[274px] text-center sm:max-w-[555px]">
            <div className="mx-auto mb-10 w-full max-w-[155px] text-center sm:max-w-[204px]">
              <Image src="/images/error/maintenance.svg" alt="maintenance" className="dark:hidden" width={"300"} height={100}/>
              <Image src="/images/error/maintenance-dark.svg" alt="maintenance" className="hidden dark:block" width={"300"} height={100} />
            </div>

            <h1 className="text-title-md xl:text-title-2xl mb-2 font-bold text-gray-800 dark:text-white/90">
              MAINTENANCE
            </h1>

            <p className="mt-6 mb-6 text-base text-gray-700 sm:text-lg dark:text-gray-400">
              Our Site is Currently under maintenance We will be back Shortly
              Thank You For Patience
            </p>

            <a href="index.html" className="shadow-theme-xs inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              Back to Home Page
            </a>
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500 dark:text-gray-400">
            © <span id="year">2025</span> - TailAdmin
          </p>
        </div>
      </div>
    )
  }

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
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-4">{children}</div>
      </div>
    </div>
  );
}
