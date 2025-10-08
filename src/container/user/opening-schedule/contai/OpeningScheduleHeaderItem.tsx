"use client";
import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { openingScheduleData } from "@/modules/data/DataOpeningSchedule";
import { IOpeningScheduleHeader } from "@/modules/interface/IOpeningScheduleData";
import { Grid, GridCol, Image, Stack, Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function OpeningScheduleHeaderItem() {
  const data: IOpeningScheduleHeader =
    openingScheduleData.openingScheduleHeader || {};

  const renderColumnLeft = () => (
    <Stack gap={10}>
      <Title w={400} fz={45} c={"var(--mantine-color-brand-5)"}>
        {data.title}
      </Title>
      <Text size="xl" fw={500}>
        {data.subTitle}
      </Text>
      {data.description &&
        data.description.map((item, index) => (
          <MyGroupText
            key={index}
            text1={item}
            icon={<IconCheck size={20} color="var(--mantine-color-brand-5)" />}
          />
        ))}
    </Stack>
  );
  const renderColumnRight = () => (
    <Grid>
      {data.images &&
        data.images.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 6 }} key={index}>
            <Image
              src={item}
              alt={"error-image"}
              radius="md"
              h={180}
              w={"100%"}
            />
          </Grid.Col>
        ))}
    </Grid>
  );
  return (
    <Grid align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>{renderColumnLeft()}</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>{renderColumnRight()}</Grid.Col>
    </Grid>
  );
}
