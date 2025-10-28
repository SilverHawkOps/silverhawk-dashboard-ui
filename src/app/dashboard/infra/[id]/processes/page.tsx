import React from 'react'
import ProcessMetricsTable from './ProcessMetricsTable';

interface InfraPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProcessesPage = async ({ params }: InfraPageProps) => {
  const { id } = await params;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Process Metrics
      </h1>
      <p className="text-gray-500 text-sm">
        Live system processes for <span className="font-medium">{id}</span>
      </p>
      <ProcessMetricsTable infraId={id} />
    </div>
  )
};

export default ProcessesPage;
