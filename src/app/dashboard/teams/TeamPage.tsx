// "use client";

// import React, { useState } from "react";
// import { PlusIcon } from "lucide-react";
// import Button from "@/components/ui/button/Button";
// import Link from "next/link";
// import AddTeamModal from "./AddTeamModal";

// // Mock data for demonstration
// const teamList = [
//     {
//         _id: 1,
//         name: "Backend Team",
//         description: "Handles all backend servers and APIs",
//         members: [
//             { userId: 101, userName: "Alice", role: "Owner" },
//             { userId: 102, userName: "Bob", role: "Admin" },
//             { userId: 103, userName: "Charlie", role: "Member" },
//         ],
//         invitations: [
//             { email: "dave@example.com", invitedBy: 101, status: "Pending" },
//             { email: "eve@example.com", invitedBy: 102, status: "Pending" },
//         ],
//     },
//     {
//         _id: 2,
//         name: "Frontend Team",
//         description: "Manages frontend applications and dashboards",
//         members: [
//             { userId: 104, userName: "Frank", role: "Owner" },
//             { userId: 105, userName: "Grace", role: "Member" },
//         ],
//         invitations: [{ email: "heidi@example.com", invitedBy: 104, status: "Pending" }],
//     },
// ];

// // --- Member Badge Component ---
// const MemberBadge = ({ name, role }) => (
//     <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium inline-block mr-1 mb-1">
//         {name} ({role})
//     </span>
// );

// // --- Invitation Badge Component ---
// const InvitationBadge = ({ email, status }) => (
//     <span
//         className={`px-2 py-1 rounded-full text-xs font-medium inline-block mr-1 mb-1 ${status === "Pending"
//             ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//             : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//             }`}
//     >
//         {email} ({status})
//     </span>
// );

// // --- Team Row Component ---
// const TeamRow = ({ team }) => (
//     <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
//         <td className="px-4 py-3 text-gray-800 dark:text-gray-200">
//             <Link href={`/dashboard/teams/${team._id}`} className="text-indigo-500 underline">
//                 {team.name}
//             </Link>
//         </td>
//         <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{team.description}</td>
//         <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
//             {team.members.length > 0
//                 ? team.members.map((member) => (
//                     <MemberBadge key={member.userId} name={member.userName} role={member.role} />
//                 ))
//                 : "No Members"}
//         </td>
//         <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
//             {team.invitations.length > 0
//                 ? team.invitations.map((inv) => (
//                     <InvitationBadge key={inv.email} email={inv.email} status={inv.status} />
//                 ))
//                 : "No Invitations"}
//         </td>
//     </tr>
// );


// const TeamsCommunicationSection = () => {

//     // Initialize from localStorage
//     const [isVisible, setIsVisible] = useState(() => {
//         const saved = localStorage.getItem("team_communication_section");
//         return saved !== null ? JSON.parse(saved) : true;
//     });

//     if (!isVisible) return null; // Hide the section if closed

//     return (
//         <div className="relative p-6 mb-6 max-w-5xl mx-auto dark:bg-gray-800">
//             {/* Close Button */}
//             <button
//                 onClick={() => {
//                     localStorage.setItem("team_communication_section", JSON.stringify(false));
//                     setIsVisible(false)
//                 }}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition text-xl font-bold"
//                 aria-label="Close"
//             >
//                 &times;
//             </button>

//             <div className="flex flex-col items-center justify-center space-y-2">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                     Seamless communication with teams
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
//                     Teams are a great way for groups of people to communicate and work
//                     together. Take a look at why they are great.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Feature 1 */}
//                 <div className="text-center">
//                     <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-500">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M3 7h18M3 12h18M3 17h18"
//                             />
//                         </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//                         Flexible repository access
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm">
//                         You can add repositories to your teams with more flexible levels of
//                         access (Admin, Write, Read).
//                     </p>
//                 </div>

//                 {/* Feature 2 */}
//                 <div className="text-center">
//                     <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-500">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M12 4v16m8-8H4"
//                             />
//                         </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//                         Request to join teams
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm">
//                         Members can quickly request to join any team. An owner or team
//                         maintainer can approve the request.
//                     </p>
//                 </div>

//                 {/* Feature 3 */}
//                 <div className="text-center">
//                     <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-500">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
//                             />
//                         </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
//                         Team mentions
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-sm">
//                         Use team @mentions (ex. @design) for the entire team in any
//                         comment, issue, or pull request.
//                     </p>
//                 </div>
//             </div>

//             <div className="mt-6 text-center">
//                 <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition">
//                     Learn more
//                 </button>
//             </div>
//         </div>
//     );
// };

// const TeamsPage = () => {
//     const [teams, setTeams] = useState(teamList);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [inviteModalOpen, setInviteModalOpen] = useState(false);
//     const [selectedTeam, setSelectedTeam] = useState(null);

//     console.log(inviteModalOpen, selectedTeam)


//     const handleDelete = (id) => {
//         if (confirm("Are you sure you want to delete this team?")) {
//             setTeams((prev) => prev.filter((t) => t._id !== id));
//         }
//     };

//     return (
//         <div className=" bg-gray-50 dark:bg-gray-900">

//             <TeamsCommunicationSection />

//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Your Teams</h1>
//                 <div className="flex justify-end gap-2">
//                     <Button size="sm" startIcon={<PlusIcon />} onClick={() => setModalOpen(true)}>
//                         Add New Team
//                     </Button>
//                 </div>
//             </div>

//             <div className="overflow-x-auto rounded-lg shadow-md">
//                 <table className="min-w-full bg-white dark:bg-gray-800">
//                     <thead className="bg-gray-100 dark:bg-gray-700">
//                         <tr>
//                             <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">
//                                 Name
//                             </th>
//                             <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">
//                                 Description
//                             </th>
//                             <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">
//                                 Members
//                             </th>
//                             <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200">
//                                 Invitations
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {teams.map((team) => (
//                             <TeamRow key={team._id} team={team}/>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>



//             <AddTeamModal
//                 isOpen={modalOpen}
//                 onClose={() => setModalOpen(false)}
//                 onCreate={(team) => setTeams([...teams, { _id: Date.now(), ...team, members: [], invitations: [] }])}
//             />

//         </div>
//     );
// };

// export default TeamsPage;


import React from 'react'

const TeamPage = () => {
  return (
    <div>TeamPage</div>
  )
}

export default TeamPage