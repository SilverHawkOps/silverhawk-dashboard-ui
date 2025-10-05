"use client";

import Button from '@/components/ui/button/Button'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import MonitorTable from './MonitorTable'
import DataNotFound from '@/components/data-not-found/DataNotFound'
import { Modal } from '@/components/ui/modal'
import AvailabilityMonitorForm from './AvailabilityMonitorForm';


const AvailabilityMonitoring = () => {
    const [ isOpen, setIsOpen ] = useState( false );
    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h2
                    className="text-xl font-semibold text-gray-800 dark:text-white/90"
                >
                    Availability Monitors
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
                <AvailabilityMonitorForm />
            </Modal>
        </div>
    )
}

export default AvailabilityMonitoring;
