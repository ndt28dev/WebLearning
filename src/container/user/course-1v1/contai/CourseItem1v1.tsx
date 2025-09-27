import MyButton from "@/components/mybutton/MyButton";
import { ICourse1v1 } from "@/modules/interface/Icourse1v1";
import {
  ActionIcon,
  Badge,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconBriefcase,
  IconCalendarClock,
  IconClock,
  IconCurrencyDollar,
  IconHeart,
  IconSchool,
} from "@tabler/icons-react";
import { useState } from "react";

interface Props {
  item: ICourse1v1;
}

export default function CourseItem1v1({ item }: Props) {
  const [listHeart, setListHeart] = useState<number[]>([101, 102]);
  const lengthSub = 4;

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

  const TrainingDay = (day: string) => {
    const days = day
      .split("-")
      .map((d) => d.trim())
      .filter(Boolean);

    return (
      <Flex gap={5} align="center">
        <ThemeIcon variant="light">
          <IconCalendarClock size={20} color={"var(--mantine-color-brand-5)"} />
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
  return (
    <Card
      key={item.id}
      p={0}
      bg={"white"}
      style={{ border: "1px solid var(--mantine-color-brand-2)" }}
      radius={"md"}
    >
      <Flex>
        <Image
          src={item.teacher?.image}
          w={300}
          h={300}
          radius={0}
          alt={"1v1"}
          fit="cover"
        />
        <Stack gap={5} p={"xs"} flex={1}>
          <Flex align={"center"} justify={"space-between"} gap={5}>
            <Group gap={5}>
              <Text size="xl" fw={600}>
                Gia sư
              </Text>
              <Text size="xl" fw={600} c={"var(--mantine-color-brand-5)"}>
                {item.teacher?.name}
              </Text>
            </Group>
            <Badge
              size="md"
              variant="filled"
              key={item.id}
              color="brand.5"
              c={"white"}
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              {item.teacher?.degree}
            </Badge>
          </Flex>
          <Flex align={"center"} gap={5} wrap="wrap" mt={5} mb={5}>
            {item.subjects?.slice(0, lengthSub).map((item, index) => (
              <Badge size="md" variant="outline" key={index} c={"brand.5"}>
                {item}
              </Badge>
            ))}
            {(item.subjects?.length || 0 > lengthSub) && (
              <Tooltip
                bg={"brand.0"}
                style={{
                  border: "1px solid var(--mantine-color-brand-2)",
                }}
                position="top"
                label={
                  <Stack gap={5} p={0}>
                    {item.subjects?.slice(lengthSub).map((item, index) => (
                      <Badge
                        size="md"
                        variant="outline"
                        key={index}
                        c={"brand.5"}
                      >
                        {item}
                      </Badge>
                    ))}
                  </Stack>
                }
              >
                <Badge size="md" variant="light" color={"brand.5"}>
                  {`+${Number(item.subjects?.length) - lengthSub}`}
                </Badge>
              </Tooltip>
            )}
          </Flex>
          <Flex align={"center"} gap={5}>
            <ThemeIcon variant="light">
              <IconSchool size={20} color={"var(--mantine-color-brand-5)"} />
            </ThemeIcon>
            <Text size="md" lineClamp={1}>
              {item.teacher?.university}
            </Text>
          </Flex>
          <Flex align={"center"} gap={5}>
            <ThemeIcon variant="light">
              <IconBriefcase size={20} color={"var(--mantine-color-brand-5)"} />
            </ThemeIcon>
            <Text size="md" lineClamp={1}>
              {item.teacher?.experience}
            </Text>
          </Flex>
          <Flex gap={5} align={"center"}>
            <ThemeIcon variant="light">
              <IconClock size={20} color="var(--mantine-color-brand-5)" />
            </ThemeIcon>
            <Text size="md">Giờ học:</Text>
            <Text size="md" fw={600}>
              {item.startTime} - {item.endTime}
            </Text>
          </Flex>
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
                {item.price?.toLocaleString("en-US")}
              </span>{" "}
              VNĐ/Tháng
            </Text>
          </Flex>
          <Flex align={"center"} justify={"space-between"}>
            <Group gap={10} mt={5}>
              <MyButton
                color="var(--mantine-color-brand-5)"
                variant="filled"
                label="Liên hệ gia sư"
                link=""
              />
              <MyButton
                variant="outline"
                color="var(--mantine-color-brand-5)"
                label="Xem chi tiết"
                link=""
              />
            </Group>
            <Tooltip
              label={
                setColorIconHeart(item.id || 0)
                  ? "Bỏ lưu"
                  : "Lưu vào bộ yêu thích"
              }
              variant="light"
              color="red"
              position={"left"}
            >
              <ActionIcon
                variant={setColorIconHeart(item.id || 0) ? "filled" : "outline"}
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
            </Tooltip>
          </Flex>
        </Stack>
      </Flex>
    </Card>
  );
}
