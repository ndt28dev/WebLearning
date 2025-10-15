"use client";
import { newsAndEventsData } from "@/modules/data/DataNewsAndEvents";
import { INewsAndEventsHeader } from "@/modules/interface/INewsAndEventsData";
import { Grid, Image, Stack, Text } from "@mantine/core";

export default function NewsAndEventsHeaderItem() {
  const data: INewsAndEventsHeader[] =
    newsAndEventsData.newsAndEventsHeader || [];
  return (
    <Grid
      p={"md"}
      style={{ borderRadius: 8 }}
      bg={"var(--mantine-color-brand-1)"}
    >
      {data.map((item, index) => (
        <Grid.Col key={index} span={{ base: 12, md: 6 }}>
          <Image src={item.image} alt={"error-image"} w={"100%"} />
          <Stack gap={5} mt={10}>
            <Text fz={30} fw={700} c={"var(--mantine-color-brand-5)"}>
              {item.title}
            </Text>
            <Text size="md">{item.description}</Text>
          </Stack>
        </Grid.Col>
      ))}
    </Grid>
  );
}
