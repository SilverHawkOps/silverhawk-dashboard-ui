import InfraMetricsDashboard from "./InfraMetricsDashboard";

interface InfraMetricPageProps {
  params: Promise<{
    id: string;
  }>;
}

const InfraMetricPage = async ({ params }: InfraMetricPageProps) => {
  const { id } = await params;
  return <InfraMetricsDashboard infraId={id} />;
};

export default InfraMetricPage;
