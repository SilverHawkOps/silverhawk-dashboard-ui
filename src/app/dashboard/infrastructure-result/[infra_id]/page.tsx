import InfraResult from './InfraResult';

const InfraPage = ({params}) => {
  return <InfraResult infraId={params.infra_id} />;
  // return <>Infra</>
};

export default InfraPage;
