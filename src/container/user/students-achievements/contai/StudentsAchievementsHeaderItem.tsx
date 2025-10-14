"use client";
import { achievementsData } from "@/modules/data/DataAchievements";
import { IAchievementsHeader } from "@/modules/interface/IAchievementsData";
import { Grid, Image, Stack, Text, Title } from "@mantine/core";

export default function StudentsAchievementsHeaderItem() {
  const data: IAchievementsHeader = achievementsData.achievementsHeader || {};
  return (
    <Grid gutter={40} align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack gap={10}>
          <Title fz={45} c={"var(--mantine-color-brand-5)"}>
            {data.title}
          </Title>
          <Text size="xl">{data.description}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image src={data.image} alt={"error-image"} w={"100%"} radius={"md"} />
      </Grid.Col>
    </Grid>
  );
}
