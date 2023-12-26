import Image from "next/image";
import React from "react";

const ImageComponent = ({ url }: any) => {
  return (
    <div>
      <Image
        src={url || "/image.jpg"}
        alt="nc"
        width={500}
        height={500}
        className="m-12 rounded-md hover:scale-95 duration-300 transition-all"
      />
    </div>
  );
};

export default ImageComponent;
