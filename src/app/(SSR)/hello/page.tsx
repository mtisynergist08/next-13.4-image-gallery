const HelloPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Hello Next 13.4 Image Gallery</h1>
    </div>
  );
};

export default HelloPage;
