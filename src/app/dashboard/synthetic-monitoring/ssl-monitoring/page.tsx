import { Metadata } from 'next';
import React from 'react'
import SSLMonitoring from './SSLMonitoring';

export const metadata: Metadata = {
    title: "SSL Monitors | SilverHawk APM - Monitor & Optimize Your Systems",
    description: "Monitor and manage your SSL certificates in real-time with SilverHawk APM. Get alerts for expiring certificates and ensure secure connections across your systems.",
};

const page = () => {
    return (
        <SSLMonitoring />
    )
}

export default page;
