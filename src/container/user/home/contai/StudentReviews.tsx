"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import { homeMockData } from "@/modules/data/DataHome";
import { IParentReviewsHome } from "@/modules/interface/IHome";
import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import "@/styles/client/home/ParentReviews.scss";
import MyButton from "@/components/mybutton/MyButton";
import {
  IconChevronRight,
  IconClock,
  IconSchool,
  IconTimeDuration0,
  IconTimeline,
} from "@tabler/icons-react";
import { formatDate } from "@/utils/format";
import { IStudentReviews } from "@/modules/interface/IParentReviews";

export default function StudentReviews() {
  const data: IParentReviewsHome = homeMockData.parentReviewsData;

  const renderListParentReviews = (data: IStudentReviews[]) => (
    <Carousel className="carousel" slideGap="md">
      {data.map((item, index) => (
        <Carousel.Slide key={item.id} h={250} style={{ position: "relative" }}>
          <Flex
            align={"center"}
            w={"100%"}
            pl={80}
            justify={"center"}
            h={"100%"}
          >
            <Image
              w={250}
              h={250}
              fit="cover"
              style={{
                borderRadius: "50%",
                border: "6px solid var(--mantine-color-brand-2)",
                position: "absolute",
                left: 0,
                bottom: 0,
                top: 0,
                margin: "auto",
              }}
              src={item.avt}
            />
            <Stack
              gap={5}
              bg={"brand.0"}
              style={{
                userSelect: "none",
                padding: "10px 10px 10px 175px",
                borderRadius: "10px",
                border: "1px solid var(--mantine-color-brand-2)",
              }}
            >
              <Text fz={25} fw={600} c={"brand.5"}>
                {item.name}
              </Text>
              <Group gap={5}>
                <IconSchool size={22} color="var(--mantine-color-brand-5)" />
                <Text>{item.school}</Text>
              </Group>
              <Group gap={5}>
                <IconClock size={22} color="var(--mantine-color-brand-5)" />
                <Text>{formatDate(item.day)}</Text>
              </Group>
              <div
                style={{ height: "0.5px", backgroundColor: "#E3E9F0" }}
              ></div>
              <Text lineClamp={4}>{item.description}</Text>
            </Stack>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  return (
    <Stack pt={50} pb={50} gap={5} className="parentReviews">
      <Flex justify={"space-between"}>
        <MyTitle topic={data.topic} index={true} />
        <MyButton
          label={"Xem tất cả"}
          link={""}
          icon1={<IconChevronRight size={20} />}
          variant="filled"
        />
      </Flex>
      {renderListParentReviews(data.studentReviews)}
      <Grid></Grid>
    </Stack>
  );
}
