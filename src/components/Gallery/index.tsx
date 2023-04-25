import React, { FC } from "react";
import Image from "next/image";

const Gallery: FC = () => {
  const imageUrls = [
    "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg",
    "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg",
    "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg",
    "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-row flex-nowrap max-w-screen-lg justify-center">
        {imageUrls.map((imageUrl) => (
          <div
            key={imageUrl}
            className="w-full sm:w-1/2 md:w-1/4 p-2 flex justify-center"
          >
            <Image
              src={imageUrl}
              alt="Gallery Image"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
