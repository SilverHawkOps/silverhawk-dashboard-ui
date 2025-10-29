"use client";

import Button from '@/components/ui/button/Button'
import { PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import MonitorTable from './MonitorTable'
import { Modal } from '@/components/ui/modal'
import SSLMonitorForm from './SSLMonitorForm';
import { useGetSSLMonitorsQuery } from '@/services/api';


const SSLMonitoring = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, error, isLoading } = useGetSSLMonitorsQuery();

  if (isLoading) return <p>Loading metrics...</p>;
  if (error) return <p>Error fetching metrics</p>;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2
          className="text-xl font-semibold text-gray-800 dark:text-white/90"
        >
          SSL Monitors
        </h2>
        <div>
          <Button className="w-full" size="sm" startIcon={<PlusIcon />} onClick={() => setIsOpen(true)}>
            Create New Monitor
          </Button>
        </div>
      </div>


      <MonitorTable monitors={data || []} />


      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SSLMonitorForm />
      </Modal>
    </div>
  )
}

export default SSLMonitoring


// import React from 'react'

// const SSLMonitoring = () => {
//   return (
//     <div>SSLMonitoring</div>
//   )
// }

// export default SSLMonitoring