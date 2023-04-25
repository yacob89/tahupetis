import React, { FC } from "react";
import Image from "next/image";

export interface GalleryProps {
  // Define your component's props here
}

const Gallery: FC<GalleryProps> = (
  {
    /* Destructure your props here */
  }
) => {
  // Your component logic here

  return (
    <div className="grid grid-flow-col auto-cols-max">
      <div>
        <Image
          src={
            "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
          }
          alt={"tahu"}
          width={250}
          height={250}
        />
      </div>
      <div>
        <Image
          src={
            "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
          }
          alt={"tahu"}
          width={250}
          height={250}
        />
      </div>
      <div>
        <Image
          src={
            "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
          }
          alt={"tahu"}
          width={250}
          height={250}
        />
      </div>
      <div>
        <Image
          src={
            "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
          }
          alt={"tahu"}
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Gallery;
