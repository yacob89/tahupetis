import React, { FC } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export interface IntroductionProps {
  // Define your component's props here
}

const Introduction: FC<IntroductionProps> = (
  {
    /* Destructure your props here */
  }
) => {
  // Your component logic here

  return (
    <div className="flex items-center justify-between mx-8 my-8">
      <div>
        <Typography variant="h1" color="black" className="mb-2">
          Tahu Petis, Pelengkap Momen Kebersamaan
        </Typography>
        <Typography color="black" className="font-normal">
          Terbuat dari tahu premium dan petis yang gurih!
        </Typography>
      </div>

      <Image
        src={
          "https://1.bp.blogspot.com/-jZ920YjJXII/YN2tkwrMEhI/AAAAAAAAgFs/QV-cOs3LBV8jxJm7B4uY5o57oVzIkw8nACLcBGAsYHQ/s1352/201453035_794331908121341_1316279879229796362_n%2B%25281%2529.jpg"
        }
        alt={"tahu"}
        width={300}
        height={300}
      />
    </div>
  );
};

export default Introduction;
