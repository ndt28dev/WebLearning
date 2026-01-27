import { ICourse } from "@/modules/interface/ICourse";
import { ICourseOffline } from "@/modules/interface/ICourseOffline";
import { formatDate } from "@/utils/format";
import { isUpcoming } from "@/utils/helpers";
import { Badge, Box, Flex, Group, Image, Paper, Text } from "@mantine/core";
import {
  IconCalendarClock,
  IconChevronsRight,
  IconClock,
  IconCurrencyDollar,
  IconPlayerPlay,
} from "@tabler/icons-react";

const TrainingDay = (day: string) => {
  const days = day
    .split("-")
    .map((d) => d.trim())
    .filter(Boolean);

  return (
    <Flex gap={5} align="center">
      <IconCalendarClock size={20} />
      <Text size="md">Thời gian:</Text>

      <Flex gap={5} wrap="wrap" flex={1}>
        {days.map((d) => (
          <Badge key={d} variant="light" color="brand.5">
            {d}
          </Badge>
        ))}
      </Flex>
    </Flex>
  );
};

interface Props {
  item: ICourseOffline;
}

export default function TrainingProgramItem({ item }: Props) {
  return (
    <Paper
      radius={"md"}
      p="0"
      style={{
        overflow: "hidden",
        border: "1px solid var(--mantine-color-brand-5)",
      }}
      h={"100%"}
    >
      <Flex direction="column" h="100%">
        <Box h={267} w={"100%"}>
          <Image src={item.image} h={"100%"} w={"100%"} />
        </Box>
        <Flex
          direction="column"
          justify="space-between"
          p="md"
          style={{ flex: 1 }}
          gap={5}
        >
          <Text size="xl" fw={600} c="brand.5" lineClamp={2} mb={"auto"}>
            {item.title}
          </Text>
          <Text size="md" lineClamp={3} c="#132643">
            {item.description}
          </Text>
          <Flex gap={5} align={"center"}>
            <IconClock size={20} />
            <Text size="md">Giờ học:</Text>
            <Text size="md" fw={600}>
              {item.startTime} - {item.endTime}
            </Text>
          </Flex>
          {TrainingDay(item.day || "")}
          <Flex gap={5} align={"center"}>
            <IconCurrencyDollar size={20} />
            <Text size="md">Học phí:</Text>
            <Text size="md" fw={600}>
              <span style={{ color: "var(--mantine-color-brand-5)" }}>
                {Number(item.price).toLocaleString("en-US")}
              </span>{" "}
              VND/Khoá
            </Text>
          </Flex>
          {item.startDate && isUpcoming(item.startDate) && (
            <Badge
              style={{
                position: "absolute",
                top: 10,
                right: 16,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              color="brand.5"
            >
              Sắp khai giảng
            </Badge>
          )}
          <Flex gap={5} align={"center"}>
            <IconPlayerPlay size={20} />
            <Text size="md">Ngày bắt đầu:</Text>
            <Text size="md" fw={600}>
              {item.startDate && formatDate(item.startDate)}
            </Text>
          </Flex>
          <Group
            className="btnSeeMore"
            gap={5}
            align="center"
            c="brand.5"
            style={{ cursor: "pointer" }}
          >
            <Text size="md" fw={500} className="btnSeeMore-hover">
              Xem thêm
            </Text>
            <IconChevronsRight size={20} className="btnSeeMore-hover" />
          </Group>
        </Flex>
      </Flex>
    </Paper>
  );
}
