"use client";
import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import StudentsAchievements from "./StudentsAchievements";
import { IStudentResults } from "@/modules/interface/IStudentResults";
import { achievementsData } from "@/modules/data/DataAchievements";
import { useMemo, useState } from "react";
import {
  IconArrowRight,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

const STEP = 8;
const INITIAL = 8;

export default function StudentsAchievementsItem() {
  const data: IStudentResults[] = achievementsData.achievementsList || [];
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL, data.length)
  );

  const items = useMemo(
    () => data.slice(0, visibleCount),
    [data, visibleCount]
  );

  const hasMore = visibleCount < data.length;
  const remaining = Math.max(data.length - visibleCount, 0);

  const handleShowMore = () =>
    setVisibleCount((v) => Math.min(v + STEP, data.length));

  const handleCollapse = () => setVisibleCount(Math.min(INITIAL, data.length));

  return (
    <Stack gap={10}>
      <Text fz={25} fw={600} ta={"left"} c={"var(--mantine-color-brand-5)"}>
        Thành tích của học viên
      </Text>
      <Grid>
        {items.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 3 }} key={item?.id ?? index}>
            <StudentsAchievements item={item} />
          </Grid.Col>
        ))}
      </Grid>
      <Group justify="center" mt="sm">
        {hasMore ? (
          <Button
            radius="xl"
            onClick={handleShowMore}
            variant="outline"
            size="md"
            color="var(--mantine-color-brand-5)"
            rightSection={<IconChevronDown size={20} />}
          >
            Xem nhiều hơn
          </Button>
        ) : data.length > INITIAL ? (
          <Button
            radius="xl"
            variant="outline"
            color="var(--mantine-color-brand-5)"
            onClick={handleCollapse}
            rightSection={<IconChevronUp size={20} />}
            size="md"
          >
            Thu gọn
          </Button>
        ) : null}
      </Group>
    </Stack>
  );
}
