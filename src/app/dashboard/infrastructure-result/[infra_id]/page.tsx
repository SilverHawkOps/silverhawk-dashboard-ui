import InfraResult from "./InfraResult";

interface InfraPageProps {
  params: Promise<{
    infra_id: string;
  }>;
}

const InfraPage = async ({ params }: InfraPageProps) => {
  const { infra_id } = await params;
  return <InfraResult infraId={infra_id} />;
};

export default InfraPage;
