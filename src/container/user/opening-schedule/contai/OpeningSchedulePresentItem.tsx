"use client";
import MyTitleBasic from "@/components/client/mytitle/MyTitleBasic";
import { openingScheduleData } from "@/modules/data/DataOpeningSchedule";
import { IOpeningSchedulePresent } from "@/modules/interface/IOpeningScheduleData";
import { Card, Grid, Image, Stack } from "@mantine/core";

export default function OpeningSchedulePresentItem() {
  const data: IOpeningSchedulePresent =
    openingScheduleData.openingSchedulePresent || {};
  return (
    <Stack gap={20}>
      <MyTitleBasic
        textTitle={data.title}
        textDesc={data.description}
        colorTitle="var(--mantine-color-brand-5)"
      />
      <Grid>
        {data.images &&
          data.images.map((item, index) => (
            <Grid.Col span={{ base: 12, md: 6 }} key={index}>
              <Card p={5} bg={"var(--mantine-color-brand-5)"} radius={"md"}>
                <Image src={item} alt={"error-image"} radius="md" w={"100%"} />
              </Card>
            </Grid.Col>
          ))}
      </Grid>
    </Stack>
  );
}
