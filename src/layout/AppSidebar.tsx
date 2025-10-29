"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
} from "../icons/index";
import SidebarWidget from "./SidebarWidget";
import { ActivityIcon, BellIcon, CloudIcon, CpuIcon, DatabaseIcon, Flag, GitBranchIcon, Globe, HelpCircleIcon, LineChartIcon, PlugIcon, ServerIcon, SettingsIcon, UserIcon } from "lucide-react";
// import { useAuth } from "@/hooks/useAuth";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import { useAuth } from "@/hooks/useAuth";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean, featureKey: string }[];
  roles?: string[];
  featureKey: string;
};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Overview",
    path: "/dashboard",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_overview",
  },
  {
    name: "Synthetic Monitoring",
    icon: <ListIcon />,
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "synthetic_monitoring",
    subItems: [
      { name: "Availability", path: "/dashboard/synthetic-monitoring/availability", pro: false, featureKey: "nav_item_synthetic_availability" },
      { name: "SSL Certificate Monitoring", path: "/dashboard/synthetic-monitoring/ssl-monitoring", pro: false, featureKey: "nav_item_synthetic_ssl" },
      { name: "Page Link Crawler", path: "/synthetic-monitoring", pro: false, featureKey: "nav_item_synthetic_crawler" },
      { name: "Page Load Performance", path: "/dashboard/page-load-performance", pro: false, featureKey: "nav_item_synthetic_pageload" },
      { name: "Endpoint Availability", path: "/synthetic-monitoring/", pro: false, featureKey: "nav_item_synthetic_endpoint" },
    ],
  },
   {
    name: "Applications & Services",
    icon: <Globe />,
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "applications_services",
    subItems: [
      { name: "Entities", path: "/dashboard/applications-services/entities", pro: false, featureKey: "nav_item_applications_entities" },
      { name: "SSL Certificate Monitoring", path: "/dashboard/applications-services/ssl-monitoring", pro: false, featureKey: "nav_item_applications_ssl" },
      { name: "Page Link Crawler", path: "/dashboard/applications-services/page-link-crawler", pro: false, featureKey: "nav_item_applications_crawler" },
      { name: "Page Load Performance", path: "/dashboard/applications-services/page-load-performance", pro: false, featureKey: "nav_item_applications_pageload" },
      { name: "Endpoint Availability", path: "/dashboard/applications-services/endpoint-availability", pro: false, featureKey: "nav_item_applications_endpoint" },
    ],
  },
  {
    icon: <ServerIcon />,
    name: "Infrastructures",
    path: "/dashboard/infrastructures",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_infrastructures",
  },
  {
    icon: <BellIcon />,
    name: "Alerts & Incidents",
    path: "/dashboard/alerts-incidents",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_alerts_incidents",
  },
  {
    icon: <UserIcon />,
    name: "Team & Access",
    path: "/dashboard/teams",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_team_access",
  },
  {
    icon: <Flag />,
    name: "Feature Flags",
    path: "/admin/feature-flags",
    roles: ["admin"],
    featureKey: "nav_item_feature_flags",
  },
  {
    icon: <ServerIcon />,
    name: "Server Monitoring",
    path: "/server-monitoring",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_server_monitoring",
  },
  {
    icon: <ActivityIcon />,
    name: "Performance Metrics",
    path: "/metrics",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_performance_metrics",
  },
  {
    icon: <CpuIcon />,
    name: "System Health",
    path: "/system-health",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_system_health",
  },
  {
    icon: <GitBranchIcon />,
    name: "Traces",
    path: "/traces",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_traces",
  },
  {
    icon: <DatabaseIcon />,
    name: "Logs",
    path: "/logs",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_logs",
  },
  {
    icon: <LineChartIcon />,
    name: "Dashboards",
    path: "/custom-dashboards",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_dashboards",
  },
  {
    icon: <PlugIcon />,
    name: "Integrations",
    path: "/integrations",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_integrations",
  },
  {
    icon: <CloudIcon />,
    name: "Services",
    path: "/services",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_services",
  },
  {
    icon: <SettingsIcon />,
    name: "Configuration",
    path: "/settings",
    roles: ["admin", "sub-admin"],
    featureKey: "nav_item_configuration",
  },
  {
    icon: <HelpCircleIcon />,
    name: "Documentation",
    path: "/docs",
    roles: ["admin", "sub-admin", "manager", "user"],
    featureKey: "nav_item_documentation",
  },
];


const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const { isFeatureEnabled } = useFeatureFlags();
  const { user } = useAuth();

  const renderMenuItems = (
    navItems: NavItem[],
    menuType: "main" | "others"
  ) => (
    <ul className="flex flex-col gap-4">
      {navItems.filter((nav) => !nav.roles || nav.roles.includes(user?.role ? user?.role : "user")).map((nav, index) => {

        // Skip item if flag is off
        if (nav.featureKey && !isFeatureEnabled(nav.featureKey)) return null;

        return (
          <li key={nav.name}>
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
                  } cursor-pointer ${!isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "lg:justify-start"
                  }`}
              >
                <span
                  className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                    }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <ChevronDownIcon
                    className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                      }`}
                  />
                )}
              </button>
            ) : (
              nav.path && (
                <Link
                  href={nav.path}
                  className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                    }`}
                >
                  <span
                    className={`${isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                      }`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className={`menu-item-text`}>{nav.name}</span>
                  )}
                </Link>
              )
            )}
            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                  subMenuRefs.current[`${menuType}-${index}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height:
                    openSubmenu?.type === menuType && openSubmenu?.index === index
                      ? `${subMenuHeight[`${menuType}-${index}`]}px`
                      : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {nav.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.path}
                        className={`menu-dropdown-item ${isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                          }`}
                      >
                        {subItem.name}
                        <span className="flex items-center gap-1 ml-auto">
                          {subItem.new && (
                            <span
                              className={`ml-auto ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                                } menu-dropdown-badge `}
                            >
                              new
                            </span>
                          )}
                          {subItem.pro && (
                            <span
                              className={`ml-auto ${isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                                } menu-dropdown-badge `}
                            >
                              pro
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  );

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({
              type: "main",
              index,
            });
            submenuMatched = true;
          }
        });
      }
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <h1 className="dark:text-white font-bold text-xl">SilverHawk</h1>
            </>
          ) : (
            <Image
              src="/images/favicon.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "justify-start"
                  }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
        {isFeatureEnabled("sidebar_upgrade_widget") && (isExpanded || isHovered || isMobileOpen) ? <SidebarWidget /> : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
