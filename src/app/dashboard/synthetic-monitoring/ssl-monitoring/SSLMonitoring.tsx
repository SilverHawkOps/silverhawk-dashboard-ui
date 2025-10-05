"use client";

import Button from '@/components/ui/button/Button'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import MonitorTable from './MonitorTable'
import DataNotFound from '@/components/data-not-found/DataNotFound'
import { Modal } from '@/components/ui/modal'
import SSLMonitorForm from './SSLMonitorForm';
import { useGetMetricsQuery } from '@/services/api';


const SSLMonitoring = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    const { data, error, isLoading, isFetching } = useGetMetricsQuery();

    if ( isLoading ) return <p>Loading metrics...</p>;
    if ( error ) return <p>Error fetching metrics</p>;

    console.log(data, isFetching)
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2
                    className="text-xl font-semibold text-gray-800 dark:text-white/90"
                >
                    SSL Monitors
                </h2>
                <div>
                    <Button className="w-full" size="sm" startIcon={ <PlusIcon /> } onClick={ () => setIsOpen( true ) }>
                        Create New Monitor
                    </Button>
                </div>
            </div>

            <MonitorTable />

            <DataNotFound />

            <Modal isOpen={ isOpen } onClose={ () => setIsOpen(false) }>
                <SSLMonitorForm />
            </Modal>
        </div>
    )
}

export default SSLMonitoring
