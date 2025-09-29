"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { introduceData } from "@/modules/data/DataIntroduce";
import { Center, Grid, Stack, Text } from "@mantine/core";
import { IconBook, IconCertificate, IconSchool } from "@tabler/icons-react";

const icons = [IconBook, IconCertificate, IconSchool];

export default function IntroduceValueItem() {
  const data = introduceData.introduceValue;
  return (
    <Stack gap={10}>
      <MyTitleBasic
        textTitle={data.heading}
        textDesc={data.subheading}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Grid gutter={50}>
        {data.features.map((item, index) => {
          const IconComp = icons[index % icons.length];
          return (
            <Grid.Col span={{ base: 12, md: 4 }} key={item.title ?? index}>
              <Stack gap={0} align="center">
                <IconComp
                  size={150}
                  stroke={1.2}
                  color="var(--mantine-color-brand-5)"
                />
                <Text
                  fz={25}
                  fw={600}
                  ta="center"
                  c="var(--mantine-color-brand-5)"
                  mb={5}
                >
                  {item.title}
                </Text>
                <Text size="lg" ta="center">
                  {item.desc}
                </Text>
              </Stack>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
