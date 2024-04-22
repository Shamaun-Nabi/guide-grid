const subContentPage = ({ params }) => {
  const { subID } = params;
  return <div>{subID}</div>;
};

export default subContentPage;
