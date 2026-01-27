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
import "@/styles/client/home/TrainingProgramCon.scss";
import { formatDate } from "@/utils/format";
import MyButton from "@/components/mybutton/MyButton";
import { isUpcoming } from "@/utils/helpers";
import MyTitle from "@/components/client/mytitle/MyTitle";
import CourseItemOffline from "../../course-offline/contai/CourseItemOffline";
import TrainingProgramItem from "./TrainingProgramItem";

export default function TrainingProgramCon() {
  const data: ITrainingProgramHome = homeMockData.trainingProgramData;

  const renderListCourse = (data: ITrainingProgramHome) => (
    <Carousel
      className="carousel"
      withControls={data.trainingPrograms.length > 3}
      withIndicators={data.trainingPrograms.length > 3}
      slideSize="33.33333%"
      slideGap="md"
      loop
      align="start"
      style={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%" },
      ]}
    >
      {data.trainingPrograms.map((item) => (
        <Carousel.Slide key={item.id}>
          <TrainingProgramItem item={item} />
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
          link="/courses-offline"
          variant="default"
          color="white"
          size="md"
          c="var(--mantine-color-brand-5)"
        />
      </Center>
    </Stack>
  );
}
