import React, { useState } from "react";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import { UserPlus } from "lucide-react";

const SendInviteModal = ({ isOpen, onClose, team, onSend }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        onSend({ email, teamId: team._id });
        setEmail("");
        setError("");
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="p-6 space-y-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <UserPlus className="text-black dark:text-white" size={32} />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                        Send Team Invite for team: {team?.name}
                    </h2>
                </div>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                            placeholder="Enter user email"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={(e) => handleSubmit(e)}>Send Invite</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SendInviteModal;
