import React, { FC } from "react";
import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react";

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
        <Text fontSize="3xl">Kemana Aja, Bawa Tahu Petis</Text>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="m-2">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Praktis</Heading>
                <Text>Jadi camilan di segala keadaan</Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="m-2">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Fresh</Heading>
                <Text>Proses pembuatan yang higienis</Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="m-2">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Terbuat dari kedelai</Heading>
                <Text>Kaya akan manfaat</Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div className="m-2">
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://1.bp.blogspot.com/-0goGlTCBEAE/YS82Qiy4hAI/AAAAAAAAgyw/ZBK2UPlEujgB1_I3jxCGAnKUYXKQ9fi5wCLcBGAsYHQ/w640-h640/240945601_1300834933708682_4956939468774140907_n.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">No MSG</Heading>
                <Text>Makan banyak tidak masalah</Text>
              </Stack>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Story;
