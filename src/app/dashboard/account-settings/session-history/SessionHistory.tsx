"use client";

import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5500";


interface Session {
  sessionId: string;
  userAgent: string;
  ip: string;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
}

const SessionHistory = () => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSessions();
    }, []);

    const fetchSessions = async () => {
        try {
            const res = await fetch(`${BASE_URL}/v1/auth/active-sessions`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data = await res.json();
            setSessions(data);
        } catch (err) {
            console.error("Error fetching sessions:", err);
        } finally {
            setLoading(false);
        }
    };

    const revokeSession = async (sessionId: string) => {
        try {
            const res = await fetch(`${BASE_URL}/v1/auth/revoke-session/${sessionId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!res.ok) throw new Error("Failed to revoke session");
            setSessions((prev) => prev.filter((s) => s.sessionId !== sessionId));
        } catch (err) {
            console.error(err);
        }
    };

    if (loading)
        return <p className="text-gray-500 text-center mt-6">Loading sessions...</p>;

    if (!sessions.length)
        return <p className="text-gray-600 text-center mt-6">No active sessions found.</p>;

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Session History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="py-3 px-4 text-left">Sr. No.</th>
                            <th className="py-3 px-4 text-left">Session Id</th>
                            <th className="py-3 px-4 text-left">Device</th>
                            <th className="py-3 px-4 text-left">IP</th>
                            <th className="py-3 px-4 text-left">Created At</th>
                            <th className="py-3 px-4 text-left">Expires At</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm text-gray-800">
                        {sessions.map((session, index) => (
                            <tr
                                key={session.sessionId}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="py-3 px-4 max-w-xs truncate">
                                    {index+1}
                                </td>
                                <td className="py-3 px-4 max-w-xs truncate">
                                    {session.sessionId || "Unknown Device"}
                                </td>
                                <td className="py-3 px-4 max-w-xs truncate">
                                    {session.userAgent || "Unknown Device"}
                                </td>
                                <td className="py-3 px-4">{session.ip || "N/A"}</td>
                                <td className="py-3 px-4">
                                    {new Date(session.createdAt).toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                    {new Date(session.expiresAt).toLocaleString()}
                                </td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${session.isActive
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {session.isActive ? "Active" : "Revoked"}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {session.isActive ? (
                                        <button
                                            onClick={() => revokeSession(session.sessionId)}
                                            className="px-3 py-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-600 transition"
                                        >
                                            Revoke
                                        </button>
                                    ) : (
                                        <span className="text-gray-400 text-xs italic">Revoked</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SessionHistory;
