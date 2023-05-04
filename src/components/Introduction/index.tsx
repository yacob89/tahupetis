import React, { FC } from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

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
    <div className="flex flex-row justify-center flex-wrap">
      <div className="basis-1/2">
        <div className="m-8">
          <Text fontSize="3xl">Tahu Petis, Pelengkap Momen Kebersamaan</Text>
          <Text fontSize="xl">
            Terbuat dari tahu premium dan petis yang gurih!
          </Text>
        </div>
      </div>
      <div className="flex basis-1/2 items-end justify-center">
        <Image
          src={
            "https://1.bp.blogspot.com/-jZ920YjJXII/YN2tkwrMEhI/AAAAAAAAgFs/QV-cOs3LBV8jxJm7B4uY5o57oVzIkw8nACLcBGAsYHQ/s1352/201453035_794331908121341_1316279879229796362_n%2B%25281%2529.jpg"
          }
          alt={"tahu"}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Introduction;
