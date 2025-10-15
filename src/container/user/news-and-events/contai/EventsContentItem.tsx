"use client";
import { useMemo, useState } from "react";
import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { newsAndEventsData } from "@/modules/data/DataNewsAndEvents";
import { IEvents } from "@/modules/interface/INewsAndEvents";
import { formatDate } from "@/utils/format";
import {
  Card,
  Flex,
  Image,
  Stack,
  Text,
  Button,
  Group,
  Box,
  Paper,
} from "@mantine/core";
import {
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { useScrollIntoView } from "@mantine/hooks";
import "@/styles/client/newsandevents/NewsContentItem.scss";

const STEP = 5;
const INITIAL = 5;

export default function EventsContentItem() {
  const data: IEvents[] = newsAndEventsData.eventsList || [];

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

  const handleShowMore = () =>
    setVisibleCount((v) => Math.min(v + STEP, data.length));

  const handleCollapse = () => {
    setVisibleCount(Math.min(INITIAL, data.length));
    scrollIntoView();
  };

  return (
    <Stack gap={10}>
      <div ref={targetRef} />
      <Flex align={"center"} gap={5}>
        <Text fz={30} fw={700} c={"#333"}>
          Sự kiện
        </Text>
        <Text fz={30} fw={700} c={"var(--mantine-color-brand-5)"}>
          T-Learning
        </Text>
      </Flex>

      <Text size="lg" c={"#333"}>
        Cập nhật liên tục các sự kiện nổi bật tại T-Learning: lễ khai giảng,
        workshop kỹ năng, hội thảo phụ huynh, lớp học thử, và các chương trình
        hợp tác cùng đối tác giáo dục.
      </Text>

      <Stack gap={10}>
        {items.map((item) => (
          <Card
            p={10}
            radius={"md"}
            key={item.id}
            style={{ border: "1px solid var(--mantine-color-brand-2)" }}
            className="newsContentItem"
          >
            <Flex align={"center"} gap={10}>
              <Image
                src={item.image}
                alt={item.title}
                w={320}
                h={200}
                radius={"md"}
                style={{ cursor: "pointer" }}
              />
              <Stack flex={1} gap={5}>
                <Text
                  fw={600}
                  size="xl"
                  lineClamp={1}
                  className="newsContentItem-title"
                >
                  {item.title}
                </Text>

                <Text size="md" c={"#333"} lineClamp={3}>
                  {item.description}
                </Text>

                <MyGroupText
                  icon={<IconCalendar size={20} />}
                  text1={item.publishedAt && formatDate(item.publishedAt)}
                />
                <Text
                  size="md"
                  c={"var(--mantine-color-brand-5)"}
                  className="newsContentItem-xct"
                >
                  Xem chi tiết
                </Text>
              </Stack>
            </Flex>
          </Card>
        ))}

        {data.length > INITIAL && (
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
            ) : (
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
            )}
          </Group>
        )}
      </Stack>
    </Stack>
  );
}
