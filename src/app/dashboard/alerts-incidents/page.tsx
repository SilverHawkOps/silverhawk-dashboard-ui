"use client";
import AlertsCard, { Alert } from "./Alerts";

const alertsData: Alert[] = [
  {
    _id: "1",
    name: "CPU Usage High",
    severity: "Critical",
    type: "CPU",
    threshold: "90%",
    currentValue: "95%",
    status: "Active",
    lastTriggered: "2025-10-13T14:30:00Z",
  },
  {
    _id: "2",
    name: "Memory Usage Warning",
    severity: "High",
    type: "Memory",
    threshold: "80%",
    currentValue: "82%",
    status: "Active",
    lastTriggered: "2025-10-13T13:45:00Z",
  },
  {
    _id: "3",
    name: "Disk Space Low",
    severity: "Medium",
    type: "Disk",
    threshold: "70%",
    currentValue: "68%",
    status: "Resolved",
    lastTriggered: "2025-10-12T18:10:00Z",
  },
  {
    _id: "4",
    name: "CPU Usage High",
    severity: "Critical",
    type: "CPU",
    threshold: "90%",
    currentValue: "95%",
    status: "Active",
    lastTriggered: "2025-10-13T14:30:00Z",
  },
  {
    _id: "5",
    name: "Memory Usage Warning",
    severity: "High",
    type: "Memory",
    threshold: "80%",
    currentValue: "82%",
    status: "Active",
    lastTriggered: "2025-10-13T13:45:00Z",
  },
  {
    _id: "6",
    name: "Disk Space Low",
    severity: "Medium",
    type: "Disk",
    threshold: "70%",
    currentValue: "68%",
    status: "Resolved",
    lastTriggered: "2025-10-12T18:10:00Z",
  },
  {
    _id: "7",
    name: "CPU Usage High",
    severity: "Critical",
    type: "CPU",
    threshold: "90%",
    currentValue: "95%",
    status: "Active",
    lastTriggered: "2025-10-13T14:30:00Z",
  },
  {
    _id: "8",
    name: "Memory Usage Warning",
    severity: "High",
    type: "Memory",
    threshold: "80%",
    currentValue: "82%",
    status: "Active",
    lastTriggered: "2025-10-13T13:45:00Z",
  },
  {
    _id: "9",
    name: "Disk Space Low",
    severity: "Medium",
    type: "Disk",
    threshold: "70%",
    currentValue: "68%",
    status: "Resolved",
    lastTriggered: "2025-10-12T18:10:00Z",
  },
  {
    _id: "10",
    name: "CPU Usage High",
    severity: "Critical",
    type: "CPU",
    threshold: "90%",
    currentValue: "95%",
    status: "Active",
    lastTriggered: "2025-10-13T14:30:00Z",
  },
  {
    _id: "11",
    name: "Memory Usage Warning",
    severity: "High",
    type: "Memory",
    threshold: "80%",
    currentValue: "82%",
    status: "Active",
    lastTriggered: "2025-10-13T13:45:00Z",
  },
  {
    _id: "12",
    name: "Disk Space Low",
    severity: "Medium",
    type: "Disk",
    threshold: "70%",
    currentValue: "68%",
    status: "Resolved",
    lastTriggered: "2025-10-12T18:10:00Z",
  },
];

const AlertsPage = () => {
  const handleResolve = (id: string) => {
    console.log("Resolve alert", id);
  };

  const handleView = (id: string) => {
    console.log("View alert details", id);
  };

  return <AlertsCard data={alertsData} onResolve={handleResolve} onViewDetails={handleView} />;
};

export default AlertsPage;
