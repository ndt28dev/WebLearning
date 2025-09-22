"use client";
import { homeMockData } from "@/modules/data/DataHome";
import { ITrainingProgramHome } from "@/modules/interface/IHome";
import { Carousel } from "@mantine/carousel";
import {
  Badge,
  Box,
  Center,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
  IconCalendarClock,
  IconChevronsRight,
  IconClock,
  IconCurrencyDollar,
  IconMoneybag,
  IconPlayerPlay,
  IconPlayerPlayFilled,
  IconSquareChevronsRight,
  IconStar,
  IconTimeDuration0,
} from "@tabler/icons-react";
import "@mantine/carousel/styles.css";
import "@/styles/client/home/TrainingProgramCon.scss";
import { formatDate } from "@/utils/format";
import MyButton from "@/components/mybutton/MyButton";
import { isUpcoming } from "@/utils/helpers";
import MyTitle from "@/components/client/mytitle/MyTitle";

export default function TrainingProgramCon() {
  const data: ITrainingProgramHome = homeMockData.trainingProgramData;

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

  const renderListCourse = (data: ITrainingProgramHome) => (
    <Carousel
      className="carousel"
      withControls={data.trainingPrograms.length > 3}
      withIndicators={data.trainingPrograms.length > 3}
      slideSize={{ base: "100%", sm: "50%", md: "33.33333%" }}
      slideGap="md"
    >
      {data.trainingPrograms.map((item, index) => (
        <Carousel.Slide key={item.id}>
          <Paper
            radius={"md"}
            p="0"
            bg={"white"}
            style={{ overflow: "hidden" }}
            h={"100%"}
          >
            <Flex direction="column" h="100%">
              <Image src="/images/traning/anh1.jpg" />

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
                {TrainingDay(item.day)}
                <Flex gap={5} align={"center"}>
                  <IconCurrencyDollar size={20} />
                  <Text size="md">Học phí:</Text>
                  <Text size="md" fw={600}>
                    <span style={{ color: "var(--mantine-color-brand-5)" }}>
                      {item.price.toLocaleString("en-US")}
                    </span>{" "}
                    VND/Khoá
                  </Text>
                </Flex>
                {isUpcoming(item.startDate) && (
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
                    {formatDate(item.startDate)}
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
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  return (
    <Stack pt={50} pb={50} gap={5} className="trainingProgramCon">
      <MyTitle topic={data.topic} color="white" colorText="white" />
      {renderListCourse(data)}
      <Center mt={30}>
        <MyButton
          label="Xem các khoá học tại T-Learning"
          link="/courses"
          variant="default"
          color="white"
          size="md"
          c="var(--mantine-color-brand-5)"
        />
      </Center>
    </Stack>
  );
}
