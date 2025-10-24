// "use client";
// import Button from '@/components/ui/button/Button';
// import { PlusIcon, UserIcon } from 'lucide-react';
// import React, { useState } from 'react';
// import SendInviteModal from '../SendInviteModal';

// interface Member {
//     id: string;
//     name: string;
//     role: 'Admin' | 'Developer' | 'QA';
//     avatarUrl?: string;
// }

// interface Team {
//     id: string;
//     name: string;
//     description: string;
//     members: Member[];
// }

// interface TeamPageProps {
//     params: {
//         teamId: string;
//     };
// }

// // Utility to count roles
// const getRoleCounts = (members: Member[]) => {
//     const counts: Record<string, number> = {};
//     members.forEach((m) => {
//         counts[m.role] = (counts[m.role] || 0) + 1;
//     });
//     return counts;
// };

// // Server Component
// const Team = ({ params }: TeamPageProps) => {
//     const { teamId } = params;

//     const [sendInviteModal, setSendInviteModal] = useState(false);

//     if (!teamId) return <div>Team not found</div>;

//     // Demo data
//     const team: Team = {
//         id: '1',
//         name: 'Backend Team',
//         description: 'Responsible for server-side logic and API development.',
//         members: [
//             { id: '1', name: 'John Doe', role: 'Admin', avatarUrl: '/avatars/john.jpg' },
//             { id: '2', name: 'Jane Smith', role: 'Developer', avatarUrl: '/avatars/jane.jpg' },
//             { id: '3', name: 'Alice Johnson', role: 'QA', avatarUrl: '/avatars/alice.jpg' },
//             { id: '4', name: 'Bob Martin', role: 'Developer', avatarUrl: '/avatars/bob.jpg' },
//         ],
//     };

//     const roleCounts = getRoleCounts(team.members);

//     return (
//         <div className="space-y-6">
//             {/* Team Header */}
//             <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center">
//                 <div>
//                     <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{team.name}</h1>
//                     <p className="mt-2 text-gray-600 dark:text-gray-300">{team.description}</p>
//                 </div>
//                 <div className="mt-4 md:mt-0 flex space-x-4">
//                     {Object.entries(roleCounts).map(([role, count]) => (
//                         <div
//                             key={role}
//                             className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg text-center"
//                         >
//                             <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
//                             <p className="text-xl font-bold text-gray-900 dark:text-white">{count}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Members Table */}
//             <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
//                 <div className="flex justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
//                     <div>
//                         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Members</h2>
//                         <p className="text-gray-500 dark:text-gray-400 text-sm">All active members and their roles</p>
//                     </div>
//                     <div>
//                         <Button size="sm" startIcon={<PlusIcon />} onClick={() => setSendInviteModal(true)} >
//                             Invite
//                         </Button>
//                     </div>
//                 </div>

//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                         <thead className="bg-gray-50 dark:bg-gray-700">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                                     Member
//                                 </th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                                     Role
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//                             {team.members.map((member) => (
//                                 <tr
//                                     key={member.id}
//                                     className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                                 >
//                                     <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
//                                         <div className="bg-indigo-400 p-1 rounded-full flex items-center justify-center">
//                                             <UserIcon className="text-white" size={20} />
//                                         </div>
//                                         <span className="text-gray-800 dark:text-gray-200 font-medium">{member.name}</span>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <span
//                                             className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${member.role === 'Admin'
//                                                 ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
//                                                 : member.role === 'Developer'
//                                                     ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
//                                                     : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
//                                                 }`}
//                                         >
//                                             {member.role}
//                                         </span>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//             <SendInviteModal
//                 isOpen={sendInviteModal}
//                 onClose={() => setSendInviteModal(false)}
//                 team={team}
//                 onSend={({ email, teamId }) => {
//                     console.log("Send invite to", email, "for team", teamId);
//                     // Call your API here
//                 }}
//             />
//         </div>
//     );
// };

// export default Team;


import React from 'react'

const Team = () => {
  return (
    <div>Team</div>
  )
}

export default Team