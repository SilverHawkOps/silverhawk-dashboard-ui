"use client";
import React, { useState } from "react";
import AccountSettingsCard from "./AccountSecrutiy";


const AccountSettings = () => {

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleDeleteAccount = () => {
        // Here you would call your API to delete the account
        alert("Account deletion initiated!");
        setShowDeleteConfirm(false);
    };

    return (
        <main className="">
            <AccountSettingsCard />


            <div className="border border-red-300 p-6 rounded-lg shadow-md mt-10">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">
                    Danger Zone
                </h3>
                <p className="mb-4 text-black dark:text-gray-300">
                    Deleting your account is permanent. All your data will be lost, and
                    this action cannot be undone.
                </p>
                <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="px-6 py-2 border border-red-600 text-red-500 rounded-md hover:bg-red-700 transition"
                >
                    Delete Account
                </button>

                {/* Confirmation Modal */}
                {showDeleteConfirm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full space-y-4 shadow-lg">
                            <h4 className="text-xl font-bold text-red-700 dark:text-red-400">
                                Confirm Account Deletion
                            </h4>
                            <p className="text-gray-700 dark:text-gray-200">
                                Are you sure you want to delete your account? This action
                                cannot be undone.
                            </p>
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <ProfileSection />
            <SecuritySection />
            <NotificationsSection />
            <IntegrationsSection />
        </main>
    );
};

export default AccountSettings;

/* ------------------ Sections ------------------ */

const ProfileSection = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                    type="text"
                    defaultValue="Ritik Sharma"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    defaultValue="ritik@example.com"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Profile Picture</label>
                <input type="file" className="block w-full text-sm text-gray-500 dark:text-gray-300" />
            </div>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Save Changes
            </button>
        </div>
    </div>
);

const SecuritySection = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Security</h2>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                <input
                    type="password"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Update Password
            </button>
        </div>
    </div>
);

const NotificationsSection = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <label className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span>Email me about APM alerts</span>
            </label>
            <label className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span>Email me about product updates</span>
            </label>
            <label className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                <span>Enable browser notifications</span>
            </label>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Save Changes
            </button>
        </div>
    </div>
);

const IntegrationsSection = () => (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Integrations</h2>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div className="flex items-center justify-between">
                <span>Slack Integration</span>
                <button className="px-4 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                    Connected
                </button>
            </div>
            <div className="flex items-center justify-between">
                <span>Webhook</span>
                <button className="px-4 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
                    Configure
                </button>
            </div>
            <div className="flex items-center justify-between">
                <span>PagerDuty</span>
                <button className="px-4 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
                    Configure
                </button>
            </div>
        </div>
    </div>
);
