import MyGroupText from "@/components/mygrouptext/MyGroupText";
import { ICourseOffline } from "@/modules/interface/ICourseOffline";
import { formatDate } from "@/utils/format";
import {
  Badge,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCalendarClock,
  IconClock,
  IconCurrencyDollar,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import "@/styles/client/openingschedule/OpeningScheduleItemCourseOff.scss";
import MyButton from "@/components/mybutton/MyButton";
import { ICourseOnline } from "@/modules/interface/ICourseOnline";

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

type Props = {
  item: ICourseOnline;
};
export default function OpeningScheduleItemCourseOn({ item }: Props) {
  return (
    item && (
      <Card
        p={1}
        style={{
          overflow: "visible",
          border: "1px solid var(--mantine-color-brand-2)",
        }}
        radius={"md"}
        key={item.id}
        h={"100%"}
        pos={"relative"}
        className="openingScheduleItemCourseOff"
      >
        <Text
          size="md"
          className="dateBadge"
          style={{
            position: "absolute",
            left: -8,
            top: "12px",
            backgroundColor: "var(--mantine-color-brand-5)",
            padding: "3px 6px",
            color: "white",
            borderRadius: " 0 5px 5px 0 ",
            zIndex: 1,
          }}
        >
          {item.startDate && formatDate(item.startDate)}
        </Text>
        <Flex h={"100%"} direction={"column"}>
          <Image
            src={item.image}
            alt={"error-image"}
            w={"100%"}
            h={275}
            style={{ borderRadius: "10px 10px 0 0" }}
          />
          <Stack gap={5} p={10} w={"100%"}>
            <Text
              size="lg"
              fw={600}
              c="brand.5"
              lineClamp={2}
              mb={"auto"}
              style={{ lineHeight: 1.3 }}
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
                  color="var(--mantine-color-brand-5)"
                  size={20}
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
            <Group mt={"auto"} justify="space-between">
              <MyButton
                link=""
                size="md"
                label="Đăng ký ngay"
                variant="filled"
                color="brand.5"
                disabled={item.capacity === item.bookedCount}
              />
              <Text
                size="md"
                c={item.capacity === item.bookedCount ? "red" : "green"}
                style={{
                  padding: "3px 6px",
                  borderRadius: "5px",
                }}
              >
                {item.capacity === item.bookedCount
                  ? "Hết chỗ"
                  : `Còn ${item.capacity! - item.bookedCount!} chỗ`}
              </Text>
            </Group>
          </Stack>
        </Flex>
      </Card>
    )
  );
}
