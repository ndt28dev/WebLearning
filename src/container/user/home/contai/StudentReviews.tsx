"use client";
import MyTitle from "@/components/client/mytitle/MyTitle";
import { homeMockData } from "@/modules/data/DataHome";
import { IParentReviewsHome } from "@/modules/interface/IHome";
import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Center,
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
import MyGroupText from "@/components/mygrouptext/MyGroupText";

export default function StudentReviews() {
  const data: IParentReviewsHome = homeMockData.parentReviewsData;

  const renderListParentReviews = (data: IStudentReviews[]) => (
    <Carousel
      className="carousel"
      slideGap="md"
      emblaOptions={{ loop: true, align: "start" }}
    >
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
              <MyGroupText
                gap="5"
                icon={
                  <IconSchool size={22} color="var(--mantine-color-brand-5)" />
                }
                text1={item.school}
              />
              <MyGroupText
                gap="5"
                icon={
                  <IconClock size={22} color="var(--mantine-color-brand-5)" />
                }
                text1={formatDate(item.day)}
              />
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
      <MyTitle topic={data.topic} />
      {renderListParentReviews(data.studentReviews)}
      <Center mt={30}>
        <MyButton
          label={"Xem tất cả"}
          link={""}
          icon1={<IconChevronRight size={20} />}
          variant="filled"
        />
      </Center>
    </Stack>
  );
}
