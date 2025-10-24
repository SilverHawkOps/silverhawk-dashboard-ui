// "use client";
// import React, { useState } from "react";
// import { AppWindowIcon, Edit, FlagIcon, LayoutIcon, PlusIcon, Trash } from "lucide-react";
// import Button from "@/components/ui/button/Button";
// import Link from "next/link";
// import { useGetFeatureFlagsQuery, useUpdateFeatureFlagStatusMutation } from "@/services/api";
// import Switch from "@/components/form/switch/Switch";
// import DataNotFound from "@/components/data-not-found/DataNotFound";
// import { Flag } from "@/services/types";


// const FeatureFlags = () => {

//     const [activeTab, setActiveTab] = useState("application");

//     const handleTabClick = (key: string) => {
//         setActiveTab(key);
//     };


//     const { data, error: queryError, isLoading: queryLoading } = useGetFeatureFlagsQuery({});
//     const [updateFeatureFlagStatus, { isLoading: mutationLoading, error: mutationError }] = useUpdateFeatureFlagStatusMutation();

//     if (queryLoading || mutationLoading) return <p>Loading feature flags...</p>;
//     if (queryError || mutationError) return <p>Error fetching feature flags</p>;

//     const renderFlagList = (data: Flag[], key: string) => {

//         const filteredFlags = data.filter((flag) => flag.type === key);

//         return (
//             <div className="w-full overflow-x-auto">
//                 {filteredFlags.length > 0 ? (
//                     <table className="bg-white dark:bg-gray-800 rounded-xl shadow-md w-full">
//                         <thead className="bg-gray-100 dark:bg-gray-700 w-full">
//                             <tr className="w-full text-sm">
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Sr. No.</th>
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Name</th>
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Description</th>
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Key</th>
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Status</th>
//                                 <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Toggle</th>
//                                 <th className="text-center px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredFlags.map((flag, index) => (
//                                 <tr
//                                     key={flag._id}
//                                     className="text-sm border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//                                 >
//                                     <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{index + 1}</td>
//                                     <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{flag.name}</td>
//                                     <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{flag.description || "—"}</td>
//                                     <td className="px-4 py-3 text-gray-600 dark:text-gray-300"><span className="italic p-1">{flag.key}</span></td>
//                                     <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
//                                         {flag.is_enabled ? "Enabled" : "Disabled"}
//                                     </td>
//                                     <td>
//                                         <Switch label="" color="blue" defaultChecked={flag.is_enabled} onChange={(checked) => handleToggle(flag.name, checked)} />
//                                     </td>
//                                     <td className="px-4 py-3 flex justify-center gap-3">
//                                         {/* Edit button */}
//                                         <Link href={`/dashboard/feature-flags/edit/${flag._id}`} className="text-black dark:text-white cursor-pointer" title="Edit">
//                                             <Edit width={20} />
//                                         </Link>

//                                         {/* Delete button */}
//                                         <Trash width={20} onClick={() => handleDelete(flag._id)} className="text-black dark:text-white cursor-pointer" />
//                                     </td>
//                                 </tr>
//                             ))}

//                         </tbody>
//                     </table>
//                 ) : (
//                     <DataNotFound />
//                 )}

//             </div>
//         )
//     }

//     const tabs = [
//         {
//             key: "application",
//             label: "Application Level",
//             icon: <AppWindowIcon className="h-4 w-4" />,
//             content: renderFlagList(data, "application"),
//         },
//         {
//             key: "ui",
//             label: "UI Level",
//             icon: <LayoutIcon className="h-4 w-4" />,
//             content: renderFlagList(data, "ui"),
//         },
//         {
//             key: "feature",
//             label: "Feature Level",
//             icon: <FlagIcon className="h-4 w-4" />,
//             content: renderFlagList(data, "feature"),
//         },
//     ];



//     const handleToggle = async (name: string, checked: boolean) => {
//         try {
//             await updateFeatureFlagStatus({ name, is_enabled: checked }).unwrap();
//             console.log(`Feature flag ${name} is now ${checked ? "enabled" : "disabled"}`);
//         } catch (err) {
//             console.error("Failed to update feature flag status", err);
//         }
//     };

//     const handleDelete = (id: string) => {
//         console.log(id)
//         if (confirm("Are you sure you want to delete this feature flag?")) {
//             alert("deleted"); // Replace with actual delete mutation later
//         }
//     };

//     return (

//         <div className="bg-gray-50 dark:bg-gray-900 space-y-2">


//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-lg font-bold text-gray-800 dark:text-white">Feature Flags</h1>
//                 <Link href={"/dashboard/add-new-infrastructure"} className="flex items-center gap-2">
//                     <Button className="w-full" size="xs" startIcon={<PlusIcon />}>
//                         Add New
//                     </Button>
//                 </Link>

//             </div>

//             <div className={`w-full bg-white border border-gray-200 rounded-lg`}>
//                 {/* Tab headers */}
//                 <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
//                     <ul className="flex flex-wrap gap-2">
//                         {tabs.map((tab) => {
//                             const isActive = activeTab === tab.key;
//                             return (
//                                 <li key={tab.key}>
//                                     <button
//                                         onClick={() => handleTabClick(tab.key)}
//                                         className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${isActive
//                                             ? "bg-white dark:bg-gray-900 text-blue-600 border-b-2 border-blue-500 dark:text-blue-400"
//                                             : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
//                                             }`}
//                                     >
//                                         {tab.icon && <span>{tab.icon}</span>}
//                                         {tab.label}
//                                     </button>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </div>

//                 {/* Tab content */}
//                 <div className="p-4">
//                     {tabs.find((tab) => tab.key === activeTab)?.content}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeatureFlags;


import React from 'react'

const FeatureFlags = () => {
  return (
    <div>FeatureFlags</div>
  )
}

export default FeatureFlags