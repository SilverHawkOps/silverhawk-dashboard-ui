import InfraResult from './InfraResult';

interface Props {
  params: { infra_id: string };
}

const InfraPage = ({ params }: Props) => {
  return <InfraResult infraId={params.infra_id} />;
};

export default InfraPage;
