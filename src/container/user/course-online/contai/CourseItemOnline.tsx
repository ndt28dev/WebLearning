import { ICourseOnline } from "@/modules/interface/ICourseOnline";
import MyButton from "@/components/mybutton/MyButton";
import { formatDate } from "@/utils/format";
import { isUpcoming } from "@/utils/helpers";
import {
  ActionIcon,
  Badge,
  Box,
  Flex,
  Group,
  Image,
  Paper,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconCalendarClock,
  IconClock,
  IconCurrencyDollar,
  IconHeart,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import MyGroupText from "@/components/mygrouptext/MyGroupText";

const TrainingDay = (day: string) => {
  const days = day
    .split("-")
    .map((d) => d.trim())
    .filter(Boolean);

  return (
    <Flex gap={5} align="center">
      <ThemeIcon variant="light">
        <IconCalendarClock size={20} color="var(--mantine-color-brand-5)" />
      </ThemeIcon>
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
  item: ICourseOnline;
  display?: boolean;
}

export default function CourseItemOnline({ item, display = true }: Props) {
  const [listHeart, setListHeart] = useState<number[]>([101, 102]);

  const setColorIconHeart = (id: number) => {
    if (listHeart.includes(id)) {
      return true;
    }
    return false;
  };

  const handleHeart = (id: number) => {
    if (listHeart.includes(id)) {
      setListHeart(listHeart.filter((item) => item !== id));
    } else {
      setListHeart([...listHeart, id]);
    }
  };

  return (
    <Tooltip
      zIndex={1}
      display={display ? "block" : "none"}
      bg={item.bookedCount === item.capacity ? "red" : "white"}
      style={{
        border:
          item.bookedCount === item.capacity
            ? "none"
            : "1px solid var(--mantine-color-brand-5)",
      }}
      label={
        <Text
          size="md"
          c={item.bookedCount === item.capacity ? "white" : "brand.5"}
        >
          {item.bookedCount === item.capacity
            ? "Hết chỗ"
            : `Đã đăng ký ${item.bookedCount}/${item.capacity}`}
        </Text>
      }
      position="top-end"
    >
      <Paper
        radius={"md"}
        p="0"
        style={{
          overflow: "hidden",
          border: "1px solid var(--mantine-color-brand-2)",
        }}
        h={"100%"}
      >
        <Flex direction="column" h="100%">
          <Box pos={"relative"}>
            <Image src={item.image} alt={"error-image"} w={"100%"} h={275} />
            <Text
              size="md"
              style={{
                position: "absolute",
                right: 4,
                bottom: 4,
                backgroundColor: "var(--mantine-color-brand-0)",
                padding: "3px 6px",
                color: "var(--mantine-color-brand-5)",
                borderRadius: "8px",
              }}
            >
              {item.startDate && formatDate(item.startDate)}
            </Text>
            {item.startDate && isUpcoming(item.startDate) && (
              <Badge
                style={{
                  position: "absolute",
                  top: 10,
                  right: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                color="brand.5"
              >
                Sắp khai giảng
              </Badge>
            )}
          </Box>

          <Flex
            direction="column"
            justify="space-between"
            p="xs"
            style={{ flex: 1 }}
            gap={5}
          >
            <Text
              size="xl"
              fw={600}
              c="brand.5"
              lineClamp={2}
              mb={"auto"}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </Text>

            <MyGroupText
              icon={
                <ThemeIcon variant="light">
                  <IconUser size={20} color="var(--mantine-color-brand-5)" />
                </ThemeIcon>
              }
              text1="Giáo viên"
              text2={item.teacher?.name}
            />

            <MyGroupText
              icon={
                <ThemeIcon variant="light">
                  <IconClock size={20} color="var(--mantine-color-brand-5)" />
                </ThemeIcon>
              }
              text1="Giờ học:"
              text2={`${item.startTime} - ${item.endTime}`}
            />
            {TrainingDay(item.day || "")}
            <Flex gap={5} align={"center"}>
              <ThemeIcon variant="light">
                <IconCurrencyDollar
                  size={20}
                  color="var(--mantine-color-brand-5)"
                />
              </ThemeIcon>
              <Text size="md">Học phí:</Text>
              <Text size="md" fw={600}>
                <span style={{ color: "var(--mantine-color-brand-5)" }}>
                  {Number(item.price).toLocaleString("en-US")}
                </span>
                VND/Khoá
              </Text>
            </Flex>

            <Group align="center" justify="space-between" mt={5}>
              <Group gap={10}>
                <MyButton
                  link=""
                  label={
                    item.bookedCount === item.capacity
                      ? "Hết chỗ"
                      : "Đặt lịch học"
                  }
                  variant="filled"
                  color={"brand.5"}
                  disabled={item.bookedCount === item.capacity}
                />
                <MyButton
                  link=""
                  label="Xem chi tiết"
                  variant="outline"
                  color="brand.5"
                />
              </Group>

              {display && (
                <ActionIcon
                  variant={
                    setColorIconHeart(item.id || 0) ? "filled" : "outline"
                  }
                  color={"red"}
                  size="lg"
                  onClick={() => handleHeart(item.id || 0)}
                >
                  <IconHeart
                    size={25}
                    stroke={1.2}
                    color={setColorIconHeart(item.id || 0) ? "white" : "red"}
                  />
                </ActionIcon>
              )}
            </Group>
          </Flex>
        </Flex>
      </Paper>
    </Tooltip>
  );
}
