import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

export interface StoryProps {
  // Define your component's props here
}

const Story: FC<StoryProps> = (
  {
    /* Destructure your props here */
  }
) => {
  // Your component logic here

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Typography variant="h1" color="black" className="mb-2 mt-4 ml-4">
          Kemana Aja, Bawa Tahu Petis
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center">
        <div>
          <Card className="w-64 mx-4 my-8">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={
                  "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                }
                alt="Gallery Image"
                width={400}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Praktis
              </Typography>
              <Typography>Jadi camilan di segala keadaan</Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="w-64 mx-4 my-8">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={
                  "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                }
                alt="Gallery Image"
                width={400}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Fresh
              </Typography>
              <Typography>Proses pembuatan yang higienis</Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="w-64 mx-4 my-8">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={
                  "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                }
                alt="Gallery Image"
                width={400}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                Terbuat dari kedelai
              </Typography>
              <Typography>Kaya akan manfaat</Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="w-64 mx-4 my-8">
            <CardHeader color="blue" className="relative h-56">
              <Image
                src={
                  "https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                }
                alt="Gallery Image"
                width={400}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                No MSG
              </Typography>
              <Typography>Makan banyak tidak masalah</Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Story;
