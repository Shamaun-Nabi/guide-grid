const ContentPage = ({ params }) => {
  const { contentId } = params;
  return <div>{contentId}</div>;
};

export default ContentPage;
