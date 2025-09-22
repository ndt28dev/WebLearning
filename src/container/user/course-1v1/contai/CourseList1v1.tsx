"use client";
import MyButton from "@/components/mybutton/MyButton";
import { dataCourses1v1 } from "@/modules/data/DataCourse1v1";
import { ICourse1v1 } from "@/modules/interface/Icourse1v1";
import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Group,
  Image,
  Pagination,
  Stack,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconBorderRadius,
  IconBriefcase,
  IconCalendarClock,
  IconClock,
  IconCurrencyDollar,
  IconSchool,
  IconUserStar,
} from "@tabler/icons-react";
import "@/styles/client/course/CourseList1v1.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import NavbarCourse1v1 from "./NavbarCourse1v1";

export default function CourseList1v1() {
  const data: ICourse1v1[] = dataCourses1v1;
  const [page, setPage] = useState<number>(1);
  const totalProducts = 4;
  const pageSize = Math.max(1, totalProducts || 0);
  const totalPages = Math.ceil((data?.length ?? 0) / pageSize);

  const topRef = useRef<HTMLDivElement | null>(null);
  const headerOffset = 82;
  const didMount = useRef(false);

  const course1v1Data = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return (data ?? []).slice(start, end);
  }, [data, page, pageSize]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (!topRef.current) return;

    const y =
      topRef.current.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [page]);

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

  const items = (data: ICourse1v1[]) =>
    data.length > 0 &&
    data.map((item, index) => (
      <Card
        mb={index === data.length - 1 ? 0 : 10}
        key={item.id}
        p={0}
        bg={"white"}
        style={{ border: "1px solid var(--mantine-color-brand-2)" }}
        radius={"md"}
      >
        <Flex>
          <Image
            src={item.teacher.image}
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
                  {item.teacher.name}
                </Text>
              </Group>
              <Badge
                size="md"
                variant="filled"
                key={index}
                color="brand.5"
                c={"white"}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              >
                {item.teacher.degree}
              </Badge>
            </Flex>
            <Flex align={"center"} gap={5} wrap="wrap" mt={5} mb={5}>
              {item.subjects?.slice(0, 3).map((item, index) => (
                <Badge size="md" variant="outline" key={index} c={"brand.5"}>
                  {item}
                </Badge>
              ))}
              {(item.subjects?.length || 0 > 3) && (
                <Tooltip
                  bg={"brand.0"}
                  style={{
                    border: "1px solid var(--mantine-color-brand-2)",
                  }}
                  position="right-end"
                  label={
                    <Stack gap={5} p={0}>
                      {item.subjects?.slice(3).map((item, index) => (
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
                    {`+${Number(item.subjects?.length) - 3}`}
                  </Badge>
                </Tooltip>
              )}
            </Flex>
            <Flex align={"center"} gap={5}>
              <ThemeIcon variant="light">
                <IconSchool size={20} color={"var(--mantine-color-brand-5)"} />
              </ThemeIcon>
              <Text size="md" lineClamp={1}>
                {item.teacher.university}
              </Text>
            </Flex>
            <Flex align={"center"} gap={5}>
              <ThemeIcon variant="light">
                <IconBriefcase
                  size={20}
                  color={"var(--mantine-color-brand-5)"}
                />
              </ThemeIcon>
              <Text size="md" lineClamp={1}>
                {item.teacher.experience}
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
                label="Xem lịch dạy"
                link=""
              />
            </Group>
          </Stack>
        </Flex>
      </Card>
    ));

  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 3 }}>
        <NavbarCourse1v1 />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 9 }}>
        <div ref={topRef} />
        {items(course1v1Data)}
        <Center mt={20} className="course1v1-pagination">
          <Pagination
            color="brand"
            radius="xl"
            classNames={{
              control: "control",
              dots: "dots",
            }}
            total={totalPages}
            value={page}
            onChange={setPage}
          />
        </Center>
      </Grid.Col>
    </Grid>
  );
}
