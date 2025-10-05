"use client";
import React from "react";

const services = [
    { name: "Auth Service", latency: "210 ms", status: "Healthy" },
    { name: "Billing API", latency: "480 ms", status: "Degraded" },
    { name: "Media Service", latency: "320 ms", status: "Healthy" },
];

export default function ServiceLatencyTable() {
    return (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-200">
                    <th className="py-2">Service</th>
                    <th className="py-2">Latency</th>
                    <th className="py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                { services.map( ( service, idx ) => (
                    <tr key={ idx } className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-2 font-medium text-gray-800">{ service.name }</td>
                        <td className="py-2 text-gray-600">{ service.latency }</td>
                        <td
                            className={ `py-2 font-medium ${service.status === "Healthy" ? "text-green-600" : "text-yellow-600"
                                }` }
                        >
                            { service.status }
                        </td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
}
