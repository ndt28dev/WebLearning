"use client";
import { achievementsData } from "@/modules/data/DataAchievements";
import { IAchievementsParameter } from "@/modules/interface/IAchievementsData";
import { Grid, Image, Text } from "@mantine/core";

export default function StudentsAchievementsParameterItem() {
  const data: IAchievementsParameter =
    achievementsData.achievementsParameter || {};
  return (
    <Grid gutter={40} align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image radius={"md"} src={data.image} alt={"error-image"} w={"100%"} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Text size="xl" c={"var(--mantine-color-brand-5)"}>
          {data.title}
        </Text>
        <Grid align="start">
          {data.parameter &&
            data.parameter.map((item, index) => (
              <Grid.Col span={{ base: 12, md: 4 }} key={index}>
                <Text fz={45} fw={700} c={"var(--mantine-color-brand-5)"}>
                  {item.title}
                </Text>
                <Text size="lg">{item.description}</Text>
              </Grid.Col>
            ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
