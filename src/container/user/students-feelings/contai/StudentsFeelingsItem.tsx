"use client";
import { feelingsData } from "@/modules/data/DataFeelings";
import { IStudentReviews } from "@/modules/interface/IParentReviews";
import { formatDate } from "@/utils/format";
import {
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useMemo, useState } from "react";

const INITIAL = 4; // số review hiển thị ban đầu
const STEP = 4;

export default function StudentsFeelingsItem() {
  const data: IStudentReviews[] = feelingsData.feelingsList || [];

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 80,
    duration: 200,
  });

  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL, data.length)
  );

  const items = useMemo(
    () => data.slice(0, visibleCount),
    [data, visibleCount]
  );

  const hasMore = visibleCount < data.length;

  const showMore = () =>
    setVisibleCount((v) => Math.min(v + STEP, data.length));

  const collapse = () => {
    setVisibleCount(Math.min(INITIAL, data.length));
    scrollIntoView();
  };
  return (
    <Stack gap={10}>
      <div ref={targetRef} />
      <Text fz={25} fw={600} ta="left">
        Cảm nhận của học viên
      </Text>
      <Grid>
        {items.map((item, index) => (
          <Grid.Col span={{ base: 12, md: 6 }} key={item?.id ?? index}>
            <Card
              p={10}
              radius="md"
              h="100%"
              style={{
                cursor: "default",
                border: "1px solid var(--mantine-color-brand-2)",
              }}
              bg="var(--mantine-color-brand-0)"
            >
              <Flex
                gap={5}
                align="center"
                pb={10}
                mb={10}
                style={{
                  borderBottom: "2px solid var(--mantine-color-brand-2)",
                }}
              >
                <Image
                  src={item.avt}
                  alt={item.name}
                  radius={999999}
                  w={60}
                  h={60}
                />
                <Stack gap={0}>
                  <Text fz={20} fw={600} c="var(--mantine-color-brand-5)">
                    {item.name}
                  </Text>
                  <Text>{item.day && formatDate(item.day)}</Text>
                </Stack>
              </Flex>

              <Flex direction="column" gap={10} h="100%">
                <Text size="md" lineClamp={3} ta="left" mb="auto">
                  {item.description}
                </Text>
                {item.images?.[0] && (
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    radius="md"
                    w="100%"
                    h={400}
                  />
                )}
              </Flex>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {data.length > 0 && (
        <Group justify="center" mt="sm">
          {hasMore ? (
            <Button
              radius="xl"
              variant="outline"
              size="md"
              color="var(--mantine-color-brand-5)"
              onClick={showMore}
              rightSection={<IconChevronDown size={20} />}
            >
              Xem nhiều hơn
            </Button>
          ) : data.length > INITIAL ? (
            <Button
              radius="xl"
              size="md"
              variant="outline"
              color="var(--mantine-color-brand-5)"
              onClick={collapse}
              rightSection={<IconChevronUp size={20} />}
            >
              Thu gọn
            </Button>
          ) : null}
        </Group>
      )}
    </Stack>
  );
}
