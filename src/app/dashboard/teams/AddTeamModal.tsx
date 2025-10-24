// import Button from "@/components/ui/button/Button";
// import { Modal } from "@/components/ui/modal";
// import React, { useState } from "react";

// const AddTeamModal = ({ isOpen, onClose, onCreate }) => {
//   const [teamName, setTeamName] = useState("");
//   const [teamDescription, setTeamDescription] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!teamName.trim()) {
//       setError("Team name is required");
//       return;
//     }

//     onCreate({ name: teamName, description: teamDescription });
//     setTeamName("");
//     setTeamDescription("");
//     setError("");
//     onClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <div className="p-6 space-y-4">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Team</h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">
//               Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={teamName}
//               onChange={(e) => setTeamName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
//               placeholder="Enter team name"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">
//               Description
//             </label>
//             <textarea
//               value={teamDescription}
//               onChange={(e) => setTeamDescription(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
//               placeholder="Optional description"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <div className="flex justify-end gap-2">
//             <Button variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button onClick={(e) => handleSubmit(e)}>Create Team</Button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default AddTeamModal;


import React from 'react'

const AddTeamModal = () => {
  return (
    <div>AddTeamModal</div>
  )
}

export default AddTeamModal