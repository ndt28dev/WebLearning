"use client";
import { introduceData } from "@/modules/data/DataIntroduce";
import { Grid, Image, Stack, Text } from "@mantine/core";

export default function IntroduceInfoItem() {
  const data = introduceData.introduceInfo;
  return (
    <Stack gap={50}>
      {data.info.map((item, index) => (
        <Grid align="center" gutter={50} key={index}>
          <Grid.Col span={{ base: 12, md: 6 }} order={index % 2 === 0 ? 1 : 2}>
            <Image
              src={item.image}
              alt="introduce-error-iamge"
              radius={"md"}
              w={"100%"}
              h={400}
              fit="cover"
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} order={index % 2 === 0 ? 2 : 1}>
            <Text
              fz={30}
              fw={600}
              style={{
                lineHeight: "1.5",
              }}
              mb={10}
            >
              {item.title}
            </Text>
            <Text size="lg">{item.description}</Text>
          </Grid.Col>
        </Grid>
      ))}
    </Stack>
  );
}
