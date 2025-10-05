"use client";
import React, { useState } from "react";

export default function AvailabilityMonitorForm() {
    const [ formData, setFormData ] = useState( {
        monitor_name: "",
        domain: "",
        frequency: "",
    } );

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        setFormData( { ...formData, [ e.target.name ]: e.target.value } );
    };

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        console.log( "SSL Check Data:", formData );
        // TODO: call API to save SSL check
        alert( "SSL Check Added!" );
    };

    return (
        <div className="p-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Add Availability Monitor</h2>
            <form className="space-y-4" onSubmit={ handleSubmit }>
                {/* Monitor Name */ }
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="monitor_name">
                        Monitor Name
                    </label>
                    <input
                        type="text"
                        id="monitor_name"
                        name="monitor_name"
                        value={ formData.monitor_name }
                        onChange={ handleChange }
                        placeholder="Enter monitor name"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Domain */ }
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="domain">
                        Domain
                    </label>
                    <input
                        type="text"
                        id="domain"
                        name="domain"
                        value={ formData.domain }
                        onChange={ handleChange }
                        placeholder="example.com"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Frequency */ }
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="frequency">
                        Frequency
                    </label>
                    <select
                        id="frequency"
                        name="frequency"
                        value={ formData.frequency }
                        onChange={ handleChange }
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select frequency</option>
                        <option value="5m">Every 5 minutes</option>
                        <option value="15m">Every 15 minutes</option>
                        <option value="30m">Every 30 minutes</option>
                        <option value="60m">Every 60 minutes</option>
                    </select>
                </div>

                {/* Submit Button */ }
                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Add Check
                    </button>
                </div>
            </form>
        </div>
    );
}
