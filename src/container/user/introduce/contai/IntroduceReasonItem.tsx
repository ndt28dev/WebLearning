import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { introduceData } from "@/modules/data/DataIntroduce";
import { IIntroduceReason } from "@/modules/interface/IIntroduceData";
import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function IntroduceReasonItem() {
  const data: IIntroduceReason = introduceData.introduceReason || {};

  return (
    <Box pos={"relative"}>
      <Image radius={"md"} src={"/images/banner/anh4.jpg"} w={"80%"} />
      <Stack
        pos={"absolute"}
        top={0}
        right={0}
        w={500}
        h={"100%"}
        align="center"
        justify="center"
      >
        <Stack
          p={40}
          style={{ borderRadius: 8 }}
          gap={10}
          bg={"var(--mantine-color-brand-5)"}
        >
          <Text
            fz={45}
            fw={600}
            w={"90%"}
            c={"white"}
            style={{ lineHeight: 1.2 }}
          >
            {data?.heading}
          </Text>
          <Stack gap={10}>
            {data.reason &&
              data.reason.map((item, index) => (
                <Text key={index} size="md" c={"white"}>
                  <IconCheck
                    size={18}
                    stroke={4}
                    color="white"
                    style={{ marginBottom: -3 }}
                  />{" "}
                  {item}
                </Text>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
