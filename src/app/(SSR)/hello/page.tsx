import Image from "next/image";

const HelloPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className={"d-flex flex-column align-items-center"}>
      <div>
        <h1 className={"text-center"}>Hello from Next 13.4 Image Gallery</h1>
      </div>
      <Image
        src={
          "https://www.vectorkhazana.com/assets/images/products/SpongeBob_Faces.png"
        }
        alt={"image"}
        width={500}
        height={500}
        className={"rounded shadow mw-100 h-100"}
      />
    </div>
  );
};

export default HelloPage;
